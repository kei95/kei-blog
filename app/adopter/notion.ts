import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import type { Post } from "@prisma/client";
import type {
  PageObjectResponse,
  PropertyItemPropertyItemListResponse,
  TitlePropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const notion = new Client({
  auth: process.env.NOTION_SECRET,
  notionVersion: "2022-06-28",
});

/** Extract cover image's url from given page */
function getCoverImageUrlFromPage(page: PageObjectResponse): string {
  const coverObj = page.cover;
  if (coverObj?.type === "external") {
    return coverObj.external.url;
  }
  return "";
}

/** Gets page content as markdown */
export async function getPostMarkdownById(id: string): Promise<{
  markdown: string;
}> {
  const notionToMarkdown = new NotionToMarkdown({ notionClient: notion });

  const notionPage = await notionToMarkdown.pageToMarkdown(id || "");
  const markdown = notionToMarkdown.toMarkdownString(notionPage);

  return { markdown };
}

export async function getNotionPages(): Promise<PageObjectResponse[]> {
  const database = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID || "",
    sorts: [{ direction: "ascending", timestamp: "created_time" }],
  });

  if (!database) throw new Error("Failed to retrieve database");

  const pages = database.results as PageObjectResponse[];

  return pages;
}

/** Converts given page to Post object to insert/upsert to db */
export async function getPostObjectFromPage(
  page: PageObjectResponse
): Promise<Post> {
  const titleId = page.properties.Name.id;
  const pageProperties = (await notion.pages.properties.retrieve({
    page_id: page.id,
    property_id: titleId,
  })) as PropertyItemPropertyItemListResponse;

  // extract title of the post
  const [titleProperty] = pageProperties.results as [
    TitlePropertyItemObjectResponse
  ];

  // Post contents
  const pageTitle = titleProperty.title.plain_text;
  const coverImageUrl = getCoverImageUrlFromPage(page);
  const { markdown } = await getPostMarkdownById(page.id);

  const post: Post = {
    id: page.id,
    title: pageTitle,
    coverUrl: coverImageUrl,
    markdown,
    createdAt: new Date(page.created_time),
  };

  return post;
}

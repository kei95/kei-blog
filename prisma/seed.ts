import { PrismaClient } from "@prisma/client";
import { NotionToMarkdown } from "notion-to-md";

import { notion } from "../app/adopter/notion";
import type {
  PageObjectResponse,
  PropertyItemPropertyItemListResponse,
  TitlePropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

const prisma = new PrismaClient();

/** Gets page content as markdown */
export async function getPostMarkdownById(id: string): Promise<{
  markdown: string;
}> {
  const notionToMarkdown = new NotionToMarkdown({ notionClient: notion });

  const notionPage = await notionToMarkdown.pageToMarkdown(id || "");
  const markdown = notionToMarkdown.toMarkdownString(notionPage);

  return { markdown };
}

const upsertBlogPosts = async () => {
  // ======== first part - get database ========
  const database = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID || "",
    sorts: [{ direction: "ascending", timestamp: "created_time" }],
  });

  if (!database) throw new Error("Failed to retrieve database");

  const pages = database.results as PageObjectResponse[];

  // ======== second part - get page titles ========

  // loop through each page of retrieved database to upsert each items
  for (const page of pages) {
    const titleId = page.properties.Name.id;
    const pageProperties = (await notion.pages.properties.retrieve({
      page_id: page.id,
      property_id: titleId,
    })) as PropertyItemPropertyItemListResponse;

    // extract title of the post
    const [titleProperty] = pageProperties.results as [
      TitlePropertyItemObjectResponse
    ];
    const pageTitle = titleProperty.title.plain_text;

    // extract page's content as markdown
    const { markdown } = await getPostMarkdownById(page.id);

    const post = Object.assign(
      {},
      { id: page.id, title: pageTitle, markdown, createdAt: page.created_time }
    );

    await prisma.post.upsert({
      where: { id: page.id },
      update: post,
      create: post,
    });
  }
};

upsertBlogPosts();

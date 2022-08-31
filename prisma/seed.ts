import { notion } from "../app/adopter/notion";
import { PrismaClient } from "@prisma/client";
import type {
  PageObjectResponse,
  PropertyItemPropertyItemListResponse,
  TitlePropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

const prisma = new PrismaClient();

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

    const post = Object.assign(
      {},
      { id: page.id, title: pageTitle, createdAt: page.created_time }
    );

    await prisma.post.upsert({
      where: { id: page.id },
      update: post,
      create: post,
    });
  }
};

upsertBlogPosts();

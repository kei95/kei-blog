import { PrismaClient } from "@prisma/client";

import { getNotionPages, getPostObjectFromPage } from "../app/adopter/notion";

const prisma = new PrismaClient();

const upsertBlogPosts = async () => {
  const pages = await getNotionPages();

  // loop through each page of retrieved database to upsert each items
  for (const page of pages) {
    const post = await getPostObjectFromPage(page);

    await prisma.post.upsert({
      where: { id: page.id },
      update: post,
      create: post,
    });
  }
};

upsertBlogPosts();

import { marked } from "marked";
import { NotionToMarkdown } from "notion-to-md";
import type { Post } from "@prisma/client";

import { prisma } from "~/db.server";
import { notion } from "~/adopter/notion";

export async function getPosts(): Promise<Array<Post>> {
  return prisma.post.findMany();
}

export async function getPostById(id: string): Promise<{
  html: string;
}> {
  // TODO: add error handling
  const n2m = new NotionToMarkdown({ notionClient: notion });

  const notionPage = await n2m.pageToMarkdown(id || "");

  const markdownString = n2m.toMarkdownString(notionPage);
  const html = marked(markdownString);

  return { html };
}

import { marked } from "marked";
import type { Post } from "@prisma/client";

import { prisma } from "~/db.server";
import type { PageContent } from "~/routes/posts/$id";

export async function getPosts(): Promise<Array<Post>> {
  return prisma.post.findMany();
}

/** Get PostContent from Post entity and return it */
export async function getPostById(id: string): Promise<PageContent> {
  const post = await prisma.post.findUnique({ where: { id } });

  const html = marked(post?.markdown ?? "");
  const coverUrl = post?.coverUrl ?? "";

  return { html, coverUrl };
}

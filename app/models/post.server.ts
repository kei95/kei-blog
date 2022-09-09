import { marked } from "marked";
import type { Post } from "@prisma/client";

import { prisma } from "~/db.server";

export async function getPosts(): Promise<Array<Post>> {
  return prisma.post.findMany();
}

/** Get `markdown` body from Post entity and return it as string */
export async function getPostById(id: string): Promise<{
  html: string;
}> {
  const post = await prisma.post.findUnique({ where: { id } });

  const html = marked(post?.markdown ?? "");

  return { html };
}

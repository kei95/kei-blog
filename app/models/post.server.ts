import { prisma } from "~/db.server";

import type { Post } from "@prisma/client";

export async function getPosts(): Promise<Array<Post>> {
  return prisma.post.findMany();
}

export async function getPost(slug: string) {
  return prisma.post.findUnique({ where: { slug } });
}

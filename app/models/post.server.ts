import type { Post } from "@prisma/client";

import { prisma } from "~/db.server";
import type { PageContent } from "~/routes/posts/$id";
import { convertMarkdownToHTML } from "~/lib/markdown";

export async function getPosts(): Promise<Array<Post>> {
  return prisma.post.findMany({
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });
}

/** Get PostContent from Post entity and return it */
export async function getPostById(id: string): Promise<PageContent> {
  const post = await prisma.post.findUnique({ where: { id } });

  const html = convertMarkdownToHTML(post?.markdown ?? "");
  const coverUrl = post?.coverUrl ?? "";

  return { html, coverUrl };
}

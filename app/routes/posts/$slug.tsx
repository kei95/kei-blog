import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import type { Post } from "@prisma/client";

import { getPost } from "~/models/post.server";

type LoaderData = { post: Post };

export const loader: LoaderFunction = async ({ params }) => {
  // TODO: add error handling
  if (!params.slug) throw new Error("params.slug is required");

  const post = await getPost(params.slug);

  if (!post) throw new Error(`Post not found: ${params.slug}`);

  return json({ post });
};

export default function PostSlug() {
  const { post } = useLoaderData<LoaderData>();

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">{post.title}</h1>
    </main>
  );
}

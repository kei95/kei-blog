import { Link, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import type { Post } from "@prisma/client";

import { getPosts } from "~/models/post.server";

type LoaderData = {
  // this is a handy way to say: "posts is whatever type getPosts resolves to"
  posts: Post[];
};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({
    posts: await getPosts(),
  });
};

export default function Posts() {
  const { posts } = useLoaderData<LoaderData>();

  return (
    <main>
      <h1>Posts</h1>
      <ul>
        {posts.map((post, idx) => (
          <li key={`${idx}_${post.id}`}>
            <Link to={post.id} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

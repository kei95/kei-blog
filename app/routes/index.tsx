import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import type { Post } from "@prisma/client";

import { getPosts } from "~/models/post.server";
import { getTypeSafeLoadedData } from "~/utils/makeTypeSafeLoader";

import Home from "~/routes/__home";
import About from "~/routes/__about";
import Career from "~/routes/__career";
import Posts from "~/routes/__posts";

type LoaderData = {
  posts: Post[];
};

export const loader: LoaderFunction = async () => {
  return json<LoaderData>({
    posts: await getPosts(),
  });
};

export default function Index() {
  const { posts } = useLoaderData<LoaderData>();
  const typeSafePosts = getTypeSafeLoadedData<Post[]>(posts);

  return (
    <div className="container mx-auto px-[10wv] scroll-smooth scroll-p-16">
      <Home />
      <About />
      <Career />
      <Posts posts={typeSafePosts} />
    </div>
  );
}

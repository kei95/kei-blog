import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getPostById } from "~/models/post.server";

type LoaderData = { html: string };

export const loader: LoaderFunction = async ({ params }) => {
  return json<LoaderData>(await getPostById(params.id || ""));
};

export default function PostSlug() {
  const { html } = useLoaderData<LoaderData>();

  return (
    <main className="mx-auto max-w-4xl">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}

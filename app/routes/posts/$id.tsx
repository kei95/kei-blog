import { json } from "@remix-run/node";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { getPostById } from "~/models/post.server";

// gets highlight.js's styles to apply cosmetic update to codes in given html
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/a11y-dark.min.css",
    },
  ];
};

/** Content to be consumed in this page */
export type PageContent = {
  html: string;
  coverUrl: string;
};

type LoaderData = PageContent;

export const loader: LoaderFunction = async ({ params }) => {
  return json<LoaderData>(await getPostById(params.id || ""));
};

export default function PostSlug() {
  const { html, coverUrl } = useLoaderData<LoaderData>();

  return (
    <main className="mx-auto max-w-4xl px-8">
      {coverUrl ? (
        <img className="mx-auto h-80" src={coverUrl} alt={`Cover`} />
      ) : null}
      <article className="mx-auto prose dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </main>
  );
}

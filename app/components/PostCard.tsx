import type { Post } from "@prisma/client";
import { getPostCreatedAt } from "~/lib/date";

import RouteLink from "~/lib/RouteLink";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <RouteLink
      to={`posts/${post.id}`}
      className="col-span-4 bg-background_darken rounded-md"
    >
      {post.coverUrl ? (
        <img
          className="h-80 w-full rounded-md"
          src={post.coverUrl ?? ""}
          alt={`post cover: ${post.title}`}
        />
      ) : (
        <div className="h-80 w-full flex justify-center align-middle items-center rounded-md bg-white">
          <h1 className="title-text-h1 text-4xl text-center">Blog post</h1>
        </div>
      )}

      <div className="px-4 py-4">
        <h3 className=" text-text pb-4">{getPostCreatedAt(post.createdAt)}</h3>
        <h2>{post.title}</h2>
      </div>
    </RouteLink>
  );
}

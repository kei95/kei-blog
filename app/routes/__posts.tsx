import type { Post } from "@prisma/client";
import PostCard from "~/components/PostCard";

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <div id="posts" className="pb-14">
      <h2 className="title-text text-4xl w-max">Posts</h2>

      <div className="py-2" />

      <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto gap-y-16">
        {posts.map((post) => (
          <PostCard post={post} key={`${post.id}`} />
        ))}
      </div>
    </div>
  );
}

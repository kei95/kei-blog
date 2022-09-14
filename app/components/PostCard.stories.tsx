import type { Post } from "@prisma/client";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import PostCard from "./PostCard";

export default {
  title: "PostCard",
  component: PostCard,
} as ComponentMeta<typeof PostCard>;

const mockedPost: Post = {
  id: "neque-porro-quisquam-est",
  title: "Lorem_Ipsum",
  coverUrl: "https://www.notion.so/images/page-cover/woodcuts_15.jpg",
  createdAt: new Date("2022-08-29T03:22:00.000Z"),
  markdown: "",
};

const Template: ComponentStory<typeof PostCard> = (args) => (
  <PostCard {...args} />
);

export const PostWithCover = Template.bind({});
PostWithCover.args = {
  post: mockedPost,
};

export const PostWithoutCover = Template.bind({});
PostWithoutCover.args = {
  post: Object.assign({}, mockedPost, { ...mockedPost, coverUrl: null }),
};

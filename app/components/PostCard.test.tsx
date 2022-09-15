import { render, screen } from "@testing-library/react";
import type { Post } from "@prisma/client";

import PostCard from "./PostCard";

const mockedPost: Post = {
  id: "neque-porro-quisquam-est",
  title: "Lorem_Ipsum",
  coverUrl: "https://www.notion.so/images/page-cover/woodcuts_15.jpg",
  createdAt: new Date("2022-08-29T03:22:00.000Z"),
  markdown: "",
};

describe("<PostCard />", () => {
  test("Given a post - it should render the component with given property", () => {
    const expectedDate = "Aug 28th, - 2022";
    const linkName = "post cover: Lorem_Ipsum Aug 28th, - 2022 Lorem_Ipsum";
    const altText = `post cover: ${mockedPost.title}`;

    render(<PostCard post={mockedPost} />);

    const linkElement = screen.getByRole("link", { name: linkName });
    expect(linkElement).toHaveAttribute("href", `posts/${mockedPost.id}`);
    expect(screen.getByText(mockedPost.title)).toBeTruthy();
    expect(screen.getByText(expectedDate)).toBeTruthy();
    expect(screen.getByAltText(altText)).toHaveAttribute(
      "src",
      mockedPost.coverUrl
    );
  });

  test("Given a post without a cover - it should render the component with default post image", () => {
    const expectedDate = "Aug 28th, - 2022";
    const linkName = "Blog post Aug 28th, - 2022 Lorem_Ipsum";
    const defaultCoverText = "Blog post";
    const mockedPostWithoutCover = {
      ...mockedPost,
      coverUrl: null,
    };

    render(<PostCard post={mockedPostWithoutCover} />);

    const linkElement = screen.getByRole("link", { name: linkName });
    expect(linkElement).toHaveAttribute(
      "href",
      `posts/${mockedPostWithoutCover.id}`
    );
    expect(screen.getByText(mockedPost.title)).toBeTruthy();
    expect(screen.getByText(expectedDate)).toBeTruthy();
    expect(screen.getByText(defaultCoverText)).toBeTruthy();
  });
});

import { render, screen } from "@testing-library/react";

import Header, { HEADER_TEST_ID } from "./Header";

describe("<Header />", () => {
  test("render the component - it should have expected elements", () => {
    render(<Header />);
    expect(screen.getByTestId(HEADER_TEST_ID)).toMatchSnapshot();
  });

  test("check each link buttons - they should be tagged to expected section", () => {
    render(<Header />);
    const expectedLinks = [
      { to: "/", name: "Logo" },
      { to: "/", name: "Home" },
      { to: "#career", name: "Career" },
    ];

    // Iterate over each links - it should find all expected links with its direction value
    for (let i = 0; i < expectedLinks.length; i++) {
      const { to, name } = expectedLinks[i];
      const linkEl = screen.getByRole("link", { name });

      expect(linkEl).toHaveAttribute("href", `#${to}`);
    }
  });
});

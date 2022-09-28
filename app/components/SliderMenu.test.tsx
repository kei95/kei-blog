import { render, screen } from "@testing-library/react";

import SliderMenu, { SLIDER_MENU_TEST_ID } from "./SliderMenu";

describe("<SliderMenu />", () => {
  Object.defineProperties(window.HTMLElement.prototype, {
    offsetWidth: {
      get: function () {
        return "500px";
      },
    },
  });

  test("render the component - it should have expected elements", () => {
    render(<SliderMenu />);
    expect(screen.getByTestId(SLIDER_MENU_TEST_ID)).toMatchSnapshot();
  });

  test("check each link buttons - they should be tagged to expected section", () => {
    render(<SliderMenu />);
    const expectedLinks = [
      { to: "/", name: "Home" },
      { to: "/#about", name: "About" },
      { to: "/#career", name: "Career" },
      { to: "/#posts", name: "Posts" },
    ];

    // Iterate over each links - it should find all expected links with its direction value
    for (let i = 0; i < expectedLinks.length; i++) {
      const { to, name } = expectedLinks[i];
      const linkEl = screen.getByRole("link", { name });

      expect(linkEl).toHaveAttribute("href", `${to}`);
    }
  });
});

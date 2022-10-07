import { render, screen } from "@testing-library/react";

import GradientHoverText from "./GradientHoverText";

describe("<GradientHoverText />", () => {
  test("render the component - it should match the snapshot", () => {
    const mockedText = "Lorem Ipsum";

    render(<GradientHoverText title={mockedText} className="px-4" />);
    expect(screen.getByText(mockedText)).toMatchSnapshot();
  });
});

import { useState } from "react";

import RouteLink from "~/lib/RouteLink";
import GradientHoverText from "~/components/GradientHoverText";

export const SLIDER_MENU_TEST_ID = "SLIDER_MENU_TEST_ID";
type SliderState = "OPEN" | "CLOSED";

export default function SliderMenu() {
  const [sliderMenuState, setSliderMenuState] = useState<SliderState>("CLOSED");

  const sliderWidth = sliderMenuState === "OPEN" ? "w-56" : "w-0";

  const openSliderMenu = () => {
    setSliderMenuState("OPEN");
  };

  const closeSliderMenu = () => {
    setSliderMenuState("CLOSED");
  };

  const handleOnclickLink = () => {
    closeSliderMenu();
  };

  return (
    <div data-testid={SLIDER_MENU_TEST_ID} className="md:hidden">
      <button type="button" onClick={openSliderMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Slider menu - only shows up in narrow screens */}
      <aside
        className={`overflow-x-hidden right-0 duration-300 fixed top-0 h-screen bg-background_darken ${sliderWidth}`}
      >
        <ul className="inline-block">
          <li>
            <button
              className="px-4 p-1 text-4xl hover:opacity-60"
              type="button"
              onClick={closeSliderMenu}
            >
              &times;
            </button>
          </li>
          <li>
            <RouteLink onClick={handleOnclickLink} to="/">
              <GradientHoverText className="px-4 py-1" title="Home" />
            </RouteLink>
          </li>
          <li>
            <RouteLink onClick={handleOnclickLink} to="/#about">
              <GradientHoverText className="px-4 py-1" title="About" />
            </RouteLink>
          </li>
          <li>
            <RouteLink onClick={handleOnclickLink} to="/#career">
              <GradientHoverText className="px-4 py-1" title="Career" />
            </RouteLink>
          </li>
          <li>
            <RouteLink onClick={handleOnclickLink} to="/#posts">
              <GradientHoverText className="px-4 py-1" title="Posts" />
            </RouteLink>
          </li>
        </ul>
      </aside>
    </div>
  );
}

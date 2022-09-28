import { useState } from "react";
import RouteLink from "~/lib/RouteLink";

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
    <div data-testid={SLIDER_MENU_TEST_ID}>
      <button className="md:hidden" type="button" onClick={openSliderMenu}>
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
        <div className="flex flex-col">
          <button type="button" onClick={closeSliderMenu}>
            &times;
          </button>
          <RouteLink onClick={handleOnclickLink} to="/">
            Home
          </RouteLink>
          <RouteLink onClick={handleOnclickLink} to="/#about">
            About
          </RouteLink>
          <RouteLink onClick={handleOnclickLink} to="/#career">
            Career
          </RouteLink>
          <RouteLink onClick={handleOnclickLink} to="/#posts">
            Posts
          </RouteLink>
        </div>
      </aside>
    </div>
  );
}

import { useEffect, useState } from "react";

import RouteLink from "~/lib/RouteLink";
import SliderMenu from "~/components/SliderMenu";
import GradientHoverText from "~/components/GradientHoverText";

export const HEADER_TEST_ID = "HEADER_TEST_ID";

export default function Header(): JSX.Element {
  const [isScrolledToChangeColor, setIsScrolledToChangeColor] = useState(false);

  const headerColor = isScrolledToChangeColor
    ? "bg-background_darken border-border"
    : "bg-transparent border-transparent";

  // set lister on scroll to change header's color
  useEffect(() => {
    // check if window exists to prevent it from crashing in server
    if (typeof window === "undefined") return;

    // set default background color first for the case the page is reloaded
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setIsScrolledToChangeColor(window.pageYOffset > 25);
  };

  return (
    <header
      className={`header-body text-white ${headerColor} z-50`}
      data-testid={HEADER_TEST_ID}
    >
      <RouteLink to="/" className="text-lg font-bold font-serif">
        Kei Yamashita
      </RouteLink>

      <ul className="hidden md:flex flex-row items-center align-middle gap-4">
        <li>
          <RouteLink to="/">
            <GradientHoverText title="Home" />
          </RouteLink>
        </li>
        <li>
          <RouteLink to="/#about">
            <GradientHoverText title="About" />
          </RouteLink>
        </li>
        <li>
          <RouteLink to="/#career">
            <GradientHoverText title="Career" />
          </RouteLink>
        </li>
        <li>
          <RouteLink to="/#posts">
            <GradientHoverText title="Posts" />
          </RouteLink>
        </li>
      </ul>

      <SliderMenu />
    </header>
  );
}

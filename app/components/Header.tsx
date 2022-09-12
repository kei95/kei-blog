import { useEffect, useState } from "react";
import RouteLink from "~/lib/RouteLink";

export const HEADER_TEST_ID = "HEADER_TEST_ID";

export default function Header(): JSX.Element {
  const [isScrolledToChangeColor, setIsScrolledToChangeColor] = useState(false);

  const headerColor = isScrolledToChangeColor
    ? "bg-background_darken border-border"
    : "bg-transparent border-transparent";

  const handleScroll = () => {
    setIsScrolledToChangeColor(window.pageYOffset > 25);
  };

  // set lister on scroll to change header's color
  useEffect(() => {
    // check if window exists to prevent it from crashing in server
    if (typeof window === "undefined") return;
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

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
          <RouteLink to="/">Home</RouteLink>
        </li>
        <li>
          <RouteLink to="/#about">About</RouteLink>
        </li>
        <li>
          <RouteLink to="/#career">Career</RouteLink>
        </li>
        <li>
          <RouteLink to="/#posts">Posts</RouteLink>
        </li>
      </ul>

      {/* Shows up only when the screen is less than medium size */}
      <button className="md:hidden">
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
    </header>
  );
}

import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolledToChangeColor, setIsScrolledToChangeColor] = useState(false);
  const headerColor = isScrolledToChangeColor
    ? "bg-background_darken"
    : "bg-transparent";

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
    <header className={`header-body text-white ${headerColor}`}>
      <Link to="/" className="text-lg font-bold">
        Logo
      </Link>

      <ul className="hidden md:flex flex-row items-center align-middle gap-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="#career">Career</Link>
        </li>
      </ul>

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

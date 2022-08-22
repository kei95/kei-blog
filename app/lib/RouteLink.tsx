import { Link } from "@remix-run/react";
import type { LinkProps } from "@remix-run/react";

/**
 * Injected <Link /> component for UI unit test & story to run.
 * Currently, RTL cannot test components that uses remix
 * This component can be replaced in the future once Remix announces its official testing APIs.
 * Check https://github.com/remix-run/remix/discussions/2481 for updates/details
 */
export default function RouteLink({
  to,
  children,
  ...rest
}: LinkProps): JSX.Element | null {
  const isTestingEnv = typeof jest !== "undefined";
  // asserts any since global doesn't know if it contains "IS_STORYBOOK"
  const isOnStorybook = (global as any).IS_STORYBOOK;

  if (isTestingEnv || isOnStorybook)
    return (
      <a href={`#${to}`} {...rest}>
        {children}
      </a>
    );

  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
}

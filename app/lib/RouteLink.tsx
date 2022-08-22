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
}: LinkProps): JSX.Element {
  const isTestingEnv = process.env.JEST_WORKER_ID !== undefined;
  const isOnStorybook = process.env.STORYBOOK !== undefined;

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

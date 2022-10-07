import React from "react";

interface GradientHoverTextProps {
  title: string;
  className?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >["className"];
}

export default function GradientHoverText({
  title,
  className,
}: GradientHoverTextProps) {
  const styleClassName =
    "bg-clip-text text-transparent bg-white hover:bg-gradient-to-r from-[#edca85] via-[#d55594] to-[#5594d5] " +
    className;
  return <h3 className={styleClassName}>{title}</h3>;
}

interface RadioWaveButtonProps extends React.SVGProps<SVGSVGElement> {
  animationState: "ACTIVE" | "INACTIVE";
  buttonSize?: number;
  animationSize?: number;
  /** Class name to set style on button with tailwind */
  buttonClassName?: string;
}

export default function RadioWaveButton({
  animationState,
  buttonSize = 5,
  animationSize = 15,
  buttonClassName,
  ...props
}: RadioWaveButtonProps) {
  const defaultButtonClassName = "fill-white stroke-white";

  return (
    <svg width={animationSize * 3.5} height={animationSize * 2.5} {...props}>
      {animationState === "ACTIVE" ? (
        <>
          <circle
            cx="50%"
            cy="50%"
            r={0}
            stroke="#fff"
            strokeWidth={2}
            fill="none"
          >
            <animate
              attributeName="r"
              from={0}
              to={animationSize}
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              from={1}
              to={0}
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="50%"
            cy="50%"
            r={0}
            stroke="#fff"
            strokeWidth={2}
            fill="none"
          >
            <animate
              attributeName="r"
              from={0}
              to={animationSize}
              dur="3s"
              repeatCount="indefinite"
              begin="0.75s"
            />
            <animate
              attributeName="stroke-opacity"
              from={1}
              to={0}
              dur="3s"
              repeatCount="indefinite"
              begin="0.75s"
            />
          </circle>
          <circle
            cx="50%"
            cy="50%"
            r={0}
            stroke="#fff"
            strokeWidth={2}
            fill="none"
          >
            <animate
              attributeName="r"
              from={0}
              to={animationSize}
              dur="3s"
              repeatCount="indefinite"
              begin="1.5s"
            />
            <animate
              attributeName="stroke-opacity"
              from={1}
              to={0}
              dur="3s"
              repeatCount="indefinite"
              begin="1.5s"
            />
          </circle>
        </>
      ) : null}
      <circle
        cx="50%"
        cy="50%"
        r={buttonSize}
        className={buttonClassName ?? defaultButtonClassName}
      />
    </svg>
  );
}

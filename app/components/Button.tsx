export interface ButtonProps {
  text: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/** This is an example component to test storybook */
export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="bg-primary text-white rounded-lg py-2 px-4"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

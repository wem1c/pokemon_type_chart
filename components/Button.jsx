// Module imports
import Link from "next/link";

const Button = ({ url, text }) => {
  return (
    <Link
      href={url}
      className={`mx-auto px-4 py-2 rounded-md border border-black w-fit hover:scale-105 active:translate-y-1`}
    >
      <p>{text}</p>
    </Link>
  );
};

export default Button;

import Link from "next/link";

const Footer = () => {
  return (
    <div className='p-5 mt-5 bg-slate-700 flex flex-col text-white text-center text-md md:text-lg'>
      <p>Made with ❤️ by Conor C. Peterson</p>
      <div className='mt-2 flex flex-row justify-center space-x-16 text-blue-400 underline'>
        <Link href={"https://social.linux.pizza/@wemic"}>
          <span>Mastodon</span>
        </Link>
        <Link href={"https://github.com/wem1c/pokemon_type_chart"}>
          <span>GitHub</span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

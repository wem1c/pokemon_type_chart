import Head from "next/head";

import Footer from "../components/Footer.jsx";
import Link from "next/link.js";
import Button from "../components/Button.jsx";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Pokemon Type Chart</title>
      </Head>
      <main className='min-h-[80svh] flex flex-col max-w-xl m-auto space-y-2 p-5'>
        <h1 className='text-xl text-center font-semibold'>What is this?</h1>
        <p>
          Playing Pokemon GO on your phone and having to look at large,
          fixed-size, static images of a chart thorugh a small screen was a
          bummer to do.
        </p>
        <p>
          So I made this Progressive Web App (PWA) which in its base is a
          pokemon chart with sticky headers so that you don't get lost scrolling
          on smaller screens.
        </p>
        <p>
          The fact that it's a PWA means that you can save it to your home
          screen and then open it by tapping the icon - just like you would any
          other app, without having to go through your browser every time!
        </p>
        <p>
          To do this, either click the notification that pops up when you first
          open this website or tap on the three dot menu and select: "Install"
          or "Install app" (depends on the browser you're using).
        </p>
        <br></br>
        <h2 className='text-lg text-center font-semibold'>
          How do I read the chart?
        </h2>
        <p>
          The Pokemon types on the top (the columns) are the ones defending. The
          types on the left side (the rows) are attacking. The numbers in the
          fields represent the multiplier applied to the damage that the
          attacking type deals to the defending type.
        </p>
        <p>
          For example:{" "}
          <ul className='list-inside list-disc'>
            <li>FIGHTING types deal 2x (double) damage to NORMAL types</li>
            <li>FIRE types deal 0.5x (half) damage to other FIRE types</li>
            <li>ELECTRIC types deal 0x (zero) damage to GROUND types</li>
          </ul>
        </p>
        <br></br>
        <p className='text-center'>
          This is a work in progress. You can find the Todo list and report any
          problems/corrections over{" "}
          <Link
            href={"https://github.com/wem1c/pokemon_type_chart"}
            className='underline text-blue-500'
          >
            <span>on GitHub</span>
          </Link>
        </p>
        <Button url='/' text={"Home"} />
      </main>
      <Footer />
    </>
  );
}

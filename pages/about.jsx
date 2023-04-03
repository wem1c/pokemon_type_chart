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
          This website was made as a result of me eventually becoming annoyed
          that there is was no responsive version of a pokemon type chart
          available online.
        </p>
        <p>
          Playing Pokemon GO on your phone and having to look at tiny, fixed,
          static images of a chart was a bummer to do.
        </p>
        <br></br>
        <h2 className='text-lg text-center font-semibold'>
          How do I read the chart?
        </h2>
        <p>
          The Pokemon types on the top (the columns) are the ones defending. The
          types on the left side (the rows) are attacking.
        </p>
        <p>For example: Fighting types deal 2x damage to Normal types.</p>
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

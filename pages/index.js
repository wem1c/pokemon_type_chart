import Head from "next/head";

import Chart from "../components/Chart.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemon Type Chart</title>
        <meta name='description' content='Responsive Pokemon type chart' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='h-[100svh]'>
        <Chart />
      </main>
    </>
  );
}

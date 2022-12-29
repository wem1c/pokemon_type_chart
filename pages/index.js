import Head from "next/head";

import Chart from "../components/Chart.js";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pokemon Type Chart</title>
        <meta
          name="description"
          content="Interactive Pokemon type chart created with Next.js and Tailwind"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Chart />
      </main>
    </>
  );
}

import "../styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name='application-name' content='Pokemon Type Chart' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Pokemon Type Chart' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />

        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1'
        />
        <meta
          name='description'
          content='A mobile-oriented responsive Pokemon type chart.'
        />
        <title>Responsive Pokemon Type Chart</title>

        <link rel='manifest' href='/manifest.json' />
        <link
          href='/favicons/favicon-16x16.png'
          rel='icon'
          type='image/png'
          sizes='16x16'
        />
        <link
          href='/favicons/favicon-32x32.png'
          rel='icon'
          type='image/png'
          sizes='32x32'
        />
        <link
          rel='apple-touch-icon'
          href='/favicons/apple-touch-icon.png'
        ></link>
        <link rel='shortcut icon' href='/favicon.ico' />

        <meta name='theme-color' content='#FFFFFF' />
        <meta name='twitter:card' content='summary' />
        <meta
          name='twitter:url'
          content='https://pokemon-type-chart.vercel.app/'
        />
        <meta name='twitter:title' content='Pokemon Type Chart' />
        <meta
          name='twitter:description'
          content='A mobile-oriented responsive Pokemon type chart'
        />
        <meta
          name='twitter:image'
          content='https://pokemon-type-chart.vercel.app/favicons/android-chrome-192x192.png'
        />

        <meta property='og:type' content='website' />
        <meta property='og:title' content='Pokemon Type Chart' />
        <meta
          property='og:description'
          content='A mobile-oriented responsive Pokemon type chart'
        />
        <meta property='og:site_name' content='PWA App' />
        <meta
          property='og:url'
          content='https://pokemon-type-chart.vercel.app/'
        />
        <meta
          property='og:image'
          content='https://pokemon-type-chart.vercel.app/favicons/apple-touch-icon.png'
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />

        <link rel="apple-touch-icon" sizes="180x180" href="/cdn/ico/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/cdn/ico/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/cdn/ico/favicon-16x16.png" />
        <link rel="manifest" href="/cdn/ico/site.webmanifest" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

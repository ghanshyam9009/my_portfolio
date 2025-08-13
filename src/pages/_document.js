// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        {/* <link rel="icon" href="./dp.ico" /> */}
        {/* Global Stylesheets */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Meta Tags */}
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Anurag Dev Portfolio - Full Stack Developer specializing in the MERN stack"
        />
        <meta
          name="keywords"
          content="Anurag, Full Stack Developer, MERN, Portfolio, Next.js"
        />
        <meta name="author" content="Anurag" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Anurag Dev Portfolio" />
        <meta
          property="og:description"
          content="Portfolio of Anurag, showcasing skills and projects in full-stack development."
        />
        <meta property="og:url" content="https://anurag-dev.vercel.app" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

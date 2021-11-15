import React from "react";
import Head from "next/head";

export default function Layout({ children, title }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white font-body">
      <Head>
        <title>{`robiot - ${title}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Generic */}
        <meta
          name="description"
          content="Hi, I'm Robiot. I'm a software developer"
          title="Robiot"
        />
        <meta name="author" content="Robiot" />
        <meta
          name="keywords"
          content="Programming, Programming, Robiot, xclicker, rustcat"
        />
        <link rel="canonical" href="https://robiot.dev" />

        {/* Open graph */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="robiot" />
        <meta property="og:title" content={`Robiot - ${title}`} />
        <meta property="og:image" content="/images/robot.png" />
        <meta
          property="og:description"
          content="Hi, I'm Robiot. I'm a software developer"
        />
        <meta property="og:url" content="https://robiot.dev" />

        { /* Twitter */}
        <meta property="twitter:title" content={`Robiot - ${title}`} />
        <meta property="twitter:image" content="/images.robot.png" />
        <meta
          property="twitter:description"
          content="Hi, I'm Robiot. I'm a software developer"
        />
        <meta property="twitter:card" content="summary" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </div>
  );
}

import React from "react";
import Head from "next/head";

export default function Layout({ children, title }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white font-body">
      <Head>
        <title>{`robiot - ${title}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="A fast gui autoclicker for linux" title="XClicker" />
        <meta property="og:site_name" content="robiot" />
        <meta property="og:title" content={`Robiot - ${title}`} />
        <meta property="og:url" content="https://robiot.dev" />
        <meta property="og:description" content="Hi, I'm Robiot. I'm a software developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </div>
  );
}

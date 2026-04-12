// pages/_app.js
import "../styles/global.css"; // Import the global CSS
import React from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

import React from "react";
import "../styles/globals.css";
import NoSsr from "@mui/base/NoSsr";

function App({ Component, pageProps }) {
  return (
    <NoSsr>
      <Component {...pageProps} />
    </NoSsr>
  );
}

export default App;

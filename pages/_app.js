import React from "react";
import "../styles/globals.css";
import NoSsr from "@mui/base/NoSsr";
import "../i18next-config/i18next";
import { LanguageProvider } from "../context/LanguageContext";

function App({ Component, pageProps }) {
  return (
    <LanguageProvider>
      <NoSsr>
        <Component {...pageProps} />
      </NoSsr>
    </LanguageProvider>
  );
}

export default App;

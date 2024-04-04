import React from "react";

import Header from "../components/Header";

import "./styles.css";
import SoundEnableProvider from "../components/SoundEnableProvider/SoundEnableProvider";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SoundEnableProvider>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </SoundEnableProvider>
      </body>
    </html>
  );
}

export default RootLayout;

"use client";
import React from "react";
import { Volume2, VolumeX } from "react-feather";
import { useSoundEnabled } from "../SoundEnableProvider/SoundEnableProvider";
import VisuallyHidden from "../VisuallyHidden";
import MaxWidthWrapper from "../MaxWidthWrapper";
import styles from "./Header.module.css";

function Header() {
  const id = React.useId();

  const { soundEnabled, setIsSoundEnabled } = useSoundEnabled();

  return (
    <header className={styles.wrapper}>
      <MaxWidthWrapper className={styles.innerWrapper}>
        <a href="/">Kool Website</a>

        <button
          onClick={() => {
            setIsSoundEnabled(!soundEnabled);
          }}
        >
          {soundEnabled ? <Volume2 /> : <VolumeX />}
          <VisuallyHidden>
            {soundEnabled ? "Disable sound effects" : "Enable sound effects"}
          </VisuallyHidden>
        </button>
      </MaxWidthWrapper>
    </header>
  );
}

export default Header;

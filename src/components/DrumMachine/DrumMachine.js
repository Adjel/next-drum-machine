"use client";
import React from "react";
import useSound from "use-sound";
import { useSoundEnabled } from "../SoundEnableProvider/SoundEnableProvider";
import styles from "./DrumMachine.module.css";
import { HandleSoundContext } from "../Header";

const SOUND_SRC = "/909-drums.mp3";

function DrumMachine() {
  const { soundEnabled } = useSoundEnabled();

  const [play] = useSound(SOUND_SRC, {
    sprite: {
      kick: [0, 350],
      hihat: [374, 160],
      snare: [666, 290],
      cowbell: [968, 200],
    },
    soundEnabled,
  });

  return (
    <div className={styles.wrapper}>
      <button onClick={() => play({ id: "kick" })}>Kick</button>
      <button onClick={() => play({ id: "hihat" })}>Hat</button>
      <button onClick={() => play({ id: "snare" })}>Snare</button>
      <button onClick={() => play({ id: "cowbell" })}>Cowbell</button>
    </div>
  );
}

export default DrumMachine;

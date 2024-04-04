"use client";
import React from "react";

const SoundEnabledContext = React.createContext();

function SoundEnableProvider({ children }) {
  const [soundEnabled, setIsSoundEnabled] = React.useState(true);
  return (
    <SoundEnabledContext.Provider value={{ soundEnabled, setIsSoundEnabled }}>
      {children}
    </SoundEnabledContext.Provider>
  );
}

export function useSoundEnabled() {
  const data = React.useContext(SoundEnabledContext);

  if (!data) {
    throw new Error(
      "Caanot consume SounedEnabled context without a SOundEnabledProvider"
    );
  }

  return data;
}

export default SoundEnableProvider;

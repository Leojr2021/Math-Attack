"use client";

import { useEffect } from "react";
import Image from "next/image";

interface NintendoIntroScreenProps {
  onContinue: () => void;
}

const NINTENDO_SPLASH_DURATION_MS = 1800;

export function NintendoIntroScreen({ onContinue }: NintendoIntroScreenProps) {
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      onContinue();
    }, NINTENDO_SPLASH_DURATION_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [onContinue]);

  return (
    <section className="nintendoSplash" aria-label="Intro de Nintendo">
      <div className="nintendoSplash__logo">
        <Image
          alt="Logo de Nintendo"
          className="nintendoSplash__image"
          height={420}
          priority
          src="/assets/characters/nintendo.png"
          width={420}
        />
      </div>
    </section>
  );
}

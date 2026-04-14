"use client";

import { useCallback, useRef } from "react";

interface ToneStep {
  frequency: number;
  duration: number;
  gain?: number;
  type?: OscillatorType;
}

type BrowserWindow = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext;
  };

function scheduleToneSequence(context: AudioContext, steps: ToneStep[]) {
  let cursor = context.currentTime;

  steps.forEach((step) => {
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();

    oscillator.type = step.type ?? "sine";
    oscillator.frequency.setValueAtTime(step.frequency, cursor);

    gainNode.gain.setValueAtTime(step.gain ?? 0.08, cursor);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, cursor + step.duration);

    oscillator.connect(gainNode);
    gainNode.connect(context.destination);

    oscillator.start(cursor);
    oscillator.stop(cursor + step.duration);

    cursor += step.duration * 0.9;
  });
}

export function useGameSounds() {
  const contextRef = useRef<AudioContext | null>(null);

  const getContext = useCallback(() => {
    if (typeof window === "undefined") {
      return null;
    }

    if (!contextRef.current) {
      const AudioContextConstructor =
        window.AudioContext ?? (window as BrowserWindow).webkitAudioContext;

      if (!AudioContextConstructor) {
        return null;
      }

      contextRef.current = new AudioContextConstructor();
    }

    if (contextRef.current.state === "suspended") {
      void contextRef.current.resume();
    }

    return contextRef.current;
  }, []);

  const play = useCallback((steps: ToneStep[]) => {
    const context = getContext();

    if (!context) {
      return;
    }

    scheduleToneSequence(context, steps);
  }, [getContext]);

  return {
    playCorrectSound: useCallback(() => {
      play([
        { frequency: 420, duration: 0.09, type: "triangle" },
        { frequency: 620, duration: 0.12, type: "triangle" }
      ]);
    }, [play]),
    playWrongSound: useCallback(() => {
      play([
        { frequency: 280, duration: 0.1, type: "sawtooth", gain: 0.06 },
        { frequency: 180, duration: 0.14, type: "square", gain: 0.05 }
      ]);
    }, [play]),
    playVictorySound: useCallback(() => {
      play([
        { frequency: 392, duration: 0.12, type: "triangle" },
        { frequency: 523, duration: 0.14, type: "triangle" },
        { frequency: 659, duration: 0.18, type: "triangle" },
        { frequency: 784, duration: 0.22, type: "triangle" }
      ]);
    }, [play])
  };
}

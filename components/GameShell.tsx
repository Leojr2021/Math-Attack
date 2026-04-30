"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { GOAL_CORRECT_ANSWERS, MAX_LIVES, getEncounterLabel, getNextDivision } from "@/lib/divisions";
import { useGameSounds } from "@/hooks/useGameSounds";
import type { BattleFeedback, CharacterOption, MathQuestion, Screen } from "@/types/game";
import { CharacterSelectScreen } from "./screens/CharacterSelectScreen";
import { GameScreen } from "./screens/GameScreen";
import { InstructionsScreen } from "./screens/InstructionsScreen";
import { NintendoIntroScreen } from "./screens/NintendoIntroScreen";
import { ResultScreen } from "./screens/ResultScreen";
import { StartScreen } from "./screens/StartScreen";

export default function GameShell() {
  const [screen, setScreen] = useState<Screen>("nintendo");
  const [selectedCharacter, setSelectedCharacter] = useState<CharacterOption | null>(null);
  const [lives, setLives] = useState(MAX_LIVES);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<MathQuestion | null>(null);
  const [usedQuestionKeys, setUsedQuestionKeys] = useState<string[]>([]);
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<BattleFeedback>("idle");
  const transitionTimerRef = useRef<number | null>(null);

  const { playCorrectSound, playVictorySound, playWrongSound } = useGameSounds();
  const encounterLabel = getEncounterLabel(correctAnswers);

  const clearTransitionTimer = useCallback(() => {
    if (transitionTimerRef.current !== null) {
      window.clearTimeout(transitionTimerRef.current);
      transitionTimerRef.current = null;
    }
  }, []);

  function prepareQuestion(history: string[]) {
    const nextQuestion = getNextDivision(history);
    setCurrentQuestion(nextQuestion);
    setUsedQuestionKeys([...history, nextQuestion.key]);
  }

  function resetRun() {
    clearTransitionTimer();
    setLives(MAX_LIVES);
    setCorrectAnswers(0);
    setAnswer("");
    setFeedback("idle");
    prepareQuestion([]);
  }

  function handleStartSelection() {
    clearTransitionTimer();
    setScreen("select");
  }

  function handleSelectCharacter(character: CharacterOption) {
    setSelectedCharacter(character);
    setScreen("instructions");
  }

  function handleContinueFromNintendo() {
    clearTransitionTimer();
    setScreen("start");
  }

  function handleStartGame() {
    if (!selectedCharacter) {
      return;
    }

    clearTransitionTimer();
    resetRun();
    setScreen("playing");
  }

  function handleRestart() {
    clearTransitionTimer();
    setScreen("start");
    setSelectedCharacter(null);
    setLives(MAX_LIVES);
    setCorrectAnswers(0);
    setCurrentQuestion(null);
    setUsedQuestionKeys([]);
    setAnswer("");
    setFeedback("idle");
  }

  const handleDigit = useCallback((digit: string) => {
    if (screen !== "playing" || feedback !== "idle") {
      return;
    }

    setAnswer((currentValue) => {
      if (currentValue.length >= 3) {
        return currentValue;
      }

      if (currentValue === "0") {
        return digit;
      }

      return `${currentValue}${digit}`;
    });
  }, [feedback, screen]);

  const handleBackspace = useCallback(() => {
    if (screen !== "playing" || feedback !== "idle") {
      return;
    }

    setAnswer((currentValue) => currentValue.slice(0, -1));
  }, [feedback, screen]);

  function handleClear() {
    if (screen !== "playing" || feedback !== "idle") {
      return;
    }

    setAnswer("");
  }

  const handleCorrectAnswer = useCallback(() => {
    const nextScore = correctAnswers + 1;
    const nextQuestion =
      nextScore < GOAL_CORRECT_ANSWERS ? getNextDivision(usedQuestionKeys) : null;

    setCorrectAnswers(nextScore);
    setFeedback("correct");
    playCorrectSound();

    clearTransitionTimer();
    transitionTimerRef.current = window.setTimeout(() => {
      if (nextScore >= GOAL_CORRECT_ANSWERS) {
        playVictorySound();
        setFeedback("idle");
        setScreen("victory");
        return;
      }

      if (nextQuestion) {
        setCurrentQuestion(nextQuestion);
        setUsedQuestionKeys((currentKeys) => [...currentKeys, nextQuestion.key]);
      }

      setAnswer("");
      setFeedback("idle");
    }, 900);
  }, [
    clearTransitionTimer,
    correctAnswers,
    playCorrectSound,
    playVictorySound,
    usedQuestionKeys
  ]);

  const handleWrongAnswer = useCallback(() => {
    const nextLives = lives - 1;

    setLives(nextLives);
    setFeedback("wrong");
    playWrongSound();

    clearTransitionTimer();
    transitionTimerRef.current = window.setTimeout(() => {
      setFeedback("idle");

      if (nextLives <= 0) {
        setScreen("defeat");
        return;
      }

      setAnswer("");
    }, 900);
  }, [clearTransitionTimer, lives, playWrongSound]);

  const handleSubmit = useCallback(() => {
    if (screen !== "playing" || feedback !== "idle" || !currentQuestion || answer.length === 0) {
      return;
    }

    const numericAnswer = Number(answer);

    if (numericAnswer === currentQuestion.answer) {
      handleCorrectAnswer();
      return;
    }

    handleWrongAnswer();
  }, [answer, currentQuestion, feedback, handleCorrectAnswer, handleWrongAnswer, screen]);

  useEffect(() => {
    function handleKeyboardInput(event: KeyboardEvent) {
      if (screen !== "playing" || feedback !== "idle") {
        return;
      }

      if (/^\d$/.test(event.key)) {
        event.preventDefault();
        handleDigit(event.key);
        return;
      }

      if (event.key === "Backspace") {
        event.preventDefault();
        handleBackspace();
        return;
      }

      if (event.key === "Enter") {
        event.preventDefault();
        handleSubmit();
      }
    }

    window.addEventListener("keydown", handleKeyboardInput);

    return () => {
      window.removeEventListener("keydown", handleKeyboardInput);
    };
  }, [feedback, handleBackspace, handleDigit, handleSubmit, screen]);

  useEffect(() => {
    return () => {
      if (transitionTimerRef.current !== null) {
        window.clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="gameFrame">
      {screen === "start" && <StartScreen onPlay={handleStartSelection} />}

      {screen === "select" && (
        <CharacterSelectScreen
          onBack={handleRestart}
          onSelect={handleSelectCharacter}
          selectedCharacter={selectedCharacter}
        />
      )}

      {screen === "nintendo" && (
        <NintendoIntroScreen onContinue={handleContinueFromNintendo} />
      )}

      {screen === "instructions" && selectedCharacter && (
        <InstructionsScreen
          character={selectedCharacter}
          onBack={() => setScreen("select")}
          onStart={handleStartGame}
        />
      )}

      {screen === "playing" && selectedCharacter && currentQuestion && (
        <GameScreen
          answer={answer}
          character={selectedCharacter}
          correctAnswers={correctAnswers}
          encounterLabel={encounterLabel}
          feedback={feedback}
          lives={lives}
          onBackspace={handleBackspace}
          onClear={handleClear}
          onDigit={handleDigit}
          onSubmit={handleSubmit}
          question={currentQuestion}
        />
      )}

      {screen === "victory" && (
        <ResultScreen correctAnswers={correctAnswers} onRestart={handleRestart} variant="victory" />
      )}

      {screen === "defeat" && (
        <ResultScreen correctAnswers={correctAnswers} onRestart={handleRestart} variant="defeat" />
      )}
    </div>
  );
}

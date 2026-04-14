import { GOAL_CORRECT_ANSWERS } from "@/lib/divisions";
import type { BattleFeedback, CharacterOption, DivisionQuestion } from "@/types/game";
import { DivisionPrompt } from "../game/DivisionPrompt";
import { GameHud } from "../game/GameHud";
import { PlatformScene } from "../game/PlatformScene";

interface GameScreenProps {
  answer: string;
  character: CharacterOption;
  correctAnswers: number;
  encounterLabel: string;
  feedback: BattleFeedback;
  lives: number;
  onBackspace: () => void;
  onClear: () => void;
  onDigit: (digit: string) => void;
  onSubmit: () => void;
  question: DivisionQuestion;
}

export function GameScreen({
  answer,
  character,
  correctAnswers,
  encounterLabel,
  feedback,
  lives,
  onBackspace,
  onClear,
  onDigit,
  onSubmit,
  question
}: GameScreenProps) {
  return (
    <section className="gameScreen">
      <GameHud
        correctAnswers={correctAnswers}
        encounterLabel={encounterLabel}
        goal={GOAL_CORRECT_ANSWERS}
        lives={lives}
      />

      <div className="gameScreen__content">
        <PlatformScene character={character} correctAnswers={correctAnswers} feedback={feedback} />

        <DivisionPrompt
          answer={answer}
          battleIndex={Math.min(correctAnswers + 1, GOAL_CORRECT_ANSWERS)}
          encounterLabel={encounterLabel}
          feedback={feedback}
          onBackspace={onBackspace}
          onClear={onClear}
          onDigit={onDigit}
          onSubmit={onSubmit}
          question={question}
        />
      </div>
    </section>
  );
}

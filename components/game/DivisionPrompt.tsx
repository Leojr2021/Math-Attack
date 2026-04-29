import { GOAL_CORRECT_ANSWERS } from "@/lib/divisions";
import type { BattleFeedback, MathQuestion } from "@/types/game";

interface DivisionPromptProps {
  answer: string;
  battleIndex: number;
  encounterLabel: string;
  feedback: BattleFeedback;
  onBackspace: () => void;
  onClear: () => void;
  onDigit: (digit: string) => void;
  onSubmit: () => void;
  question: MathQuestion;
}

const keypadDigits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function getFeedbackMessage(feedback: BattleFeedback) {
  if (feedback === "correct") {
    return "Excelente. El monstruo se aparto del camino.";
  }

  if (feedback === "wrong") {
    return "Intentalo otra vez. Debes resolver la misma operacion.";
  }

  return "Piensa con calma y escribe la respuesta correcta.";
}

export function DivisionPrompt({
  answer,
  battleIndex,
  encounterLabel,
  feedback,
  onBackspace,
  onClear,
  onDigit,
  onSubmit,
  question
}: DivisionPromptProps) {
  const disabled = feedback !== "idle";

  return (
    <section className="divisionCard">
      <div className="divisionCard__header">
        <span className="divisionCard__badge">Monstruo {battleIndex} de {GOAL_CORRECT_ANSWERS}</span>
        <h2>{encounterLabel}</h2>
        <p>Resuelve la operacion para seguir avanzando por el mapa.</p>
      </div>

      <div className="divisionEquation" aria-live="polite">
        <span>{question.leftOperand}</span>
        <span className="divisionEquation__symbol">{question.operator}</span>
        <span>{question.rightOperand}</span>
        <span className="divisionEquation__symbol">=</span>
        <span className="divisionEquation__answer">{answer || "?"}</span>
      </div>

      <p className={`feedbackMessage feedbackMessage--${feedback}`}>{getFeedbackMessage(feedback)}</p>

      <div className="answerDisplay" aria-label="Respuesta actual">
        {answer || "Tu respuesta"}
      </div>

      <div className="keypad" aria-label="Teclado numerico">
        {keypadDigits.map((digit) => (
          <button
            key={digit}
            className="keypad__button"
            disabled={disabled}
            onClick={() => onDigit(digit)}
            type="button"
          >
            {digit}
          </button>
        ))}
      </div>

      <div className="divisionActions">
        <button className="button button--ghost" disabled={disabled} onClick={onBackspace} type="button">
          Borrar
        </button>
        <button className="button button--ghost" disabled={disabled} onClick={onClear} type="button">
          Limpiar
        </button>
        <button
          className="button button--primary"
          disabled={disabled || answer.length === 0}
          onClick={onSubmit}
          type="button"
        >
          Atacar monstruo
        </button>
      </div>
    </section>
  );
}

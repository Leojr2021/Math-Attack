import { GOAL_CORRECT_ANSWERS } from "@/lib/divisions";

interface ResultScreenProps {
  correctAnswers: number;
  onRestart: () => void;
  variant: "victory" | "defeat";
}

export function ResultScreen({
  correctAnswers,
  onRestart,
  variant
}: ResultScreenProps) {
  const isVictory = variant === "victory";

  return (
    <section className={`screenCard resultScreen ${isVictory ? "resultScreen--victory" : "resultScreen--defeat"}`}>
      <div className="screenCard__content">
        <span className="screenEyebrow">{isVictory ? "Mision completada" : "Intento terminado"}</span>
        <h1>{isVictory ? "Ganaste la Pelea de Matematica" : "No pasa nada, vuelve a intentarlo"}</h1>
        <p className="screenLead">
          {isVictory
            ? `Derrotaste a todos los monstruos y llegaste a la meta resolviendo ${GOAL_CORRECT_ANSWERS} operaciones.`
            : "Los monstruos te quitaron todas las vidas, pero ya practicaste varias operaciones y puedes jugar otra vez."}
        </p>

        <div className="resultBadge">
          <span>Respuestas correctas</span>
          <strong>{correctAnswers}/{GOAL_CORRECT_ANSWERS}</strong>
        </div>

        <button className="button button--primary button--large" onClick={onRestart} type="button">
          Jugar otra vez
        </button>
      </div>
    </section>
  );
}

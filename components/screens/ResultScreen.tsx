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
        <h1>{isVictory ? "Ganaste la Pelea de Division" : "No pasa nada, vuelve a intentarlo"}</h1>
        <p className="screenLead">
          {isVictory
            ? "Derrotaste a todos los zombies y llegaste a la meta resolviendo 5 divisiones."
            : "Los zombies te quitaron todas las vidas, pero ya practicaste varias divisiones y puedes jugar otra vez."}
        </p>

        <div className="resultBadge">
          <span>Respuestas correctas</span>
          <strong>{correctAnswers}/5</strong>
        </div>

        <button className="button button--primary button--large" onClick={onRestart} type="button">
          Jugar otra vez
        </button>
      </div>
    </section>
  );
}

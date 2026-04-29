import { MAX_LIVES } from "@/lib/divisions";

interface GameHudProps {
  lives: number;
  correctAnswers: number;
  goal: number;
  encounterLabel: string;
}

export function GameHud({
  lives,
  correctAnswers,
  goal,
  encounterLabel
}: GameHudProps) {
  return (
    <section className="gameHud">
      <article className="hudPanel">
        <span className="hudPanel__label">Vidas</span>
        <div className="lifeRow" aria-label={`Vidas restantes: ${lives}`}>
          {Array.from({ length: MAX_LIVES }, (_, index) => (
            <span
              key={`life-${index + 1}`}
              className={`lifeOrb ${index < lives ? "lifeOrb--filled" : "lifeOrb--empty"}`}
            />
          ))}
        </div>
      </article>

      <article className="hudPanel">
        <span className="hudPanel__label">Monstruos vencidos</span>
        <strong className="hudPanel__value">
          {correctAnswers}/{goal}
        </strong>
      </article>

      <article className="hudPanel">
        <span className="hudPanel__label">Zona actual</span>
        <strong className="hudPanel__value">{encounterLabel}</strong>
      </article>
    </section>
  );
}

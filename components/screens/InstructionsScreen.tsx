import { GOAL_CORRECT_ANSWERS } from "@/lib/divisions";
import type { CharacterOption } from "@/types/game";

interface InstructionsScreenProps {
  character: CharacterOption;
  onBack: () => void;
  onStart: () => void;
}

const instructionSteps = [
  "Empiezas con 5 vidas.",
  "Cada monstruo te reta con una operacion matematica.",
  "Si aciertas, avanzas y sumas un punto.",
  "Si fallas, pierdes una vida y debes resolver esa misma operacion."
];

export function InstructionsScreen({
  character,
  onBack,
  onStart
}: InstructionsScreenProps) {
  const heroName = character === "girl" ? "Zelda" : "Link";

  return (
    <section className="screenCard">
      <div className="screenCard__content">
        <span className="screenEyebrow">Paso 2</span>
        <h1>Como jugar</h1>
        <p className="screenLead">
          {heroName} debe derrotar {GOAL_CORRECT_ANSWERS} monstruos resolviendo operaciones del 0 al 100.
        </p>

        <div className="instructionsGrid">
          {instructionSteps.map((step, index) => (
            <article key={step} className="instructionCard">
              <span className="instructionCard__number">{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>

        <p className="screenHint">Puedes usar los botones grandes en pantalla o el teclado numerico.</p>

        <div className="buttonRow">
          <button className="button button--ghost" onClick={onBack} type="button">
            Cambiar personaje
          </button>
          <button className="button button--primary" onClick={onStart} type="button">
            Empezar aventura
          </button>
        </div>
      </div>
    </section>
  );
}

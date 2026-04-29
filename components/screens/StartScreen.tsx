import { GOAL_CORRECT_ANSWERS } from "@/lib/divisions";
import { HeroFigure } from "@/components/game/HeroFigure";
import { ZombieFigure } from "@/components/game/ZombieFigure";

interface StartScreenProps {
  onPlay: () => void;
}

export function StartScreen({ onPlay }: StartScreenProps) {
  return (
    <section className="screenCard screenCard--start">
      <div className="screenCard__content">
        <span className="screenEyebrow">Aventura educativa 2D</span>
        <h1>Pelea de Matematica</h1>
        <p className="screenLead">
          Cruza plataformas, derrota monstruos y gana cuando resuelvas {GOAL_CORRECT_ANSWERS}{" "}
          operaciones correctas.
        </p>

        <div className="startPreview">
          <div className="startPreview__card">
            <HeroFigure character="girl" mood="happy" size="card" />
            <span>Heroes valientes</span>
          </div>
          <div className="startPreview__card">
            <ZombieFigure pose="idle" size="card" />
            <span>Monstruos</span>
          </div>
        </div>

        <button className="button button--primary button--large" onClick={onPlay} type="button">
          Jugar
        </button>
      </div>
    </section>
  );
}

import { HeroFigure } from "@/components/game/HeroFigure";
import type { CharacterOption } from "@/types/game";

interface CharacterSelectScreenProps {
  onBack: () => void;
  onSelect: (character: CharacterOption) => void;
  selectedCharacter: CharacterOption | null;
}

const characterCards: Array<{
  id: CharacterOption;
  label: string;
  description: string;
}> = [
  {
    id: "girl",
    label: "Zelda",
    description: "Rapida, curiosa y lista para resolver operaciones."
  },
  {
    id: "boy",
    label: "Link",
    description: "Valiente, alegre y listo para cruzar el mapa."
  }
];

export function CharacterSelectScreen({
  onBack,
  onSelect,
  selectedCharacter
}: CharacterSelectScreenProps) {
  return (
    <section className="screenCard">
      <div className="screenCard__content">
        <span className="screenEyebrow">Paso 1</span>
        <h1>Elige tu personaje</h1>
        <p className="screenLead">Selecciona el genero de tu heroe para comenzar la aventura.</p>

        <div className="selectionGrid">
          {characterCards.map((card) => (
            <button
              key={card.id}
              className={`characterCard ${selectedCharacter === card.id ? "characterCard--selected" : ""}`}
              onClick={() => onSelect(card.id)}
              type="button"
            >
              <HeroFigure character={card.id} mood="ready" size="card" />
              <strong>{card.label}</strong>
              <span>{card.description}</span>
            </button>
          ))}
        </div>

        <button className="button button--ghost" onClick={onBack} type="button">
          Volver
        </button>
      </div>
    </section>
  );
}

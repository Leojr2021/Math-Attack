import type { CharacterOption } from "@/types/game";

interface HeroFigureProps {
  character: CharacterOption;
  mood?: "ready" | "happy" | "hurt";
  size?: "card" | "scene";
}

export function HeroFigure({
  character,
  mood = "ready",
  size = "scene"
}: HeroFigureProps) {
  return (
    <div
      aria-hidden="true"
      className={`heroFigure heroFigure--${character} heroFigure--${mood} heroFigure--${size}`}
    >
      <div className="heroFigure__shadow" />
      <div className="heroFigure__avatar">
        <div className="heroFigure__head">
          <div className="heroFigure__face">
            <span className="heroFigure__eye heroFigure__eye--left" />
            <span className="heroFigure__eye heroFigure__eye--right" />
            <span className="heroFigure__smile" />
          </div>
        </div>
        <div className="heroFigure__torso" />
        <div className="heroFigure__legs" />
      </div>
    </div>
  );
}

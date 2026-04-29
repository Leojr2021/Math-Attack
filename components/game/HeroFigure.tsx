import Image from "next/image";
import type { CharacterOption } from "@/types/game";

interface HeroFigureProps {
  character: CharacterOption;
  mood?: "ready" | "happy" | "hurt";
  size?: "card" | "scene";
}

const heroSpriteMap = {
  girl: {
    ready: "/assets/characters/female-idle.png",
    happy: "/assets/characters/female-attack.png",
    hurt: "/assets/characters/female-hurt.png"
  },
  boy: {
    ready: "/assets/characters/male-idle.png",
    happy: "/assets/characters/male-attack.png",
    hurt: "/assets/characters/male-hurt.png"
  }
} as const;

const heroSpriteSize = {
  card: 112,
  scene: 132
} as const;

export function HeroFigure({
  character,
  mood = "ready",
  size = "scene"
}: HeroFigureProps) {
  const spriteSrc = heroSpriteMap[character][mood];
  const spriteSize = heroSpriteSize[size];

  return (
    <div
      aria-hidden="true"
      className={`heroFigure heroFigure--${character} heroFigure--${mood} heroFigure--${size}`}
    >
      <div className="heroFigure__shadow" />
      <div className="heroFigure__avatar">
        <Image
          alt=""
          className="heroFigure__image"
          height={spriteSize}
          priority={size === "scene"}
          src={spriteSrc}
          width={spriteSize}
        />
      </div>
    </div>
  );
}

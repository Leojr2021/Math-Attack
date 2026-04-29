import Image from "next/image";

interface ZombieFigureProps {
  pose?: "idle" | "attack" | "hit";
  size?: "card" | "scene";
}

const zombieSpriteMap = {
  idle: "/assets/characters/monster-idle.png",
  attack: "/assets/characters/monster-attack.png",
  hit: "/assets/characters/monster-hurt.png"
} as const;

const zombieSpriteSize = {
  card: 112,
  scene: 132
} as const;

export function ZombieFigure({
  pose = "idle",
  size = "scene"
}: ZombieFigureProps) {
  const spriteSrc = zombieSpriteMap[pose];
  const spriteSize = zombieSpriteSize[size];

  return (
    <div aria-hidden="true" className={`zombieFigure zombieFigure--${pose} zombieFigure--${size}`}>
      <div className="zombieFigure__shadow" />
      <div className="zombieFigure__avatar">
        <Image
          alt=""
          className="zombieFigure__image"
          height={spriteSize}
          priority={size === "scene"}
          src={spriteSrc}
          width={spriteSize}
        />
      </div>
    </div>
  );
}

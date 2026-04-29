import { GOAL_CORRECT_ANSWERS } from "@/lib/divisions";
import type { BattleFeedback, CharacterOption } from "@/types/game";
import { HeroFigure } from "./HeroFigure";
import { ZombieFigure } from "./ZombieFigure";

const stageBackgrounds = [
  "/assets/characters/background.jpg",
  "/assets/characters/background-2.jpg"
] as const;

const HERO_START_POSITION = 8;
const HERO_TRAVEL_DISTANCE = 66;
const MONSTER_GAP = 20;
const MONSTER_MAX_POSITION = 86;

interface PlatformSceneProps {
  character: CharacterOption;
  correctAnswers: number;
  feedback: BattleFeedback;
}

export function PlatformScene({
  character,
  correctAnswers,
  feedback
}: PlatformSceneProps) {
  const stageProgress = Math.min(correctAnswers, GOAL_CORRECT_ANSWERS);
  const progressRatio = GOAL_CORRECT_ANSWERS > 0 ? stageProgress / GOAL_CORRECT_ANSWERS : 0;
  const heroPosition = HERO_START_POSITION + progressRatio * HERO_TRAVEL_DISTANCE;
  const zombiePosition = Math.min(MONSTER_MAX_POSITION, heroPosition + MONSTER_GAP);
  const heroMood =
    feedback === "wrong" ? "hurt" : feedback === "correct" ? "happy" : "ready";
  const zombiePose =
    feedback === "wrong" ? "attack" : feedback === "correct" ? "hit" : "idle";

  return (
    <section className="platformScene">
      {stageBackgrounds.map((background, index) => (
        <div
          key={background}
          className={`platformScene__background ${
            index === 0 ? "platformScene__background--primary" : "platformScene__background--secondary"
          }`}
          style={{ backgroundImage: `url(${background})` }}
        />
      ))}

      <div className="platformScene__sky" />
      <div className="platformScene__sun" />
      <span className="platformScene__cloud platformScene__cloud--one" />
      <span className="platformScene__cloud platformScene__cloud--two" />
      <span className="platformScene__cloud platformScene__cloud--three" />

      <div className="platformScene__gate">
        <span className="platformScene__gateAura" />
        <span className="platformScene__gateFrame" />
        <span className="platformScene__gateCore" />
        <span className="platformScene__gateSpark platformScene__gateSpark--top" />
        <span className="platformScene__gateSpark platformScene__gateSpark--middle" />
        <span className="platformScene__gateSpark platformScene__gateSpark--bottom" />
      </div>

      <div className="platformScene__hero" style={{ left: `${heroPosition}%` }}>
        <HeroFigure character={character} mood={heroMood} size="scene" />
      </div>

      {correctAnswers < GOAL_CORRECT_ANSWERS ? (
        <div
          className={`platformScene__zombie ${
            feedback === "correct" ? "platformScene__zombie--vanish" : ""
          }`}
          style={{ left: `${zombiePosition}%` }}
        >
          <ZombieFigure pose={zombiePose} size="scene" />
        </div>
      ) : (
        <div className="platformScene__goalGlow" />
      )}
    </section>
  );
}

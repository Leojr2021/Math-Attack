import { GOAL_CORRECT_ANSWERS } from "@/lib/divisions";
import type { BattleFeedback, CharacterOption } from "@/types/game";
import { HeroFigure } from "./HeroFigure";
import { ZombieFigure } from "./ZombieFigure";

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
  const heroPosition = 8 + stageProgress * 15;
  const zombiePosition = Math.min(85, 26 + correctAnswers * 15);
  const heroMood =
    feedback === "wrong" ? "hurt" : feedback === "correct" ? "happy" : "ready";
  const zombiePose =
    feedback === "wrong" ? "attack" : feedback === "correct" ? "hit" : "idle";

  return (
    <section className="platformScene">
      <div className="platformScene__sky" />
      <div className="platformScene__sun" />
      <span className="platformScene__cloud platformScene__cloud--one" />
      <span className="platformScene__cloud platformScene__cloud--two" />
      <span className="platformScene__cloud platformScene__cloud--three" />
      <div className="platformScene__hill platformScene__hill--left" />
      <div className="platformScene__hill platformScene__hill--right" />

      {Array.from({ length: 6 }, (_, index) => (
        <div
          key={`tile-${index + 1}`}
          className="platformScene__tile"
          style={{ left: `${6 + index * 15}%` }}
        />
      ))}

      <div className="platformScene__gate">
        <span className="platformScene__gateFlag" />
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

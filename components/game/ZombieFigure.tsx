interface ZombieFigureProps {
  pose?: "idle" | "attack" | "hit";
  size?: "card" | "scene";
}

export function ZombieFigure({
  pose = "idle",
  size = "scene"
}: ZombieFigureProps) {
  return (
    <div aria-hidden="true" className={`zombieFigure zombieFigure--${pose} zombieFigure--${size}`}>
      <div className="zombieFigure__shadow" />
      <div className="zombieFigure__avatar">
        <span className="zombieFigure__arm zombieFigure__arm--left">
          <span className="zombieFigure__hand" />
        </span>
        <span className="zombieFigure__arm zombieFigure__arm--right">
          <span className="zombieFigure__hand" />
        </span>
        <div className="zombieFigure__head">
          <span className="zombieFigure__hairTuft" />
          <div className="zombieFigure__face">
            <span className="zombieFigure__brow zombieFigure__brow--left" />
            <span className="zombieFigure__brow zombieFigure__brow--right" />
            <span className="zombieFigure__eye zombieFigure__eye--left" />
            <span className="zombieFigure__eye zombieFigure__eye--right" />
            <span className="zombieFigure__nose" />
            <span className="zombieFigure__scar" />
            <span className="zombieFigure__mouth" />
            <span className="zombieFigure__tooth zombieFigure__tooth--left" />
            <span className="zombieFigure__tooth zombieFigure__tooth--right" />
          </div>
        </div>
        <div className="zombieFigure__torso">
          <span className="zombieFigure__patch zombieFigure__patch--one" />
          <span className="zombieFigure__patch zombieFigure__patch--two" />
        </div>
        <div className="zombieFigure__legs" />
      </div>
    </div>
  );
}

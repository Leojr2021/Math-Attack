export type Screen = "start" | "select" | "nintendo" | "instructions" | "playing" | "victory" | "defeat";

export type CharacterOption = "girl" | "boy";

export type BattleFeedback = "idle" | "correct" | "wrong";

export type MathOperator = "x" | "/";

export interface MathQuestion {
  leftOperand: number;
  operator: MathOperator;
  rightOperand: number;
  answer: number;
  key: string;
}

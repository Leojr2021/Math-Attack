export type Screen = "start" | "select" | "instructions" | "playing" | "victory" | "defeat";

export type CharacterOption = "girl" | "boy";

export type BattleFeedback = "idle" | "correct" | "wrong";

export interface DivisionQuestion {
  dividend: number;
  divisor: number;
  answer: number;
  key: string;
}

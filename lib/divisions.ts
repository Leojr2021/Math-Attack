import type { DivisionQuestion } from "@/types/game";

export const MAX_LIVES = 5;
export const GOAL_CORRECT_ANSWERS = 5;

const ENCOUNTER_LABELS = [
  "Puente Saltarin",
  "Bosque de Bloques",
  "Cueva del Musgo",
  "Colina Arcoiris",
  "Portal de la Meta"
];

const questionPool = buildQuestionPool();

function buildQuestionPool(): DivisionQuestion[] {
  const pool: DivisionQuestion[] = [];

  for (let divisor = 1; divisor <= 30; divisor += 1) {
    for (let dividend = 100; dividend <= 300; dividend += 1) {
      if (dividend % divisor !== 0) {
        continue;
      }

      const answer = dividend / divisor;

      if (answer < 4 || answer > 25) {
        continue;
      }

      pool.push({
        dividend,
        divisor,
        answer,
        key: `${dividend}-${divisor}`
      });
    }
  }

  return pool;
}

export function getEncounterLabel(step: number): string {
  return ENCOUNTER_LABELS[step] ?? "Camino Final";
}

export function getNextDivision(usedKeys: string[]): DivisionQuestion {
  const recentKeys = new Set(usedKeys.slice(-10));
  const availableQuestions = questionPool.filter((question) => !recentKeys.has(question.key));
  const sourcePool = availableQuestions.length > 0 ? availableQuestions : questionPool;
  const selectedQuestion = sourcePool[Math.floor(Math.random() * sourcePool.length)];

  return selectedQuestion;
}

import type { MathQuestion } from "@/types/game";

export const MAX_LIVES = 5;
export const GOAL_CORRECT_ANSWERS = 10;

const ENCOUNTER_LABELS = [
  "Puente Saltarin",
  "Bosque de Bloques",
  "Cueva del Musgo",
  "Colina Arcoiris",
  "Portal de la Meta",
  "Sendero Brillante",
  "Ruinas Doradas",
  "Lago de Niebla",
  "Templo del Eco",
  "Camara Final"
];

const questionPool = buildQuestionPool();

function buildQuestionPool(): MathQuestion[] {
  const pool: MathQuestion[] = [];

  for (let leftOperand = 0; leftOperand <= 100; leftOperand += 1) {
    for (let rightOperand = 0; rightOperand <= 100; rightOperand += 1) {
      const answer = leftOperand * rightOperand;

      if (answer > 100) {
        continue;
      }

      pool.push({
        leftOperand,
        operator: "x",
        rightOperand,
        answer,
        key: `mul-${leftOperand}-${rightOperand}`
      });
    }
  }

  for (let rightOperand = 1; rightOperand <= 100; rightOperand += 1) {
    for (let leftOperand = 0; leftOperand <= 100; leftOperand += 1) {
      if (leftOperand % rightOperand !== 0) {
        continue;
      }

      pool.push({
        leftOperand,
        operator: "/",
        rightOperand,
        answer: leftOperand / rightOperand,
        key: `div-${leftOperand}-${rightOperand}`
      });
    }
  }

  return pool;
}

export function getEncounterLabel(step: number): string {
  return ENCOUNTER_LABELS[step] ?? "Camino Final";
}

export function getNextDivision(usedKeys: string[]): MathQuestion {
  const recentKeys = new Set(usedKeys.slice(-10));
  const availableQuestions = questionPool.filter((question) => !recentKeys.has(question.key));
  const sourcePool = availableQuestions.length > 0 ? availableQuestions : questionPool;
  const selectedQuestion = sourcePool[Math.floor(Math.random() * sourcePool.length)];

  return selectedQuestion;
}

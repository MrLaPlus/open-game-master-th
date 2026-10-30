import { randomInt } from "node:crypto";
import {
  d20Expression,
  rollExpression as evaluateExpression,
  type Advantage,
  type DieRng,
  type RollOptions,
} from "./dice-logic.ts";

// Keep the existing server API and cryptographic RNG. Browser consumers
// import dice-logic directly so no Node built-in crosses that boundary.
export type { Advantage, DiceTerm, DieResult, DieRng, ModifierTerm, RollOptions, RollResult } from "./dice-logic.ts";
export { d20Expression, expressionDice, isValidExpression, rollExpressionWithDice } from "./dice-logic.ts";

export function defaultRng(sides: number) {
  return randomInt(1, sides + 1);
}

export function rollExpression(expression: string, rng: DieRng = defaultRng, options: RollOptions = {}) {
  return evaluateExpression(expression, rng, options);
}

export function rollD20(modifier: number, advantage: Advantage = "none", rng: DieRng = defaultRng) {
  return rollExpression(d20Expression(modifier, advantage), rng);
}

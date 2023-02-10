import { Action, ActionKind } from "@types";

export const MinusAction = (): Action => ({
  type: ActionKind.Minus
})

export const PlusAction = (): Action => ({
  type: ActionKind.Plus
})
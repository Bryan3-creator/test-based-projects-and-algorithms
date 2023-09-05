import { evaluate } from "mathjs";

export class CalculateOperation  {
  public static calculateArithmeticOperation = (operation: string): number => {
    return evaluate(operation);
  };
}

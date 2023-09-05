export const multiples = {
  3: "fizz",
  5: "buzz",
};

export const error = {
  isNotANumber: "The value must be a number",
};

export class NumberMap {
  private readonly _value: number;
  constructor(value: number) {
    this._theValueMustBeNumeric(value);
    this._value = value;
  }

  public getValue = (): number => {
    return this._value;
  };

  private _theValueMustBeNumeric = (value: number): void => {
    if (typeof value !== "number" || Number.isNaN(value))
      throw new Error(error.isNotANumber);
  };
}

export const fizzbuzz = (value: number): string | number => {
  const number = new NumberMap(value).getValue();
  let output: string = "";
  Object.entries(multiples).forEach(([key, word]) => {
    if (number % Number(key) === 0) return (output += word);
  });
  return output ? output : number;
};

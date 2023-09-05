import React, { useState } from "react";
import { CalculateOperation } from "../../utilities";

export const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]];
export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const operators = ["+", "-", "*", "/"];

export const equalSign = "=";

export const initialValue = "";

export const Calculator = () => {
  const [value, setValue] = useState<string>(initialValue);

  const handleSetOp = (op: string) =>
    setValue((prevValue) => prevValue.concat(op));

  const handleEqualSignOperation = () => {
    const evaluatedResult =
      CalculateOperation.calculateArithmeticOperation(value).toString();
    const cutedValue = evaluatedResult.split(".");

    if (cutedValue.length <= 1) return setValue(evaluatedResult);

    const fixedResult = Number(evaluatedResult).toFixed(7);
    setValue(fixedResult.toString());
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = evt.target;
    setValue(value);
  };

  return (
    <section>
      <h1>Calculator</h1>
      <input value={value} onChange={handleChange} readOnly />
      <div>
        {rows.map((row, index) => {
          return (
            <div key={index} role="row">
              {row.map((number) => (
                <button
                  key={number}
                  onClick={() => handleSetOp(number.toString())}
                >
                  {number}
                </button>
              ))}
            </div>
          );
        })}
        <div>
          {operators.map((operator) => (
            <button key={operator} onClick={() => handleSetOp(operator)}>
              {operator}
            </button>
          ))}
          <button onClick={handleEqualSignOperation}>{equalSign}</button>
        </div>
      </div>
    </section>
  );
};

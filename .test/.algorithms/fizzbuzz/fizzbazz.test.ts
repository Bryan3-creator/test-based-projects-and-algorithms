import { fizzbuzz, error } from "./fizzbazz";

// Fizzbazz excercise
// you create a function that it recive a paramater
// and depending of this parameter you must show next

// if parameter is multiple of 3, you must show "fizz"
// if  parameter is multiple of 5, you must show "buzz"
// if parameter is multiple of both, then, you must show "fizzbuzz"
//if parameter isn't multiple of 3 or 5, you must show number

describe("fizzbuzz", () => {
  it("Should be a function", () => {
    expect(typeof fizzbuzz).toBe("function");
  });
  it("Should trow an error, if parameter isn't of typeof number", () => {
    expect(() => fizzbuzz(NaN)).toThrow(error.isNotANumber);
  });
  it("Should return 1", () => {
    expect(fizzbuzz(1)).toBe(1);
  });
  it("Should show 'fizz', if parameter is equal 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
  });
  it("Should show 'fizz' if parameter is multiple of 3", () => {
    expect(fizzbuzz(3)).toBe("fizz");
    expect(fizzbuzz(9)).toBe("fizz");
    expect(fizzbuzz(12)).toBe("fizz");
  });
  it("Should show 'buzz', if parameter is 5", () => {
    expect(fizzbuzz(5)).toBe("buzz");
  });
  it("Should show 'buzz', if parameter is multiple of 5", () => {
    expect(fizzbuzz(5)).toBe("buzz");
    expect(fizzbuzz(10)).toBe("buzz");
    expect(fizzbuzz(20)).toBe("buzz");
  });
  it("Should show 'fizzbuzz', if parameter is multiple of 3 and 5", () => {
    expect(fizzbuzz(15)).toBe("fizzbuzz");
  });
});

/// <reference path="..\Scripts\jasmine-1.2.d.ts" />
/// <reference path="..\App\calculator.ts" />

describe("Calculator suite", () => {
    var calc = new Calculator();

    it("can calculate sum of two numbers", () => {
        expect(calc.sum(1, 2)).toBe(3);
    });
});
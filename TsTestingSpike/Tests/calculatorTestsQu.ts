/// <reference path="..\Scripts\qunit-1.10.d.ts" />
/// <reference path="..\App\calculator.ts" />

var calc = new Calculator();

test("Can calculate sum of two numbers", () => {
    equal(calc.sum(1, 2), 3, "passed");
});
test("Can calculate sum of two negative numbers", () => {
    equal(calc.sum(-1, -4), -5, "passed");
});
test("Can calculate sum of some other numbers, because I need more tests", () => {
    equal(calc.sum(1, 4), 5, "passed");
});
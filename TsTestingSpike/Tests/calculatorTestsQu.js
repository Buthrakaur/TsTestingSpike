var calc = new Calculator();
test("Can calculate sum of two numbers", function () {
    equal(calc.sum(1, 2), 3, "passed");
});
test("Can calculate sum of two negative numbers", function () {
    equal(calc.sum(-1, -4), -5, "passed");
});
test("Can calculate sum of some other numbers, because I need more tests", function () {
    equal(calc.sum(1, 4), 5, "passed");
});

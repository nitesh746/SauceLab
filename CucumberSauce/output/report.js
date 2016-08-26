$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MathOperations.feature");
formatter.feature({
  "line": 1,
  "name": "Math Operations",
  "description": "",
  "id": "math-operations",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Add two numbers",
  "description": "",
  "id": "math-operations;add-two-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I have entered first number",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I have enetered second number",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I press add button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Sum of two numbers should be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "Add.enterFirstNumber()"
});
formatter.result({
  "duration": 77843576,
  "status": "passed"
});
formatter.match({
  "location": "Add.enterSecondNumber()"
});
formatter.result({
  "duration": 45543,
  "status": "passed"
});
formatter.match({
  "location": "Add.pressSumbutton()"
});
formatter.result({
  "duration": 42977,
  "status": "passed"
});
formatter.match({
  "location": "Add.displaySum()"
});
formatter.result({
  "duration": 40411,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Sustration of two numbers",
  "description": "",
  "id": "math-operations;sustration-of-two-numbers",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I have entered first number",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I have enetered second number",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I press substract button",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Substraction of two numbers should be shown",
  "keyword": "Then "
});
formatter.match({
  "location": "Add.enterFirstNumber()"
});
formatter.result({
  "duration": 44581,
  "status": "passed"
});
formatter.match({
  "location": "Add.enterSecondNumber()"
});
formatter.result({
  "duration": 33034,
  "status": "passed"
});
formatter.match({
  "location": "Add.pressSumbutton()"
});
formatter.result({
  "duration": 41694,
  "status": "passed"
});
formatter.match({
  "location": "Add.displaySum()"
});
formatter.result({
  "duration": 32714,
  "status": "passed"
});
});
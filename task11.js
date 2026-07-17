// Task 11: Student Record System - Calculate a Derived Value

function checkResult(name, marks) {
    if (marks >= 40) {
        return name + " has Passed.";
    } else {
        return name + " has Failed.";
    }
}

console.log(checkResult("Axilia Jennifer B", 92));
console.log(checkResult("Rahul", 35));

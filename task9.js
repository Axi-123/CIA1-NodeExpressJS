// Task 9: Student Record System - Remove & Sort

let students = [
    { name: "Rahul", marks: 85 },
    { name: "Priya", marks: 78 },
    { name: "David", marks: 88 },
    { name: "Axilia Jennifer B", marks: 92 }
];

// Remove the last student
students.pop();

// Sort students by marks in ascending order
students.sort((a, b) => a.marks - b.marks);

console.log("Sorted Student List:");
console.log(students);

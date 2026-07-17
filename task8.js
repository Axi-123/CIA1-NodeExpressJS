// Task 8: Student Record System - Add & Find

let students = [
    { name: "Rahul", marks: 85 },
    { name: "Priya", marks: 78 },
    { name: "David", marks: 88 }
];

// Add a new student
students.push({ name: "Axilia Jennifer B", marks: 92 });

// Find student with highest marks
let highest = students[0];

for (let i = 1; i < students.length; i++) {
    if (students[i].marks > highest.marks) {
        highest = students[i];
    }
}

console.log("Student with Highest Marks:");
console.log(highest);

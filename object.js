// let student1 = {
//     name: "ale",
//     age: 28,
//     programmingLanguage: ["PHP", "C++", "C#", "Golang"]
// };
// let student2 = {
//     name: "Yoga",
//     age: 55,
//     programmingLanguage: ["Java", "C++", "C#", "Golang"]
// };
// let student3 = {
//     name: "ale",
//     age: 8,
//     programmingLanguage: ["India", "Javascript"]
// };

// constructor function

function StudentFSW(name, age, programingLanguage) {
    this.name = name;
    this.age = age;
    this.programingLanguage = programingLanguage;
}

// Initial object
const student1 = new StudentFSW('hafizh', 20, ["Java"]);

console.log(student1.age);
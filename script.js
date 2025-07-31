//part 1
console.log("PART 1 STARTED:");
const student = {
    name: "Milana",
    age: "24",
    enrolled: true,
    courses: ["Web design", "Fundamentals of JavaScript", "Algorithms aand Problem Solving", "Database Concepts and Design", "Operating systems"],
    displayInfo: function() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Enrolled: ${this.enrolled ? "Yes": "No"}`);
        console.log(`Courses: ${this.courses.join(",")}`);
    }
};

console.log("Name: ", student.name);
console.log("Age: ", student.age);

student.displayInfo();
console.log("PART 1 ENDED:");



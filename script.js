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


//part2
console.log("PART 2 Started:");

const JSONStudent = JSON.stringify(student);
console.log("JSON string:", JSONStudent);

const backstudent = JSON.parse(JSONStudent);
console.log("Parsed object:", backstudent);
console.log("PART2 ENDED:");


//part 3

console.log("PART 3 STARTED: ");
const {name, courses} = student;
console.log("Student name: ", name);
console.log("Courses: ", courses);

const scores = [87, 75, 56, 98, 64, 91];
const [score1, score2] = scores;
console.log("The first score: ", score1);
console.log("The second score: ", score2);
console.log("part 3 ended:");


//part 4
console.log("Part 4 started:");

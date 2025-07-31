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
const StudentClone = {...student, graduation: 2027};
console.log("Cloned Student with Graduation Year: ", StudentClone);

const newCourses = ["Fundamentals of Numeric", "Front-end Developr", "Art science"];
const upCourses = [...student.courses, ...newCourses];
console.log("Merged Courses:", upCourses);
console.log("PART4 ENDED:");

//PART 5
console.log("PART 5 STARTED:");
student.addCourse = function(newCourse){
    this.courses.push(newCourse);
    console.log(`New course "${newCourse}" added`);
};

student.getCourseCount = function() {
    return this.courses.length;
};

student.addCourse("Web Programming");
console.log("Total number of teh courses: ", student.getCourseCount());
console.log("part 5 ended:");

//bonnus part
console.log("Bonus part started:");
const marks = [57,89,96,63,87,79,52,49,99,100];

const averagemarks = marks.reduce((acc, curr) => acc + curr, 0/marks.length);

console.log("Average of marks: ", averagemarks.toFixed(3));
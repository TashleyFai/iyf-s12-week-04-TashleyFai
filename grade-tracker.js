```javascript
// WEEK 4: STUDENT GRADE TRACKER

const gradeTracker = {
    students: [],

    addStudent(name, grades) {
        this.students.push({ name, grades });
    },

    getStudent(name) {
        return this.students.find(student => student.name === name) || null;
    },

    getStudentAverage(name) {
        const student = this.getStudent(name);

        if (!student) return null;

        const grades = Object.values(student.grades);

        if (grades.length === 0) return null;

        const total = grades.reduce((sum, grade) => sum + grade, 0);

        return Number((total / grades.length).toFixed(2));
    },

    getSubjectAverage(subject) {
        const grades = this.students
            .map(student => student.grades[subject])
            .filter(grade => grade !== undefined);

        if (grades.length === 0) return null;

        const total = grades.reduce((sum, grade) => sum + grade, 0);

        return Number((total / grades.length).toFixed(2));
    },

    getTopStudent() {
        if (this.students.length === 0) return null;

        return this.students.reduce((top, student) => {
            return this.getStudentAverage(student.name) >
                this.getStudentAverage(top.name) ? student : top;
        });
    },

    getStrugglingStudents() {
        return this.students.filter(student => {
            return this.getStudentAverage(student.name) < 70;
        });
    },

    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    generateReportCard(name) {
        const student = this.getStudent(name);

        if (!student) return "Student not found";

        const average = this.getStudentAverage(name);
        const letterGrade = this.getLetterGrade(average);

        const gradeDetails = Object.entries(student.grades)
            .map(([subject, score]) => `${subject}: ${score}`)
            .join(", ");

        return `Report Card: ${student.name}\n${gradeDetails}\nAverage: ${average}\nLetter Grade: ${letterGrade}`;
    }
};

// TESTING THE GRADE TRACKER

gradeTracker.addStudent("Alice", {
    math: 95,
    english: 88,
    science: 92
});

gradeTracker.addStudent("Bob", {
    math: 72,
    english: 85,
    science: 78
});

gradeTracker.addStudent("Charlie", {
    math: 60,
    english: 65,
    science: 58
});

console.log("Alice's average:", gradeTracker.getStudentAverage("Alice"));
console.log("Math average:", gradeTracker.getSubjectAverage("math"));
console.log("Top student:", gradeTracker.getTopStudent().name);

console.log(
    "Struggling students:",
    gradeTracker.getStrugglingStudents().map(student => student.name)
);

console.log(gradeTracker.generateReportCard("Alice"));

console.log("Grade for 85:", gradeTracker.getLetterGrade(85));
```

// WEEK 4: STUDENT GRADE TRACKER

const gradeTracker = {
    students: [
        { name: "Nia", grades: { math: 90, science: 95, english: 90 } },
        { name: "Brian", grades: { math: 80, science: 75, english: 72 } },
        { name: "Zuri", grades: { math: 57, science: 60, english: 55 } }
    ],

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
            const studentAverage = this.getStudentAverage(student.name);
            const topAverage = this.getStudentAverage(top.name);

            return studentAverage > topAverage ? student : top;
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

        return {
            name: student.name,
            grades: student.grades,
            average: average,
            letterGrade: this.getLetterGrade(average)
        };
    }
};

// TESTING THE GRADE TRACKER

console.log("Nia's average:", gradeTracker.getStudentAverage("Nia"));
console.log("Math average:", gradeTracker.getSubjectAverage("math"));
console.log("Top student:", gradeTracker.getTopStudent().name);

console.log(
    "Struggling students:",
    gradeTracker.getStrugglingStudents().map(student => student.name)
);

console.log("Nia's report card:", gradeTracker.generateReportCard("Nia"));

gradeTracker.addStudent("Kevin", {
    math: 85,
    science: 88,
    english: 80
});

console.log("New student:", gradeTracker.getStudent("Kevin"));
console.log("Grade for 85:", gradeTracker.getLetterGrade(85));

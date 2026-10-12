
/*
Assignment 3:
Use switch case to return a grade based on the score.

Grading convention:
90-100: A
80-89: B
70-79: C
50-69: D
Below 50: F
*/

function getGrade(score) {
    if (score < 0 || score > 100) {
        return "Invalid score";
    }

    switch (true) {
        case (score >= 90):
            return "A";

        case (score >= 80):
            return "B";

        case (score >= 70):
            return "C";

        case (score >= 50):
            return "D";

        default:
            return "F";
    }
}

console.log("Grade:", getGrade(95));
console.log("Grade:", getGrade(85));
console.log("Grade:", getGrade(75));
console.log("Grade:", getGrade(60));
console.log("Grade:", getGrade(35));

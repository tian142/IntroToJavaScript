//use . or [] to access property: all keys are converted to strings
carData.make; //"Datson 240z"
carData['make']; //"Datson 240z"
numbers[1]; //one
numbers['1']; //one

//updating an object
const userReviews = {};
userReviews['newUser123'] = 4.0;
userReviews.newNewUser = 5.0;
userReviews['newNewUser'] = 2.0;

//nested objects:
const student = {
    firstName: 'JoJo',
    lastName: 'HoHo',
    exams: {
        quiz1: 90,
        quiz2: 29,
        final: 90,
    },
};
const avgScore =
    (student.exams.final + student.exams.quiz1 + student.exams.quiz2) / 3;
console.log(avgScore); //69.66666666666667

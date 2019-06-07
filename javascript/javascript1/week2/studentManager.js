/**
 * Javascript file for Hack Your Future, Javascript1, homework Week2
 * author: Ida Naderian
 * 
 * we are at registration of hack your future and want to add just 6 student to class 07.
 * and ofcourse we always have seat for Queen.
 */

//write prototype for checking empty string
String.prototype.isEmpty = function() {
    return (this.length === 0 || !this.trim());
};

const class07Students = [];

//add student to class
function addStudentToClass(studentName) {
    const massage = {
        ERRORFULL: "ERROR: There are no more seats available in the class.",
        ERRORSAME: "ERROR: You can not add same persone in class.",
        ERROREMPETY: "ERROR: Please write student name.",
        QUEEN: "We always have a seat for our Queen",
        SUCCESSED: " add to the class"

    }

    let result;

    if (studentName === "Queen") {
        class07Students.push("Queen");
        result = massage.QUEEN;
    } else if (getNumberOfStudents() > 6) {
        result = massage.ERRORFULL;
    } else if (studentName.isEmpty()) {
        result = massage.ERROREMPETY;
    } else if (isDuplicate(studentName)) {
        result = massage.ERRORSAME;
    } else {
        class07Students.push(studentName);
        result = studentName + massage.SUCCESSED;
    }
    return result;
}

//return number of students in class
function getNumberOfStudents() {
    return class07Students.length;
}

//show a name of all student in class
function showClass() {
    console.log("class list: ");
    class07Students.forEach(element => {
        console.log(element + ", ");
    })
}

//check if student registered in class before; prevent duplicate
function isDuplicate(studentName) {
    for (let i = 0; i < getNumberOfStudents(); i++) {
        if (class07Students[i] === studentName) {
            return true;
        } else {
            return false;
        }
    }
}



//run program
console.log(addStudentToClass("Ida Naderian"));
console.log(addStudentToClass("Linda Martin"));
console.log(addStudentToClass("shing huwan"));
console.log(addStudentToClass("Sara Bro"));
console.log(addStudentToClass("Ida Naderian"));
console.log(addStudentToClass(""));
console.log(addStudentToClass("Faray Cage"));
console.log(addStudentToClass("Joseph Stalin"));
console.log(addStudentToClass("Queen"));
console.log(addStudentToClass("Benjamin Hughes"));

showClass();



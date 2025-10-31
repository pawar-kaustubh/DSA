// Create an array with 5 students names after that create a function which takes 2 parameters (all students & studentName ) iterate over all students and find taht speccific user "studentName".
// 1 solution
/* function findStudent(allStudents, studentName) {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i].toLowerCase() === studentName.toLowerCase()) {
      console.log(`${studentName} found at index ${i}`);
      return; //stops the loop once found
    }
  }
  console.log(`${studentName} not found`);
}
const arr = ["kaustubh", "om", "amey", "mansi", "rohan"];

student(arr, "Mansi");
 */

// 2 solution
const arr = ["kaustubh", "om", "amey", "mansi", "rohan"];

const findStudent = (allStudents, studentName) => {
for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i].toLowerCase() === studentName.toLowerCase()) {
      console.log(`${studentName} found at index ${i}`);
     return `${studentName} found at indes ${i}`
    }
  }
  return `${studentName} not found`
}


findStudent(arr, "Mansi");

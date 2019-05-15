// Есть объект a с набором свойств, объект b должен унаследовать свойства a
function constructorPeople (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.canSpeak = true;
}
function constructorStudent (firstName, lastName, studentId) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.studentId = studentId;
}
var chelik = new constructorPeople ("Guy", "Guy");
constructorStudent.prototype = chelik;
var andrew = new constructorStudent ("Andrew", "Block", "15233");
console.log(andrew.canSpeak); 
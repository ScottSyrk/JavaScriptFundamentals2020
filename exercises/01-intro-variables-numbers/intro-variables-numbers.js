function  myName() {
  // Create a variable called myName
  let myName = 'Hilary';
  return myName;

}

function setTeachersNames(teachersName) {
  // change code below this line so that we can set the variable.
  let teachers = ("Matina", "Jamal");
  teachers = teachersName; //  <- this is invalid because teachers is a const. How can we fix this?

  return teachers;
}

/*** return the sum of both arguments  ***/
function add(a, b) {
  let sum;
sum = a + b;
  return sum;
}

/*** Using the increment operator, add a year to the argument and make me older */
function ageMeByAYear(age) {
age ++;
  return age;

}

/*** Using the decrement operator make me age decrement by a year  ***/
function makeMeYoungerByAYear(age) {
  age --;
  return age;
}

/** Take the argument that will be a string and return an integer  */
function convertStringToInt(str) {
  let int;
  int = parseInt (str);
  return int;
}

/*** Using the String method indexOf find the first position of the letter in the name  */
/***
 *
 *  ie: name = James,
 *  letter = J
 *
 *  return value should be 0
 *
 */
function getTheCharacterPosition(name, letter) {
  let characterPosition;
  characterPosition = name.indexOf("n");
  return characterPosition;
}

/** Take the argument and return the length of the argument */

function stringLength(str) {
  const strLength = "str";
  console.log(strLength.length);
  return strLength;
}

/***  return the last character of the argument
 *  ie Washington
 *  should return n
 *
 *
 */

function getLastCharacter(str) {
  const lastCharacterOf = str;
  let lastCharacter = lastCharacterOf [lastCharacterOf.length -1]; 
  return lastCharacter;
}

/** Return the last part of a place name
 *
 *   i.e New York
 *   returns York
 *
 *    i.e New Mexico
 *    returns Mexico
 *
 *    i.e San Diego
 *    returns Diego
 */

function getLastWordInPlaceName(place) {
  const newPlace = place;
  const index = newPlace.indexOf (" ");
  const lastWordOfPlace = newPlace.substring(index + 1);
  console.log(lastWordOfPlace);
  return newPlace;
}

/***
 *  Using Conditonal logic compare both arguments and return the largest argument
 *
 */

function getLargerNumber(arg1, arg2) {
  let largestNumber = "arg1";
  if (arg1>arg2);

  return largestNumber;
}

/*** A person just got married and they need their last name replaced.
 * The function accepts two arguments first agrument being the fullname of the newlywed.
 * The second argument is the new last name the newlywed will receive after being marred.
 *
 *   ie fullname =  Emily Rose
 *    newLastName = Smith
 *    returned value === Emily Smith
 *
 *
 *
 */

function replaceLastName(fullName, newLastName) {
  let newFullName = "firstName lastName";
  newFullName = newFullName.replace ("firstName", "newLastName");
  return newFullName;
}

/***
 *  Capitalize the first letter in a last name
 *  i.e John smith -> John Smith
 */

function capitalizeLastName(fullName) {
  let capitalizeLastName = "John smith";
  console.log( capitalizeLastName[5].toUpperCase() );

  return capitalizeLastName;
}

/**
 * Ignore me. This is for the tests
 */

module.exports = {
  myName,
  setTeachersNames,
  add,
  ageMeByAYear,
  makeMeYoungerByAYear,
  convertStringToInt,
  getTheCharacterPosition,
  stringLength,
  getLastCharacter,
  getLastWordInPlaceName,
  getLargerNumber,
  replaceLastName,
  capitalizeLastName,
};

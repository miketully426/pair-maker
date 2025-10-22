// take a list of users
// iterate through the list to make pairs
// remove a user when put into a pair
// add any odd user to a pair to a three
// finally print out all pairs
const input = require("readline-sync");
const pairList = [];

const inputNames = input.question("Enter names separated by a comma: ");

const names = inputNames.replace(" ", "").split(",");
do {
  const pair = Array(2);
  pair[0] = getRandomName(names);
  pair[1] = getRandomName(names);
  pairList.push(pair);
} while (names.length > 1);

if (names.length === 1) {
  pairList[0].push(names[0]);
}

console.log(pairList);

function getRandomName(nameArray) {
  const randomNumber = Math.floor(Math.random() * nameArray.length);
  const outputName = nameArray[randomNumber];
  nameArray.splice(randomNumber, 1);
  return outputName;
}

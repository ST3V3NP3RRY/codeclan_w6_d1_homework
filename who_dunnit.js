// Episode 1
// const scenario = {
//   murderer: "Miss Scarlet",
//   room: "Library",
//   weapon: "Rope",
// };

//Anonymous function that accesses the murderer key of the scenario object and return the value assigned to that key.
// const declareMurderer = function () {
//   return `The murderer is ${scenario.murderer}.`;
// };

//Call the declareMurderer function and asign it to verdict variable
// const verdict = declareMurderer();
// The murderer will be Miss Scarlet
// console.log(verdict);

// Episode 2
// const murderer = "Professor Plum";
//This will throw an error as you can't reassign a const variable once it's been declared.
// const changeMurderer = function () {
//   murderer = "Mrs. Peacock";
// };

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// };

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

//Episode 3
// let murderer = "Professor Plum";

// const declareMurderer = function () {
//   let murderer = "Mrs. Peacock";
//   return `The murderer is ${murderer}.`;
// };

//The firtVerdict will be Mrs Peacock because the murder variable can be chnaged inside the function with let keyword
// const firstVerdict = declareMurderer();
// console.log("First Verdict: ", firstVerdict);
// I think the secondVerdict will be Professor Plum because it's in the global scope and the murderer only becomes Mrs Peacock inside the declareMurder function.
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log("Second Verdict: ", secondVerdict);

//Episode 4
// let suspectOne = "Miss Scarlet";
// let suspectTwo = "Professor Plum";
// let suspectThree = "Mrs. Peacock";
//The name of suspectThree will be changed inside the function and the names of the three suspects will be returned.
// const declareAllSuspects = function () {
//   let suspectThree = "Colonel Mustard";
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// };
//Stores the names of the three suspects in supects variable
// const suspects = declareAllSuspects();
// console.log(suspects); // Miss Scarlet, Professor Plum, Colonel Mustard(changed suspect)

//Suspect three will still be Mrs. Peacock because it's in the global scope and was only changed inside the function.
// console.log(`Suspect three is ${suspectThree}.`);

//Episode 5
// const scenario = {
//   murderer: "Miss Scarlet",
//   room: "Kitchen",
//   weapon: "Candle Stick",
// };
//Function to change the weapon in the scenario object with the argument that is passed in when the function is called.
// const changeWeapon = function (newWeapon) {
//   scenario.weapon = newWeapon;
// };
// return a string with the scenario.weapon inserted at the end
// const declareWeapon = function () {
//   return `The weapon is the ${scenario.weapon}.`;
// };
//The weapon will be the Revolver as that was the argument passed in when the function was called.
// changeWeapon("Revolver");
// const verdict = declareWeapon();
// console.log(verdict);

// Episode 6
// Set the murderer to be Colonel Mustard
// let murderer = "Colonel Mustard";

// const changeMurderer = function () {
//   murderer = "Mr. Green";

//   const plotTwist = function () {
//     murderer = "Mrs. White";
//   };
//I think calling the plot twist function inside the changeMurder function will reassign the value of murdere to be Mrs White.
//   plotTwist();
// };

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// };
//Calling the changeMurderer will switch the murderer to be Mrs White
// changeMurderer();
//Then calling declareMurderer will store the string along with the current murderer in the verdict variable.
// const verdict = declareMurderer();
// console.log(verdict);

// Episode 7
let murderer = "Professor Plum";

const changeMurderer = function () {
  murderer = "Mr. Green";

  const plotTwist = function () {
    let murderer = "Colonel Mustard";
    // I think murderer variable is block scoped so can't be reassigned inside the plotTwist function
    const unexpectedOutcome = function () {
      murderer = "Miss Scarlet";
    };
    //Not sure what's happening here find out tomorrow.
    unexpectedOutcome();
  };

  plotTwist();
};

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
};

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// Episode 8
// const scenario = {
//   murderer: "Mrs. Peacock",
//   room: "Conservatory",
//   weapon: "Lead Pipe",
// };

// const changeScenario = function () {
//   scenario.murderer = "Mrs. Peacock"; //change murder to Mrs Peacock
//   scenario.room = "Dining Room"; //change room to Dining room

//   const plotTwist = function (room) {
//     if (scenario.room === room) {
//       scenario.murderer = "Colonel Mustard";
//     }

//     const unexpectedOutcome = function (murderer) {
//scenario.murder was reassigned to be Colonel Mustard above
//       if (scenario.murderer === murderer) {
//         scenario.weapon = "Candle Stick";
//       }
//     };
//Passing Colonel Mustard will reassign the scenario.weapon to be Candle Stick
//     unexpectedOutcome("Colonel Mustard");
//   };

//   plotTwist("Dining Room"); //Pass Dining room to plotTwist function which will reassign murderer to be Colonel Mustard
// };

// const declareWeapon = function () {
//   return `The weapon is ${scenario.weapon}.`;
// };

// changeScenario(); //runs the function so the outcome of calling declareWeapon should be Candle Stick
// const verdict = declareWeapon();
// console.log(verdict);

//Episode 9
// let murderer = "Professor Plum";

//If statements have their own scope so murderer is greyed out because murderer in declareMurderer function can't see it I think.
// if (murderer === "Professor Plum") {
//   let murderer = "Mrs. Peacock";
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`; //Murderer will be Professor Plum
// };

// const verdict = declareMurderer();
// console.log(verdict);

//Episode 10
//Clue: The Murderer's name starts with a P
const scenario = {
  murderers: ["Mrs. Peacock", "Professor Plum", "Miss Scarlet"],
  room: "Conservatory",
  weapon: "Lead Pipe",
};

const findMurderByFirstLetter = function (murderers, letter) {
  const foundMurderer = [];
  for (let murderer of murderers) {
    if (murderer[0] === letter) {
      foundMurderer.push(murderer);
    }
  }
  return foundMurderer;
};

const whoDunnit = findMurderByFirstLetter(scenario.murderers, "P");
console.log("The murderer is:", whoDunnit);

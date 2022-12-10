// 1. Take this disjointed sentence and turn it into a single string
const text = [
  "The ships",
  "hung in the sky,",
  "much the way",
  "that bricks don`t",
];

// Your Code Here
const jointed = text.reduce(
  (accumlator, currentWord) => `${accumlator} ${currentWord}`
);
console.log(jointed);
// expected output: "The ships hung in the sky, much the way that bricks don't"

// ----------------------------------------------------------

// 2. Return the winning team
const scores = [
  {
    team: "A",
    score: 20,
  },
  {
    team: "B",
    score: 17,
  },
  {
    team: "C",
    score: 23,
  },
  {
    team: "D",
    score: 13,
  },
];
const winner = scores.reduce((highest, current) => {
  if (highest.score > current.score) {
    return highest;
  }
  return current;
});

console.log(winner);
// Your Code Here

// expected output: "C"
// Explanation: In this example, highValue is the accumulator, and currentValue refers to an item in the array.
// This is a slightly more complicated example than the first exercise because we want to conditionally decide whether to update the accumulator or not.
// In this case, we only want to keep a running tally of the highest score, discarding any value unless it beats the accumulated high score.

// ----------------------------------------------------------
//    REAL LIFE EXAMPLE
// Reduce can sometimes save us a lot of time -- if we remember to use it.
// Instead of writing a complicated map or filter method and then calling the
// name of the ship out of the retuned array, Return the name of the fastest
// star ship

const ships = [
  {
    name: "Serenity",
    speed: "4.2G",
  },
  {
    name: "Cylon Raider",
    speed: "7.5G",
  },
  {
    name: "Swordfish II",
    speed: "50G",
  },
  {
    name: "Tie Fighters",
    speed: "4100G",
  },
];

// Your Code Here
const fastest = ships.reduce((fastest, current) => {
  if (
    parseFloat(fastest.speed.substring(0, fastest.speed.length)) >
    parseFloat(current.speed.substring(0, current.speed.length))
  ) {
    return fastest;
  }
  return current;
});

console.log(fastest.name);
// Expected output: Tie Fighters

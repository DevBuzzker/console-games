const args = process.argv.slice(2);

// For testing via F5
// args.push("hello worlD");
// args.push("3");

let phrase = "";
try {
  phrase = args[0];
} catch (ex) {
  console.log(
    "Provide arguments - a string in quotes to be converted and a number for shifting",
  );
  process.exit(1);
}
const shift = Number.parseInt(args[1], 10); // parse in 10 (decimal) system
if (Number.isNaN(shift)) {
  console.log("Second argument should be a number");
  process.exit(1);
}

const lettersString = "abcdefghijklmnopqrstuvwxyz";
const letters = lettersString.split("");

const phraseArray = phrase.split("");
let resultPhrase = "";
phraseArray.forEach((letter) => {
  // console.log(letter);
  const isUpper = letter === letter.toUpperCase();
  const letterLower = letter.toLowerCase();

  const indexInLetters = letters.indexOf(letterLower);
  if (indexInLetters === -1) {
    // not in letters
    resultPhrase += letter; // just add
    return; // and go process next letter
  }

  const newIndex = (letters.length + indexInLetters + shift) % letters.length; // added letterslength to support negative shifts
  const newLetter = letters.at(newIndex);
  resultPhrase += isUpper ? newLetter.toUpperCase() : newLetter;
});
console.log(resultPhrase);

// array.forEach((element) => {});

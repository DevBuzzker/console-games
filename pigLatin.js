const args = process.argv.slice(2);
// the docu says it should be in quotes as one argument, but i think without quotes is nicer
const vowels = ["a", "e", "i", "o", "u", "y"];
// those were vowels, treat everything else as consonants
// dont include capitals to keep vowels array clean - we will convert everything to lower later for comparison
// dont include german Umlaut letters - to keep implementation simple

console.log(args);
console.log(vowels);

// * Test data for F5 debugging
// args.push("Happy");
// args.push("Child");
// args.push("Awesome");
// args.push("Pig Latin is hard to speak");

if (args.length === 0) {
  console.error("no words provided as arguments");
  process.exit(1);
}

// support when argument is in quotes like "Pig Latin is hard to speak"
const argsWithSpaces = args.filter((x) => x.includes(" "));
argsWithSpaces.forEach((x) => {
  args.splice(args.indexOf(x), 1); // remove x from args
  args.push(...x.split(" ")); // add splits of x to args
});

let resultString = "";
args.forEach((element) => {
  if (resultString.length != 0) resultString += " "; // add space before second
  resultString += convert(element);
});
console.log("Result: " + resultString);

function convert(word) {
  const first = word[0].toLowerCase();
  const second = word[1].toLowerCase();
  const firstIsCapital = word[0] === word[0].toUpperCase();

  const startsWithConsAndVowel =
    vowels.every((x) => x !== first) && vowels.some((x) => x === second);
  const startsWithTwoCons = vowels.every((x) => x !== first && x !== second);
  const startsWithVowel = vowels.some((x) => x === first);

  let uncapitalized; // can have results like Happy = appyh + ay = appyHay
  if (startsWithTwoCons) uncapitalized = processStartsWithTwoCons(word);
  else if (startsWithConsAndVowel) uncapitalized = processConsVowel(word);
  else uncapitalized = processStartWithVowel(word);

  if (!firstIsCapital) return uncapitalized;
  else
    // Make it first letter capitalized like Appyhay
    return (
      uncapitalized.at(0).toUpperCase() + uncapitalized.slice(1).toLowerCase()
    );
}

function processConsVowel(word) {
  return word.slice(1) + word.at(0) + "ay";
}
function processStartsWithTwoCons(word) {
  return word.slice(2) + word.at(0) + word.at(1) + "ay";
}
function processStartWithVowel(word) {
  return word + "way";
}

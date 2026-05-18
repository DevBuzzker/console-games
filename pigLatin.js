const args = process.argv.slice(2);
// the docu says it should be in quotes as one argument, but i think without quotes is nicer
const vowels = ["a", "e", "i", "o", "u", "y"];
// those were vowels, treat everything else as consonants
// dont include capitals to keep vowels array clean - we will convert everything to lower later for comparison
// dont include german Umlaut letters - to keep implementation simple

console.log(args);
console.log(vowels);

function convert(word) {
  const startsWithVowel = vowels.length();
}

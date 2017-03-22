import DICTIONARY from './dictionary';

var startButton = document.querySelector(".find-words");
var wordlist = document.querySelector(".words");
var loopCount = 0;
var testedCount = 0;
var sortedDict = makeSortedDictionary();
console.log(sortedDict);

function makeSortedDictionary () {
  let result = {};

  DICTIONARY.forEach(word => {
    if (word.length < 4) {
      return;
    } else if (result[word.length]) {
      result[word.length].push(word);
    } else {
      result[word.length] = [word];
    }
  });

  return result;
}

function isAnagram (word1, word2) {
  let sorted1 = word1.split("").sort().join("");
  let sorted2 = word2.split("").sort().join("");
  return sorted1 === sorted2;
};

function hasJoiner (word1, word2) {
  let lastLetter = word1.length - 1;
  return word1[lastLetter] === word2[0];
};

function isFunnyWord (word1, word2) {
  if (word1 === word2) {
    return false;
  }
  testedCount++;
  return hasJoiner(word1, word2) && isAnagram(word1, word2);
};

function funnyWordTmpl (word1, word2) {
  return `<li>${word1}${word2.slice(1)}</li>`;
};

function findFunnyWords (event) {
//  console.time();
  for (var wordLength in sortedDict) {
    sortedDict[wordLength].forEach(word1 => {
      sortedDict[wordLength].forEach(word2 => {
        loopCount++;
        if (isFunnyWord(word1, word2)) {
          wordlist.innerHTML += funnyWordTmpl(word1, word2);
        }
      });
    });
  }
//  console.timeEnd();
  console.log(`Loop ran ${loopCount} times.`);
  console.log(`Checked ${testedCount} word combinations.`);
};

startButton.addEventListener('click', findFunnyWords);

export { isAnagram, hasJoiner, isFunnyWord };

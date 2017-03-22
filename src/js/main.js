import DICTIONARY from './dictionary';

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
  return hasJoiner(word1, word2) && isAnagram(word1, word2);
};

export { isAnagram, hasJoiner, isFunnyWord };

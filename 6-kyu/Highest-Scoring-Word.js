// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


function scoreWord(word) {
    let score = 0;
    for (let i = 0; i < word.length; i++) {
      score += word.charCodeAt(i) - 96; // 'a' has ASCII code 97
    }
    return score;
  }
  
  function high(string) {
    const words = string.split(" ");
    let highestWord = "";
    let highestScore = 0;
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const score = scoreWord(word);
      if (score > highestScore) {
        highestWord = word;
        highestScore = score;
      } else if (score === highestScore) {
        if (string.indexOf(word) < string.indexOf(highestWord)) {
          highestWord = word;
        }
      }
    }
    return highestWord;
  }
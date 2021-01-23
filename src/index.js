module.exports = function check(str, bracketsConfig) {

  let bracketsMap = new Map(bracketsConfig);
  let incorrectBrackets = [];

  for (let i = 0; i < str.length; i++) {
    str[i] === bracketsMap.get(incorrectBrackets[incorrectBrackets.length-1]) ? incorrectBrackets.pop() : incorrectBrackets.push(str[i]);
  }
  return incorrectBrackets.length === 0;
}

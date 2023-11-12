// 2023.11.11
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

// 我的寫法
function solution(str) {
  return str.split('').reverse().join('');
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// 其他人的寫法

// 寫法一: 箭頭函式
const solution = (str) => str.split('').reverse().join('');

// 寫法二: 用展開符展開字串
const solution = s => [...s].reverse().join('')

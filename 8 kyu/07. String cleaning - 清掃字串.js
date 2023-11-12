// 2023.11.11
// https://www.codewars.com/kata/57e1e61ba396b3727c000251

// 我的寫法
// g -> global match
function stringClean(s) {
  const reg = /[0-9]/g;
  const newStr = s.replace(reg, '');

  return newStr;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// 其他人的寫法
// \d -> digit 等同於 [0-9]
const stringClean = (s) => s.replace(/\d/g, '');
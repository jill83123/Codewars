// 2023.10.12
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

// 我的寫法
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// 其他人的寫法
function evenOrOdd(number) {
  return number % 2 === 0 ? 'Even' : 'Odd';
}

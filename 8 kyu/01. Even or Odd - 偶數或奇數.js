// 2023.10.12

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

// 2023.11.11
// https://www.codewars.com/kata/563b74ddd19a3ad462000054

// 我的寫法
function stringy(size) {
  let result = [];
  for (let i = 0; i < size; i++) {
    result[i] = i % 2 ? '0' : '1';
  }
  return result.join('');
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// 其他人的寫法

// 寫法一: 字串相加
function stringy(size) {
  var str = '';
  for (var i = 1; i <= size; i++) {
    str += i % 2;
  }
  return str;
}

// 寫法二: padStart 字串填充
const stringy = (x) => ''.padStart(x, '10');

// 寫法三: replace 搭配正規表達式
function stringy(size) {
  return '1'.repeat(size).replace(/11/g, '10');
}

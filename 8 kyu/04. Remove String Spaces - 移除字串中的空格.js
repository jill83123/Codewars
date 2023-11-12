// 2023.10.14
// https://www.codewars.com/kata/57eae20f5500ad98e50002c5

// 我的寫法 replaceAll
// g 在整個字符串中執行搜索和替換
function noSpace(x) {
  return x.replaceAll(/ /g, '');
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// 其他人的寫法

// `\s` 所有的空格字符，包括空格、制表符、换行符
// `+`  一個或多個
function noSpace(x) {
  return x.replace(/\s+/g, '');
}

// 寫法二：Split 和 Join 方法
function noSpace(x) {
  return x.split(' ').join('');
}

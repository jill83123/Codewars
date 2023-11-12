// 2023.11.11
// https://www.codewars.com/kata/5390bac347d09b7da40006f6

// 我的寫法
String.prototype.toJadenCase = function () {
  const str = this.split('');

  str[0] = str[0].toUpperCase();

  str.forEach((element, index) => {
    if (element === ' ') {
      str[index + 1] = str[index + 1].toUpperCase();
    }
  });

  return str.join('');
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// 其他人的寫法

// split 成一個一個的單字
// charAt 返回字符串中指定位置的字符
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

// 用 [ ] 取第一個字母
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map((item) => item[0].toUpperCase() + item.slice(1))
    .join(' ');
};

// 寫法二: replace 搭配正規表達式
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function (x) {
    return x.toUpperCase();
  });
};

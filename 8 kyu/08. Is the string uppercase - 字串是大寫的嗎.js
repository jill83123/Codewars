// 2023.11.11

// 我的寫法
// ^、$ -> 開頭、結尾
// + 匹配一個或多個
// 括號內的 ^ 為不包含的意思
String.prototype.isUpperCase = function () {
  return /^[^a-z]+$/.test(this);
};

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// 其他人的寫法

// toUpperCase 轉大寫
// this 為字符串物件 (object) 比較時要注意
String.prototype.isUpperCase = function () {
  return this == this.toUpperCase();
};

String.prototype.isUpperCase = function () {
  return this.toString() === this.toUpperCase();
};

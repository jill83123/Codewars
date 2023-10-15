// 2023.10.14

// 我的寫法
function feast(beast, dish) {
  const beastStr = beast[0] + beast[beast.length - 1];
  const dishStr = dish[0] + dish[dish.length - 1];
  return beastStr === dishStr;
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// 其他人的寫法
function feast(beast, dish) {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}

// 寫法二：slice 淺層拷貝最後一個字
function feast(beast, dish) {
  return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
}

// 寫法三：startsWith & endsWith
function feast(beast, dish) {
  return dish.startsWith(beast[0]) && dish.endsWith(beast[beast.length - 1]);
}

// 寫法四：自定義方法
function feast(beast, dish) {
  return beast.first() + beast.last() == dish.first() + dish.last();
}

String.prototype.first = function () {
  return this[0];
};

String.prototype.last = function () {
  return this[this.length - 1];
};

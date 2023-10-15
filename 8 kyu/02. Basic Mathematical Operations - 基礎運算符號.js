// 2023.10.12

// 我的寫法
// - eval() 把字串當作指令來執行，並得出結果
// - 有資安疑慮
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

basicOp('+', 4, 7);

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// 其他人的寫法

// 寫法一：switch
function basicOp(operation, value1, value2) {
  switch (operation) {
    case '+':
      return value1 + value2;
    case '-':
      return value1 - value2;
    case '*':
      return value1 * value2;
    case '/':
      return value1 / value2;
    default:
      return 'Operation must be one of + - * /';
  }
}

// 寫法二：物件
const basicOperations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

const basicOp = (op, x, y) => basicOperations[op](x, y);

// 2023.10.13
// https://www.codewars.com/kata/58649884a1659ed6cb000072

// 我的寫法
function updateLight(current) {
  if (current === 'green') {
    return 'yellow';
  } else if (current === 'yellow') {
    return 'red';
  } else {
    return 'green';
  }
}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

// 其他人的寫法

// 寫法一：三元運算子
function updateLight(current) {
  return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
}

// 寫法二：物件 { object }[ key ]
function updateLight(current) {
  return {
    green: 'yellow',
    yellow: 'red',
    red: 'green',
  }[current];
}

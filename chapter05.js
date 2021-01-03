// 5. 함수 
// 특정 코드를 하나의 명령으로 실행 할 수 있게 해주는 기능

function add(a, b) {
  return a + b;
}

const sum = add(1, 2);
console.log(sum);

function hello(name) {
  console.log('Hello, ' + name + '!');
}
hello('Javascript');

// ES6 : 템플릿 리터럴 (Template Literal) 문법
function helloES6(name) {
  console.log(`Hello, ${name}!`);
}
helloES6('Javascript');

// ES6 : 화살표 함수
// () => {}
const add2 = (a, b) => {
  return a + b;
};

console.log(add2(1, 2));

// 화살표 함수 표현(arrow function expression)은 function 표현에 비해 구문이 짧고  
// 자신의 this, arguments, super 또는 new.target을 바인딩 하지 않습니다. 
// 화살표 함수는 항상 익명입니다. 이  함수 표현은 메소드 함수가 아닌 곳에 가장 적당합니다. 
// 그래서 생성자로서 사용할 수 없습니다. 

function Person() {
  // this = Person
  this.age = 0;
  setInterval(function growUp() {
    // this = global : 일반적인 함수로써의 호출에서는 this는 전역 객체에 바인딩
    this.age++;
  }, 1000);
}
var p = new Person();


// isNaN()
// NaN 는 Not a Number 으로써, 숫자가 아닌 것으로 정의
console.log(isNaN(1)); // false
console.log(isNaN(1.23)); // false
console.log(isNaN('abc')); // true

console.log(isNaN(null)); // false
// 대부분 true 를 예상했을 것이다. 하지만 isNaN(null) 의 결과는 true 가 아닌 false 이다.
// isNaN() 의 내부적인 동작
// 1. isNaN() 함수는 넘어오는 인수를 먼저 숫자로 변환을 시도한다.
// 2. 그 결과값을 통해 NaN 여부를 확인한다.
// Number(null) 의 결과값은 0 으로써, isNaN(0) 은 false 를 출력
// isNaN(null) === isNaN(Number(null))
console.log("isNaN(null) === isNaN(Number(null))", isNaN(null) === isNaN(Number(null)));
// 이러한 예는 이미 혼란스러운 케이스로 정의되고 있다.
// ES2015 경우에는 Number.isNaN() 을 통해 대체
// isNaN() 아닌 Number 형에서만 사용할 수 있는 isNaN() 을 통해 숫자를 글로벌 isNaN() 보다 보증
console.log(Number.isNaN(null)); // false

console.log(isNaN(undefined)); // false





























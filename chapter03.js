// 3. 연산자
// 변수 선언
let value = 1; 

// 산술 연산자
// +: 덧셈
// -: 뺼셈
// *: 곱셈
// /: 나눗셈
value = 1 + 2;
console.log(value);

value++;
++value;
console.log(value);

console.log(value++);
console.log(++value);

// 대입 연산자
value = 1;
value += 3;
console.log(value);

value += 3;
value -= 3;
value *= 3;
value /= 3;
console.log(value);

// 논리 연산자
// !: NOT
// &&: AND
// ||: OR

let isBoolean = !true;
console.log(isBoolean);

isBoolean = true && true;
console.log(isBoolean);

// 연산 순서

// 비교 연산자
// 두 값이 일치하는지 확인 ===
// 두 값이 일치하지 않는지 확인 !==
// 크고 작음

// 문자열 붙이기


// 1. 함수 인자를 통한 변수 초기화 (|| 연산자)
function documentTitle(theTitle) {
  theTitle = theTitle || "Untitled Document";
}
documentTitle("title"); // theTitle = "title"
documentTitle();        // theTitle = "Untitled Document";

// 2. if 문 조건 (&& 연산자)
// 전달 인자가 존재하고, 또한 18 이상 true를 반환, 그렇지 않다면, false를 반환하는 함수
function isAdult(age) { 
  if (age && age >= 18) { 
    return true; 
  } else { 
    return false; 
  } 
}
isAdult(16) // false
isAdult(18) // true
isAdult()   // false

function isAdultOneLine(age) {
  return age && age >= 18 ;
}
 
isAdultOneLine(16) // false
isAdultOneLine(18) // true
isAdultOneLine()   // false
 
// ||, && 연산자를 활용하면 코드를 보다시피 훨씬 간결하게 만들 수 있다.
// userName이 있을 경우 logIn 함수를 호출하고 그렇지 않다면, singUp 함수를 호출
function logIn(name) {
    console.log('login');
}

function signUp() {
    console.log('signUp');
}

function enter(userName) {
  if (userName) {
    logIn(userName);
  } else {
      signUp();
  }  
}
enter('lee'); 
console.log('----------------login');

function enterOneLine(userName) { 
    userName && logIn(userName) || signUp (); 
}
enterOneLine('lee'); 
console.log('----------------login');






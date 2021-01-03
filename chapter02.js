console.log("Hello Javascript") ;

// 2. 변수와 상수
// 변수는 언제든지 변할 수 있는 값, 반대로 상수는 변하지 않는 값
let value = 1;
console.log(value) ;
value = 2;
console.log(value) ;

// 상수는, 한번 선언하고 값이 바뀌지 않는 값을 의미
const CONST_A = 1;
// TypeError: Assignment to constant variable.
// CONST_A = 2;
 
// IE9, IE10 같은 구형 브라우저에서는 let 과 const 를 사용 할 수 없습니다
// 보통 개발을 하게 될 때는 Babel 과 같은 도구를 사용하여 코드가 구형 브라우저에서도 돌아갈 수 있게끔 변환작업을 합니다

// 데이터 타입
// 숫자 (Number)
// 문자열 (String)
// boolean 참/거짓 (Boolean)
// null 과 undefined
const friend = null;
let criminal;
console.log(friend, criminal);

// 함수 선언 : global
function fn() {  
  // lastName' is declared but its value is never read --> remove
  var lastName = "lee";  
  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!"); 
}
// 함수 실행
fn(); 

// 즉시실행함수 : local
// 1) 선언과 동시에 실행
// 2) 내부에 있는 변수를 외부에서의 접근을 통제할 수 있다.
(function() {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@");
}());

// 외부 허용 : global
var fn = (function() {
  var lastName = "lee";    
  return {
    lastName: lastName
  }
}());
console.log(fn.lastName); // lee
  
// 외부 허용 x : local
(function(){
  var lastName = "lee";
  return {
    lastName: lastName
  }
}());
  
// 이러한 이유로 즉시실행함수는 플러그인이나 라이브러리에 많이 사용
// disqus
// ReferenceError: document is not defined
// (function() {
//     var d = document, s = d.createElement('script');
//     s.src = '//test213424.disqus.com/embed.js';
//     s.setAttribute('data-timestamp', +new Date());
//     (d.head || d.body).appendChild(s);
// })();

//제이쿼리
(function(global, factory) {
  /* code */
}( /* code */ ));

// 이러한 플러그인이나 라이브러리 같은 경우는 변수에 추가 하지 않아도 되기에 코드 충돌을 방지할 수 있고,
// 외부 접근을 통제할 수 있도록 하기위해 즉시실행함수를 이용한다.
// 코드 충돌에 대한 방지의 대표적인 예는 ,
// 제이쿼리와 함께 $변수를 이용하는 라이브러리를 사용할 때 문제가 생긴다.
// $라는 전역 변수를 이용하기 때문에  $변수에 대해 충돌이 생길 것이다.
// ReferenceError: jQuery is not defined
// (function($) {
//   console.log($);
// }(jQuery));

// 위와 같이 즉시실행함수 내부에는 $변수는 jQuery를 이용하게 된다.
// 위처럼 필요한 녀석을 인자를 넘겨주어 즉시실행함수 내부에서 이용가능하다.
// 위의 디스커스 소스를 즉시실행함수 인자로 넘겨주는 형태로 바꿔보자.
// disqus
(function(d,s) {
  s.src = '//test213424.disqus.com/embed.js';
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s);
})(documnet, 'script');






















// function Person() {
//   // this = Person
//   this.age = 0;
//   setInterval(function growUp() {
//     // this = global : 일반적인 함수로써의 호출에서는 this는 전역 객체에 바인딩
//     this.age++;
//   }, 1000);
// }
// var p = new Person();
// console.log(p.age);

// // 중지를 위해 ID 보관
// var ageId = null;
// function StartClock() {
//   PrintTime();
//   timerId = setInterval(PrintTime, 1000);
// }

function PrintTime() {
  var today = new Date();
  var hh = today.getHours();
  var mi = today.getMinutes();
  var ss = today.getSeconds();
  console.log("result", hh + ":" + mi + ":" + ss);
}

// 중지를 위해 ID 보관
var timerId = null;
// 시계 시작
function StartClock() {
  PrintTime();
  timerId = setInterval(PrintTime, 1000);
}
// 시계 중지
function StopClock() {
  if (timerId != null) {
    clearInterval(timerId);
  }
}


StartClock();
setTimeout(() => {}, 1000);
console.log('First');
StopClock();
StartClock();
setTimeout(() => {}, 1000);
console.log('Second');
StopClock();



  
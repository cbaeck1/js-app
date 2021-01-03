// 9. 배열 내장함수
// forEach 

const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

for (let i = 0; i < superheroes.length; i++) {
  console.log(superheroes[i]);
}

// forEach 함수의 파라미터로 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어줍니다.
// 함수의 파라미터 hero는 각 원소를 가르키게 됩니다
// 이렇게 함수형태의 파라미터를 전달하는 것을 콜백함수 라고 부릅니다
superheroes.forEach(hero => {
  console.log(hero);
});

// map
// map 은 배열 안의 각 원소를 변환 할 때 사용 되며 이 과정에서 새로운 배열이 만들어집니다.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// push 
const squared = [];
for (let i = 0; i < numbers.length; i++) {
  squared.push(numbers[i] * numbers[i]);
}
console.log(squared);

// forEach
squared.length = 0; // init
numbers.forEach(n => {
  squared.push(n * n);
});
console.log(squared);

// map
const square = n => n * n;
//const square = (n) => n * n;
//const square = function(n) {return n * n}
console.log(2, square(2));
const squared2 = numbers.map(square);
console.log(squared2);

const squared3 = numbers.map(n => n * n);
console.log(squared3);






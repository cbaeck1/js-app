// 6. 객체
// { 키: 원하는 값 }

// 굳이 왜 객체를 const 로 사용하는 것인지 의문
// 1. 대부분 변수보다 상수를 써라.
// 2. let 과 const 의 사용에 있어, const 우선적으로 써라.
//(Why) let, const 선언에 따라, 재할당 여부를 통해 해당 목적을 파악하여 가독성 향상 및 상수의 값을 변경하는 실수를 방지
const a = {}; 
const b = {}; 
console.log(a === b); // false

//
const dog = {
  name: '멍멍이',
  age: 2
};
console.log(dog.name);
console.log(dog.age);

const ironMan = {
  name: '토니 스타크',
  actor: '로버트 다우니 주니어',
  alias: '아이언맨'
};

const captainAmerica = {
  name: '스티븐 로저스',
  actor: '크리스 에반스',
  alias: '캡틴 아메리카'
};

console.log(ironMan);
console.log(captainAmerica);

// 함수에서 객체를 파라미터로 받기
function print(hero) {
  const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${hero.actor} 입니다.`;
  console.log(text);
}
print(ironMan);
print(captainAmerica);

// 객체 비구조화 할당 == 객체 구조 분해
// hero 내부의 값을 조회 할 때 마다 hero. 를 입력
function print2(hero) {
  const { alias, name, actor } = hero;
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}
print2(ironMan);
print2(captainAmerica);

function print3({ alias, name, actor }) {
  const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
  console.log(text);
}
print3(ironMan);
print3(captainAmerica);

// 객체 안에 함수 넣기
const dog2 = {
  name: '멍멍이',
  sound: '멍멍!',
  say: function say() {
    console.log(this.sound);
  }
};

dog2.say();

// getter 함수와 setter 함수
const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log('sum 함수가 실행됩니다!');
    return this.a + this.b;
  }
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);
// numbers.sum() 을 한 것이 아니라 number.sum 을 조회했을 뿐인데, 함수가 실행되고 그 결과값이 출력되었습니다.
// 이런식으로 Getter 함수는 특정 값을 조회 할 때 우리가 설정한 함수로 연산된 값을 반환합니다.

// 
// setter : name 을 저장할 때는 정확한 값일 때 저장
// getter : name 을 가져올 때는 대문자로 된 이름을 얻을 수 있다.
// 변수는 _name, _name 에 직접 접근하지 않으면서, 정의된 오퍼레이션을 통해서만 접근
// 사용자는 이름을 얻고자 할뿐, 얻는 과정에 있는 내부적인 일은 신경쓰지 않는다.
// 이러한 원리가 캡슐화의 이점인 정보 은닉이 된다.

class Person { 
  constructor(name, age) { 
    this._name = name; 
    this.age = age; 
  } 
  
  get name() { 
    return this._name.toUpperCase(); 
  } 
    
  set name(newName) { 
    if (newName) { 
      this._name = newName; 
    } 
  } 
} 

let man = new Person('John', 10); 
console.log(man); 
// man.name setter
console.log(man.name, man.age); 
man.name = 'John Park'; 
man.age = 20; 
console.log(man); 
console.log(man.name, man.age); 

// getter, setter를 통한 일관성 유지
class TimeWithoutConsistency { 
  constructor(start, end) { 
    this._start = start; 
    this._end = end; 
    this._duration = end - start; 
  } 
} 
const time1 = new TimeWithoutConsistency(0, 20); 
time1._start = 5; 
console.log(time1)
time1._duration -= 5; 
console.log(time1);

// start 변수의 값을 수정할 때, 사실상 duration 변수도 수정되어야하기 때문
// 변수의 직접 접근을 통해 보호되지 못한 결과, 누구나 접근하여 변경할 수 있기에 
// start에 따른 duration 값이 맞지 않는 결과가 초래될 수 있다.
// 즉, 변수 관계에 있어서, 일관성을 깨뜨리게 된다.

class TimeWithConsistency { 
  constructor(start, end) { 
    this._start = start; 
    this._end = end; 
    this._duration = end - start; 
  }

  setStart (newStart) { 
    this._start = newStart; 
    this._duration = this._end - this._start; 
  } 
  
  getStart() { 
    return this._start; 
  }
} 
const time2 = new TimeWithConsistency(0, 20); 
time2._start = 5; 
console.log(time2);
time2.setStart(5); 
console.log(time2);

// getter, setter를 통해 접근함으로써, 변수를 보호할 수 있다.
// 또한, setter를 통해 start와 duration을 설정함으로써, 위에서 발생한 일관성 문제를 해결
// create setStart variable
time2.setStart = 5; 
console.log(time2);
// TypeError: time2.setStart is not a function
// time2.setStart(5); 


// 자바스크립트만의 getter, setter
class TimeJS { 
  constructor(start, end) { 
    this._start = start; 
    this._end = end; 
    this._duration = end - start; 
  }

  set start (newStart) { 
    this._start = newStart; 
    this._duration = this._end - this._start; 
  } 
  
  get start() { 
    return this._start; 
  }
} 
const time3 = new TimeJS(0, 20); 
time3._start = 5; 
console.log(time3);
// setter
time3.start = 5; 
console.log(time3);
// getter
console.log(time3.start);





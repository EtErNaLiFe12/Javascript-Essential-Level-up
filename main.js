// 1. 데이터 타입 확인

    /* import getType from './getType'

    console.log(typeof 'hello world!')
    console.log(typeof 123)
    console.log(typeof true)
    console.log(typeof undefined)
    console.log(typeof null)
    console.log(typeof {})
    console.log(typeof [])

    console.log(getType(123))
    console.log(getType(false))
    console.log(getType(null))
    console.log(getType({}))
    console.log(getType([])) */

//-------------------------------------------------------------

// 2. 산술, 할당, 비교, 논리 연산자

  // -1. 산술 연산자 (Arithmetic operator)

    /* console.log(1 + 2) // 더하기
    console.log(5 - 3) // 빼기
    console.log(6 * 1) // 곱하기
    console.log(6 / 2) // 나누기
    console.log(7 % 2) // 나머지 */

  // -2. 할당 연산자 (Assignment operator)

    /* const a = 2 // = 기호가 할당 연산자.
    let b = 3
    // b = b + 5 == b += 5
    b += 5

    console.log(a)
    console.log(b) */

  // -3. 비교 연산자 (Comparison operator)

    /* const a = 13
    const b = 13

    console.log(a === b) // === 일치 연산자
    console.log(a !== b) // !== 불일치 연산자
    console.log(a <= b)

    function isEqual(x, y) {
      return x === y
    }

    console.log(isEqual(1, 1))
    console.log(isEqual(2, '2'))
    console.log(isEqual(2, 1)) */

  // -4. 논리 연산자 (Logical operator)

    /* const a = 1 === 1
    const b = 'AB' === 'AB'
    const c = false

    console.log(a)
    console.log(b)
    console.log(c)

    console.log('&&:', a && b && c) // AND 연산자 - 전부 true 가 아닐경우 false가 됨
    console.log('||:', a || b || c) // OR 연산자 - 전부 false 가 아닐경우 true가 됨
    console.log('!:', !a) // NOT 연산자 - 반대값이 출력됨 */

//-------------------------------------------------------------

// 3. 삼항 연산자
    
     /* const a = 1 < 2

    if (a) {
      console.log('참')
    } else {
      console.log('거짓')
    }
      
    console.log(a ? '참' : '거짓') // a ? true : false */

//-------------------------------------------------------------

// 4. 조건문(Switch statement) if / else / switch & case문 

     /* import random from './getRandom'

    const a = random()

    switch (a) {
      case 0: 
        console.log('a is 0')
        break
      case 2: 
        console.log('a is 2')
        break
      case 4:
        console.log('a is 4')
        break
      default: 
        console.log('rest....')
    }

    if (a === 0) {
      console.log('a is 0')
    } else if (a === 2) {
      console.log('a is 2')
    } else if (a === 4) {
      console.log('a is 4')
    } else {
      console.log('rest....')
    } */

//-------------------------------------------------------------

// 5. 반복문 (For statement)
  // for (시작조건; 종료조건; 변화조건) {}

   /* const ulEl = document.querySelector('ul') // ul 태그를 찾는다

  for (let i = 0; i < 10; i += 1) { 
    const li = document.createElement('li') // li이라는 변수를 만들어서 li 요소를 추가
    li.textContent = `list-${i + 1}` // li에 텍스트 부분만 출력함
    if ((i + 1) % 2 === 0) { //if 문으로 2를 나눠 나머지가 0인 경우에만
      li.addEventListener('click', function () { // addEventListener를 통해 click 이벤트를 만들고 
        console.log(li.textContent) // 함수로는 li의 textContent가 출력되게 한다.
      })
    }
    ulEl.appendChild(li) // 위에 찾은 ul태그에 appendChild 메소드를 통해 li를 삽입.
  } */

//-------------------------------------------------------------

// 6. 변수 유효범위(Variable Scope)
  // var 함수 레벨의 유효범위 
  // let, const block({}) 레벨의 유효범위

/* function scope() {
  if (true) {
    const a = 123
    console.log(a)
  }
}

scope() */

// 7. 형 변환(Type conversion)

// Truthy(참 같은 값)
// true, {}, 1, 2, 'false', -12, '3.14'...

// Falsy(거짓 같은 값)
// false, '', null, undefined, 0, -0, NaN

  /* const a = 1
  const b = '1'

  console.log(a == b) // == 동등 연산자를 사용시 형 변환이 일어남


  if("false") {
    console.log(123)
  } */

//-------------------------------------------------------------

//함수 복습

/* function sum(x, y) {
  // console.log(x + y)
  return x + y
  
}
  const a = sum(1, 3)
  const b = sum(4, 12)
  console.log(sum(1, 3))
  console.log(b)
  console.log(a + b)  */
  

//-------------------------------------------------------------

// 화살표 함수
// () => {} vs function () {}

/* const double = function (x) {
  return x * 2
}
console.log('double: ', double(7))

const doubleArrow = x => x * 2 // 매개변수가 1개 일때는 () 괄호 생략 가능
console.log('doubleArrow: ', doubleArrow(7))

const doubleArrowed = x => ({ name: 'heropy' }) // 화살표 함수에서 객체데이터 입력시
console.log('doubleArrowed: ', doubleArrowed(7)) */

//-------------------------------------------------------------

//즉시실행함수
// IIFE, Immediately-Invoked Function Expression

/* const a = 7
function double() {
  console.log(a * 2)
}
  double();

(function () {  // 즉시실행함수 사용시에는 ()를 앞뒤로 붙인뒤에 ()를 뒤에 한번더 붙여 사용
  console.log(a * 2)
})();

(function () {  // 즉시실행함수 사용시에는 ()를 앞뒤로 붙인뒤에 ()를 안에 한번더 붙여 사용(사용 권장!!)
  console.log(a * 2)
}())*/

//-------------------------------------------------------------

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// 기본 로직
/* const a = 7

const double = function () {
  console.log(a * 3)
}
  double() */

// 호이스팅
/* const b = 5

  doubled()

function doubled() {
  console.log(b * 3)
} */

//-------------------------------------------------------------

// 타이머 함수

// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료


/* const timer = setTimeout(() => {
  console.log('heropy!')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
}) */

/* const timer = setInterval(() => {
  console.log('heropy!!')
}, 2000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearInterval(timer)
}) */

//-------------------------------------------------------------

// 콜백 함수
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

/* function timeout(cb) {
  setTimeout(() => {
    console.log('Heropy!')
    cb()
  }, 2000)
}

timeout(() => {
  console.log('Done!')
})
*/

//-------------------------------------------------------------

// 생성자 함수
// 속성과 메소드를 통틀어서 "멤버" 라고 부른다
/* const heropy = {
  firstName: 'Heropy',
  lastName: 'Park',
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(heropy.getFullName())

const amy = {
  firstName: 'Amy',
  lastName: 'Clarke',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(amy.getFullName()) */

//-------------------------------------------

/* function User(first, last) { //생성자 함수를 사용할 경우 함수 이름에 camelcase 기법이 아닌 Pascalcase 기법으로 표기함. (앞에 대문자를 사용)
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}
const heropy = new User('Heropy', 'Park')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(heropy.getFullName())
console.log(amy)
console.log(neo) */

//-------------------------------------------------------------

//THIS
//일반(Normal) 함수는 호출 위치에 따라 this 정의!
//화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

/* const heropy = {
  name: 'Heropy',
  normal: function() { // 축약형 normal() {}
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
heropy.normal()
heropy.arrow()

const amy = {
  name: 'Amy',
  normal: heropy.normal,
  arrow: heropy.arrow
}

amy.normal()
amy.arrow() */


/* function User(name) {
  this.name = name
}
User.prototype.normal = function () { //prototype은 객체를 상속 시키기위함 prototype으로 만들어진 메소드는 메모리에 한번만 만들어짐 / new를 통해 언제든지 사용가능
  console.log(this.name)
}
User.prototype.arrow = () => {
  console.log(this.name)
}

const heropy = new User('Heropy')

heropy.normal()
heropy.arrow() */


// 화살표 함수 - 함수 범위내에 있어야함
/* const timer = {
  name: 'Heropy!!',
  timeout: function() {
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
}
timer.timeout() */

//-------------------------------------------------------------

//ES6 Classes

/* function User(first, last) { 
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
} */

/*  class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
const heropy = new User('Heropy', 'Park')
const amy = new User('Amy', 'Clarke')
const neo = new User('Neo', 'Smith')

console.log(heropy.getFullName())
console.log(amy.getFullName())
console.log(neo)  */

//-------------------------------------------------------------

//상속(확장)

/* class Vehicle {
  constructor(name, wheel) {
    this.name = name
    this.wheel = wheel
  }
}
const myVehicle = new Vehicle('운송수단', 2)
console.log(myVehicle)

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel)
  }
}
const myBicycle = new Bicycle('삼천리', 2)
const daughtersBicycle = new Bicycle('세발', 3)

console.log(myBicycle)
console.log(daughtersBicycle)

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel)
    this.license = license
  }
}
const myCar = new Car('벤츠', 4, true)
const daughtersCar = new Car('포르쉐', 4, false)

console.log(myCar)
console.log(daughtersCar) */

//-------------------------------------------------------------

//JS 데이터

//문자
// string.prototype.indexof()
// 'hello world!'.indexOf() //"" '' literal 방식

// const result = 'hello world!'.indexOf('world')
// console.log(result)

/*const str = '0123'

console.log(str.length)
console.log('0123 '.length)

const strs = 'Hello world!'
const stra = 'wnsqja8888@naver.com'
const strb = '   Hello world  '


console.log(strs.indexOf('HEROPY') !== -1)
console.log(strs.slice(6, 11))
console.log(strs.replace('world', 'HEROPY'))
console.log(strs.replace('Hello', 'HEROPY'))
console.log(strs.replace('Hello', ''))
console.log(stra.match(/.+(?=@)/)[0]) // 정규 표현식
console.log(strb.trim()) */

//-------------------------------------------------------------

// 숫자와 수학

/* const pi = 3.14159265358979
console.log(pi)

const str = pi.toFixed(2) 
console.log(str)
console.log(typeof str) // 문자데이터

const integer = parseInt(str) // 정수 숫자데이터로 변환
const float = parseFloat(str) // 실수 (소수점) 숫자데이터로 변환
console.log(integer)
console.log(float)
console.log(typeof integer, typeof float) */

/*const a = -1
const b = -10

const sum = () => {
  return a + b
}
console.log(parseInt(sum() + b / 2)) */

//-------------------------------------------------------------

// Math 함수

/* console.log('abs: ', Math.abs(-12))
console.log('min: ', Math.min(2, 8))
console.log('max: ', Math.max(2, 8))
console.log('ceil: ', Math.ceil(3.14)) // 올림
console.log('floor: ', Math.floor(3.14)) // 내림
console.log('round: ', Math.round(3.14)) // 반올림
console.log('random: ', Math.random()) // 난수


const c = -14
console.log(Math.abs(c)) */

//-------------------------------------------------------------

// ----배열----

/* const numbers = [1, 2, 3, 4] // 배열 내부에 있는 데이터들을 element(요소) or Item 이라고 한다.
const fruits = ['Apple', 'Banana', 'Cherry'] // 배열 내부에 있는 순서의 숫자는 index라 칭함.

console.log(numbers[0])
console.log(fruits) */

//-------------------------------------------------------------

// .length (배열의 길이)

/*const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers.length)
console.log(fruits.length) 
console.log([1, 2].length) 

console.log([].length)*/

//-------------------------------------------------------------

// .concat() (두개의 배열을 병합해서 새로운 배열을 만듬)

/*const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

console.log(numbers.concat(fruits))

fruits.forEach(function (element, index, array) { // element => item or 이해 가능범위의 이름을 사용 할 것 / index => i / array는 잘 안씀
  console.log(element, index, array)
}) */

//-------------------------------------------------------------

// .map()

/* const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

// const a = fruits.forEach(function (fruit, i) {
  const a = fruits.forEach((fruit, i) => {
  console.log(`${fruit}-${i}`)
})
// console.log(a)

// const b = fruits.map(function (fruit, i) { //map 메소드는 콜백함수에서 반환된 특정 데이터에 대해 반환을 해주며 새로운 배열을 만든다.
    const b = fruits.map((fruit, i) => ({
    id: i,
    name: fruit
  }))
  // return `${fruit}-${i}`
  console.log(b) */

//-------------------------------------------------------------

  // .filter()

  /* const numbers = [1, 2, 3, 4]
  const fruits = ['Apple', 'Banana', 'Cherry']

  const a = numbers.map(number => { return number < 3 })
  console.log(a)

  const b = numbers.filter(number => number < 3)
  console.log(b) */

//-------------------------------------------------------------

  // .find() .findIndex()

  /* const numbers = [1, 2, 3, 4]
  const fruits = ['Apple', 'Banana', 'Cherry']

  const a = fruits.find(fruit => /^B/.test(fruit)) // 정규 표현식 
  console.log(a)

  const b = fruits.findIndex(fruit => /^C/.test(fruit)) // index의 번호를 출력
  console.log(b) */

//-------------------------------------------------------------

  // .includes() - 포함되어있는지 확인해주는 메소드

  /*const numbers = [1, 2, 3, 4]
  const fruits = ['Apple', 'Banana', 'Cherry']

  const a = numbers.includes(3)
  console.log(a)

  const b = fruits.includes('HEROPY')
  console.log(b)*/

//-------------------------------------------------------------

// .push() .unshift()
// 원본 수정됨 주의!!!

  /* const numbers = [1, 2, 3, 4]
  const fruits = ['Apple', 'Banana', 'Cherry']

  numbers.push(5) // 맨 뒤에 데이터를 추가
  console.log(numbers)

  numbers.unshift(0) // 맨 앞에 데이터를 추가
  console.log(numbers)

// .reverse() - 순서를 반대로 바꿈
// 원본 수정됨 주의!!!

  numbers.reverse() 
  fruits.reverse()

  console.log(numbers)
  console.log(fruits)
  
// .splice() - n번째에 데이터를 삭제 또는 추가
// 원본 수정됨 주의!!!

  numbers.splice(2, 3, 99) // 첫번째값: 인덱스 번호 / 두번째값: 몇개를 지울지 정함 / 세번째값: 데이터를 추가(1번 2번 인수값의 위치를 참조)
  fruits.splice(2, 0, 'orange')
  
  console.log(numbers)
  console.log(fruits) */

//-------------------------------------------------------------

// Object

// .assign()

/*const userAge = {
  // key: value
  name: 'Heropy', //property
  age: 85
}
const userEmail = {
  name: 'Heropy',
  email: 'wnsqja8888@naver.com'
}

const target = Object.assign({}, userAge, userEmail) // userEmail의 내용을 userAge에 복사해서 집어 넣음
console.log(target)
console.log(userAge)
console.log(target === userAge)

const a = { k: 123 }
const b = { k: 123 }
console.log( a === b)*/

//-------------------------------------------------------------

// .keys()

/* const user = {
  name: 'Heropy',
  age: 85,
  email: 'wnsqja8888@naver.com'
}

const keys = Object.keys(user)
console.log(keys)
// ['name', 'age', 'email']

console.log(user['email']) //객체 데이터 인덱싱 방법

const values = keys.map(key => user[key])
console.log(values) */

//-------------------------------------------------------------

// 구조 분해 할당(Destructuring Assignment)
// 비구조화 할당

//객체 데이터
/*const user = {
  name: 'Heropy',
  age: 85,
  email: 'wnsqja8888@naver.com',
  address: 'USA'
}
const { name: heropy, age, email: ea, address = 'Korea' } = user // address = 'Korea' - 기본값 지정 가능
// E.g, user.address

console.log(`사용자의 이름은 ${heropy}입니다.`)
console.log(`${name}의 나이는 ${age}세 입니다.`)
console.log(`${name}의 이메일 주소는 ${ea}입니다.`)
console.log(address)

// 배열 데이터
const fruits = ['Apple', 'Banana', 'Cherry'] // 배열은 순서대로 추출함
// const [a, b, c, d] = fruits
const [, , c] = fruits
console.log(c)*/

//-------------------------------------------------------------

// 전개 연산자 (Spread)

/* const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
console.log(fruits)
console.log(...fruits) // 전개연산자 기호 - 배열데이터를 아래와 같이 쉼표로 구분된 아이템으로 출력함 ===> console.log('Apple', 'Banana', 'Cherry')

// function toObject(a, b, ...c) {                    // ...c rest parameter(나머지 매개변수)
//   return { a: a, b: b, c: c } === {a, b, c}
// }

const toObject = (a, b, ...c) => ({a, b, c})          // 객체 데이터 사용시 중괄는 화살표 함수 내에 범위를 나타내는 용도로 쓰이므로 소괄호()를 열어서 안에 작성 할 것  

console.log(toObject(...fruits))
// console.log(toObject(fruits[0], fruits[1], fruits[2]), fruits[3]) */

//-------------------------------------------------------------

//데이터 불변성(Immutability)
//원시 데이터: String, Number, Boolean, undefined, null
//참조형 데이터: Object, Array, Function
//-------------------------------------------------------------
// |1:             |2:              |3:             |4:
//-------------------------------------------------------------

//원시 데이터의 예
/*let a = 1
let b = 4
console.log(a, b, a === b)
b = a
console.log(a, b, a === b)
a = 7
console.log(a, b, a === b)
let c = 1
console.log(b, c, b === c)*/

//참조형 데이터의 예-1
/* let a = { k:1 }
let b = { k:1 }
console.log(a, b, a === b)
a.k = 7
b = a // 복사 개념이 아닌 같은 메모리 공간을 바라보게 바꿔줌
console.log(a, b, a === b)
a.k = 2 //a의 k 속성값을 변경시 b도 자동으로 바뀜 / 이 부분을 개별로 만들어주기위해 얕은 복사와 깊은 복사를 해야함.
console.log(a, b, a === b)
let c = b
console.log(a, b, c, a === c)
a.k = 9
console.log(a, b, c, a === c) */

//-------------------------------------------------------------

// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)

/*import _ from 'lodash'

const user = {
  name: 'Heropy',
  age: 85,
  emails: ['wnsqja8888@naver.com']
}
const copyUser = _.cloneDeep(user) //깊은복사  //{...user} //Object.assign({}, user) - user 얕은 복사
console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

console.log('------')
console.log('------')

user.emails.push('wnsqja8888@naver.com')
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser) */

//-------------------------------------------------------------

// 가져오기 / 내보내기

/* import _ from 'lodash' // From `node_modules`!
import checkType from './getType' // getType.js // 앞에 부분은 이름이 바꿀 수 있음
// import { gotit, user as jb} from './getRandom' // getRandom.js // default가 아닌 이름을 지정시 { }를 붙여 줘야한다.
// 이름 바꿀시엔 as 를 사용
import * as R from './getRandom' // 한번에 모든걸 끄낼시엔 * 와일드 카드를 사용


console.log(_.camelCase('the hello world'))
console.log(checkType([1, 2, 3]))
// console.log(gotit(), gotit()) 
// console.log(jb)
console.log(R) */

//-------------------------------------------------------------

// lodash 사용법

/* import _ from 'lodash'

const usersA = [
  { 
    userId: '1', 
    name: 'HEROPY'
  },
  { 
    userId: '2', 
    name: 'Neo'
  }
]
const usersB = [
  { 
    userId: '1',
    name: 'HEROPY'
  },
  {
    userId: '3',
    name: 'Amy'
  }
]

const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId')) // 중복된 데이터, 중복을 구분할 고유한 속성 (데이터가 1개일때 사용)

const usersD = _.unionBy(usersA, usersB, 'userId') // 데이터가 여러개 일때 
console.log('unionBy', usersD) */

//--------------------------------------

/* import _ from 'lodash'

const users = [
  { userId: '1', name: 'HEROPY'},
  { userId: '2', name: 'Neo'},
  { userId: '3', name: 'Amy'},
  { userId: '4', name: 'Evan'},
  { userId: '5', name: 'Lewis'}
]

const foundUser = _.find(users, { name: 'Amy'})
const foundUserIndex = _.findIndex(users, { name: 'Amy'})
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, { name: 'HEROPY'})
console.log(users) */

//-------------------------------------------------------------

//JSON (JavaScropt Object Notation) 문자 데이터
//자바스크립트의 객체 표기법

/* import myDdata from './myData.json'

console.log(myDdata)

const user = {
  name: 'HEROPY',
  age: 85,
  emails: [
    'thesecon@gmail.com',
    'neo@zillinks.com'
  ]
}
console.log('user', user)

const str = JSON.stringify(user) //문자데이터 화
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str) // parse를 통해 js에서 사용가능하게끔 바꿔줌
console.log('obj', obj) */

//-------------------------------------------------------------

//STORAGE

/* const user = {
  name: 'heropy',
  age: 60,
  emails: [
    'thesecon@gmail.com',
    'neo@zillinks.com'
  ]
}

// localStorage.setItem('user', JSON.stringify(user)) //localstorage에 저장 할시에는 setItem을 사용하고 JSON.stringify를 통해 문자데이터로 만들어준다.
// console.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user')
const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj)) */

//-------------------------------------------------------------

//OMDb API
//query string - 주소?속성=값&속성=값&속성=값
/*
import axios from 'axios'

function fetchMovies() {
  axios
  .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen') //데이터 요청시에 https를 붙일것
  .then(res => {
    console.log(res)
    const h1El = document.querySelector('h1')
    const imgEl = document.querySelector('img')
    h1El.textContent = res.data.Search[0].Title
    imgEl.src = res.data.Search[0].Poster
  })
}
fetchMovies()
*/

// 정규 표현식

let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd.
`
// regexp는 인스턴스 g(global) = 전체 (플래그) i = 대문자 소문자 구분 안함 (플래그)
// const regexp = new RegExp('the','gi')
// console.log(str.match(regexp))

// const regexp = /the/gi
// console.log(str.match(regexp))

//const regexp = /fox/gi
//console.log(regexp.test(str))
//console.log(str.replace(regexp, 'AAA'))
//str = str.replace(regexp, 'AAA') // 재할당
//console.log(str)

//const regexp = /the/gi
console.log(str.match(/\.$/gim)) // . 마침표 하나는 특정 문자를 검색하는 패턴이므로 \ 백슬래쉬 기호를 사용하여 특수기호를 문자로 해석될수있게 한다.
//$앞에 있는 하나의 단어로 끝나는 부분을 찾아서 일치시켜줌


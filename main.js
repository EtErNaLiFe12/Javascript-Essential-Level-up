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

function timeout(cb) {
  setTimeout(() => {
    console.log('Heropy!')
    cb()
  }, 2000)
}

timeout(() => {
  console.log('Done!')
})



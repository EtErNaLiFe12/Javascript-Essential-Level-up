export default function getType(data) { //export를 통해서 내보내기
  return Object.prototype.toString.call(data).slice(8, -1)
}

export const user = {
  name: 'jbp',
  age: 29
}
// import getType from './getType' // import를 통해서 가져오기

// export default 123 (Only one default export allowed per module.)
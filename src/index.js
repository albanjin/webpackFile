console.log('jinjin')
import 'babel-polyfill'

let fun = () =>{ console.log(12345)}
let arr = [1,2,4,5,3,2,1,5]
let arrB = arr.map((item)=>{ return item *2 })
console.log(new Set(arr))
/** генерики типи що вимагають уточнень або самі є уточненнями (генерики це умовні типи) */
//
//
// const names:Array<string> = []; // string[]
//
//  const promise:Promise<string> = new Promise((resolve, reject)=>{
//   setTimeout(()=>resolve(' '),22)
//  })
//
//
//
 /** як генерики працюють build in generics*/
 /** extends object означає шо має бути не будь-яке значення а лише обєкт, цифра не пройде , навідміну від без нього*/
function merge <T extends object, U extends object>(objA:T,objB:U) {
 return Object.assign(objA,objB)
}
const obj1 = merge({name:'sasha'}, {age:2})
console.log(obj1.age )
















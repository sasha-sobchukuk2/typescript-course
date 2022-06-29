"use strict";
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
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const obj1 = merge({ name: 'sasha' }, { age: 2 });
/** вписуємо шо входящий параметр може бути будь-чим(строкою ерейом і тд) що має length значення*/
function countAndDescribe(element) {
    let descriptionType = 'Go no value.';
    if (element.length === 1) {
        descriptionType = 'got 1 element';
    }
    else if (element.length > 1) {
        descriptionType = 'has ' + element.length + ' elements';
    }
    return [element, descriptionType];
}
console.log(countAndDescribe('bor'));
//# sourceMappingURL=generics.js.map
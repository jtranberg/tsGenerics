"use strict";
// function getRandomStringElement2<T>(list: T[]) : T {
//     const randIdx = Math.floor(Math.random() * list.length)
//     return list[randIdx]
//   }
const getRandomStringElement3 = (list) => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
};

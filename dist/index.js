"use strict";
console.log("Its is working!");
// const nums: number[]= [];
const nums = [];
const colors = [];
const lie = [];
/////////////////////////////////////////////////////////////////////////////
const inputEl = document.querySelector("#username");
console.dir("inputEl");
inputEl.value = "Enter Here";
const btn = document.querySelector(".btn"); //.btn is a class call ..(!) is an assertion
/////////////////////////////////////////////////////////////
function numberidentity(item) {
    return item;
}
function srtingIdentity(item) {
    return item;
}
function booleanidentity(item) {
    return item;
}
function identity2(item) {
    return item;
}
function identity(item) {
    return item;
}
//identity<string>                            //what ever input type,,can be used
identity(7);
identity("helo");
identity(true);
// identity<Cat>({{}})    
///////////////////////////////////////////////////////////////////////////
function getRandomNumberElement(list) {
    return [];
}
// function getRandomStringElement(list: string []): string []{
//    return[];
// }
function getRandomStringElement2(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
console.log(getRandomStringElement2(["a", "b", "c", "d", "e"]));
// function getRandomstringElement2<Cat>(list: Cat[]) : Cat {
//     return []
//  }
console.log(getRandomStringElement2(['d', 'e', 'a', 'm'])); //without generic pruded same results
console.log(getRandomNumberElement([2, 5, 4, 8, 7, 9]));
const getRandomStringElement4 = (list) => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
};
//////////////////////////////////////////////////////////////////
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const combo = merge({ name: "jay" }, { pets: ["Lee", "Paw"] });
console.log(combo);
console.log(merge({ name: "jay" }, { num: 9 })); //merges any objec {}
function print(thing) {
    return thing.length * 2;
}
//   function print(thing: Lengthy): number {          alternate code without generic
//     return thing.length * 2;
//   }
print("hello World!");
function makeEmptyArray() {
    return [];
}
const number2 = makeEmptyArray();
class PlayList {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new PlayList();
const videos = new PlayList();

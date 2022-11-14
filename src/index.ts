console.log("Its is working!")

// const nums: number[]= [];
const nums: Array<number> = []
const colors: Array<string> = []
const lie: Array<boolean> = []

/////////////////////////////////////////////////////////////////////////////
const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir("inputEl");
inputEl.value = "Enter Here";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;      //.btn is a class call ..(!) is an assertion
/////////////////////////////////////////////////////////////

function numberidentity(item: number): number {
    return item;
}
function srtingIdentity(item: string): string {
    return item;
}
function booleanidentity(item: boolean): boolean {
    return item;
}

function identity2(item: any) : any {
    return item;
}
interface Cat{
    breed: string,
    name: string
}

function identity<Type>(item: Type): Type {
    return item;
}
//identity<string>                            //what ever input type,,can be used

identity<number>(7)
identity<string>("helo")
identity<boolean>(true)  
// identity<Cat>({{}})    
///////////////////////////////////////////////////////////////////////////

function getRandomNumberElement(list: number []): number [] {
   return [];
}
// function getRandomStringElement(list: string []): string []{
//    return[];
// }

function getRandomStringElement2<T>(list: T[]) : T {
  const randIdx = Math.floor(Math.random() * list.length)
  return list[randIdx]
}

console.log(getRandomStringElement2<string>(["a","b","c","d","e"]))

// function getRandomstringElement2<Cat>(list: Cat[]) : Cat {
//     return []
//  }

console.log(getRandomStringElement2(['d','e', 'a','m'])) //without generic pruded same results

console.log(getRandomNumberElement([2,5,4,8,7,9]))

const getRandomStringElement4 = <T>(list: T[]) : T =>  {       //add trailing comma to "T" for jsx
    const randIdx = Math.floor(Math.random() * list.length)
    return list[randIdx]
  }
//////////////////////////////////////////////////////////////////
  function merge<T extends object, U extends object>(obj1:T, obj2:U) {   //genereric with 2 types parameters
    return {                                                            //t,y extends optional
        ...obj1,
        ...obj2
    }
  }
 const combo = merge({name: "jay"}, {pets:["Lee", "Paw"]});
  console.log(combo)

  console.log(merge({name: "jay"}, {num: 9}));      //merges any objec {}
///////////////////////////////////////////////////////////////////////////////////
  interface Lengthy {
    length: number;
  }

  function print<T extends Lengthy>(thing: T): number {
    return thing.length * 2;
  }
//   function print(thing: Lengthy): number {          alternate code without generic
//     return thing.length * 2;
//   }

  print("hello World!")


  function makeEmptyArray<T = number> (): T[] {
    return [];
  }

  const number2 = makeEmptyArray();
/////////////////////////////////////////////////////////

interface Song {
    title:string;
    artist:string;
}
interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class PlayList<T> {
  public queue: T[] = [];
  add(el: T){
    this.queue.push(el)
  }
}
 const songs = new PlayList<Song>()
 const videos = new PlayList<Video>()


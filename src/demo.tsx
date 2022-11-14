// function getRandomStringElement2<T>(list: T[]) : T {
//     const randIdx = Math.floor(Math.random() * list.length)
//     return list[randIdx]
//   }
  

const getRandomStringElement3 = <T,>(list: T[]) : T =>  {       //add trailing comma to "T" for jsx
    const randIdx = Math.floor(Math.random() * list.length)
    return list[randIdx]
  }
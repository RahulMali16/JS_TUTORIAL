let newArr = [1,2,34,5,"true","histesh"];
//indexing start hoti h zero se

// resizable // mixed datatype ho sakte h 

console.log(newArr[0]);

// array jo h wo shallow copy banatha h shallow copy is a copys whose property shares the same reference point.
// deep copy donot share the same reference point.

const myHeroes = ["shaktimaan", "nagaarjuna"];

const arr = new Array(1,2,3,4,5);

console.log(arr[3]);

newArr.push(6);

// piche se dd hoga and piche se hi pop hoga
console.log(newArr)

newArr.pop();
console.log(newArr)

newArr.unshift(9);
console.log(newArr)

// inserted at the start problem is saari value ko shift karna pada

newArr.shift()
console.log(newArr)


console.log(newArr.includes(9));//boolean will be the output


let newArr1 = newArr.join();  
// it will convert the datatype to the string formate;
console.log(newArr1);
console.log(typeof newArr1);

// slice , splice

console.log("A ", newArr);

const myn1 = newArr.slice(1,3);
console.log(myn1);
console.log("B ", newArr);

// 1 index se start karna h but 3 ko include nahi karna h and three tk jana h


const myn2 = newArr.splice(1,3);
console.log(myn2);
console.log("C ", newArr);

// splice ye 1 se start hoga and ye include karega 3 ko wo array nikal ke 
//myn2 me daal dega but ye modify kar dega prev array ko usme jo banya h wo hata dega


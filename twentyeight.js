const coding = [1,2,3,4,5,6];
// const value  = coding.forEach((items)=>{
//     console.log(items);
// })

// console.log(value) //undefined jo ki apan kuch karwa nahi sakte particular se

// filter bhai

// return kar deta h kuch condition ke sath

const newNUM = coding.filter((items) => //items>48 {
    //jab curl braces h toh return likhna h} 
    {
        return items>4
} )

console.log(newNUM)


// map function 


const num1 = [1,2,3,4,5,6,7,8,9]

const newNUM1 = num1.map((num)=> num +10)
;console.log(newNUM1);

//channing 

// do map laga sakte h ek jo hoga wo pehle wali ki value lega

const nayanum = num1.map((num)=> num*10).map((num)=>num>31);
console.log(nayanum);


//reduce js
//mpmc ke accumelator jaise chalta h
const naya = [1,2,3];
let initial = 0;
const total = naya.reduce((acc,val) => {
    console.log(`the acc ${acc} , and val is ${val}`)
    return acc+val} , initial)
console.log(total);
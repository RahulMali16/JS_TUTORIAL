//control flow
if(true){
    // ye execute hoga

}

// === "type bhi  check akrta h"

// short hand notation/

const balance =1000 ;

// if(balance>500) console.log("test"),

//switch case
const month = 3 ;

switch (month) {
    case 1:
        console.log("1");
        break;

        case 2:
            console.log("2");
        
        break;
        case 3:
        console.log("3");

        
        break;
        //agar brak nahi hota toh jaha match ho jaye waha se sara code run hojata h except default

        case 4:
        console.log("4");

        
        break;

    default:
        break;
}


// false values

false,0 ,-0, BigInt , 0n,"",null,undefined,NaN


// // truthy value /
// "0" , 'false," ", [],{},function(){

// }.

// Nullish Coalescing operator(??): null undefined
let val1 ;
// val1 = undefined ?? 10
// val1  = null ?? 2 // 
//agar null ya undefined aya toh nahi chalega
// next value aaega

val1 = 5 ?? 10;
console.log(val1);

// conditon ? ture: false/
1>=2 ? console.log("yes"): console.log("no")
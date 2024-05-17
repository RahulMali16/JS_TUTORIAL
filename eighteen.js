function Calculate(num , num3 ,...num1){// rest operator
    return num1;

}

console.log(Calculate(200,400,5000000,1223));

const user = {
    username : " rahul",
    price: 199

}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleobject(user);
// alternate tarikha 

handleobject({
    username:"sam",

    price:399 
})



const myarr = [200,2000,303023,320]

function returnsecondvalue(getarr){
    return getarr[1];
}

console.log(returnsecondvalue(myarr));
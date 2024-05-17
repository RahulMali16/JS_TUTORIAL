//FOREACH LOOP

const coding = [ "js", "ruby" , "java0", 'python']

coding.forEach(function (items){
console.log(items);
})

coding.forEach( (items) => {
      console.log(items)
})



function printMe(items){
    console.log(items);
    // 
}

// forEACH ME REFERENCE DENA H APAN KO PRINTING KA KAAM WO KHUD KAR DEGA



coding.forEach(printMe);

coding.forEach( (items, index, arr) =>{
      console.log(items,index,arr);
})


const mycoding = [ 
    {
        lang : "hindi",
        price : "1212"
    },
    {
        lang : "englsin",
        price : "121"
    },
    {
        lang : "urdu",
        price : "12"
    }
]

mycoding.forEach((items)=>{
    console.log(items.lang)
})
//dom

// for page manipulation
document.getElementById('title');
document.getElementById('title').getAttribute('id') // it ll be more like class and all

const title = document.getElementById('title'); 


title.style.backgroundColor = "black" // we can edit the style like this
// title.textContent // will give the text content in the id given by the title
// title.innerHTML
// title.innerText

// title.textContent /will only give the shown data but inner textcontent will give all data despite of diplay none data
// innerHTML me sara html aajata jo bho likha h

const toconvert = document.getElementsByClassName('classnamejo bhi h')//
//ye htmlcollection deta h - isko convert kardeta h array mme
// ye kaise karenege Array.from(toconvert)

document.querySelector('h1') // ye first h1 select kar ke de dega

document.querySelector('#id');
document.querySelector('.class');
document.querySelector('input[type:password]');

const hi = document.querySelectorAll('li') //hamesha nodelist dega
// //it will be nodelist
//sbake liiye karna h toh foreach use kar sakte h

// isko aise nahi kar skate hi.style.backgroundColor = 'black';
// hi[0].style.color = "black ye sahi h"



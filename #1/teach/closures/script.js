// closures kya hote hai - functions kis parent function ke andar ho aur andar wala function return ho raha ho ,and returning function use kare , parent function ka koi variable use karen 


function parent(){
    let parentKaVariable = 12;
    return function returningFunction(){
        console.log(parentKaVariable);
    }
}
// is puri chij ko closure kehete hai 
// ha hai toh itna halla kyo 
let fnc = parent() // functio ko chalaya yaha par toh memory stack ye aaya function - excution context bana - isne return kiya hoga ek function 

fnc();// output : 12 

// par functon parent jab khatam ho gaya toh a k bhi khatm ho jana chahiye tha toh a ko print nahi hona chahiye tha 

// ye sach baat hai ki function ke khatam hone par uske variables khatam ho jate hai , par jab bhi closure banta hai toh aap ke function aur uske variables ka ek backlink banaya jata hai aur uska naam hota hai [[environment]]

// matlab function ke variables ko backlink ke vajah se store kar ke rakhta hai - phir  agar aap ke pass uksi copy hai toh aap uske variables ko save kar sakte ho 

// jab bhi ek closure banta hai uska ek backlink banaya jata hai uskna ka naam square bracket square environment

// use kaha hota hai 
function count(){
     let c = 0;
    return function(){
        c++;
        console.log(c);
    } 
}

let ans = count() // par ye toh chala nahi na - ab aaye point par 
// count ko ek variable mein save kar sakte hai 
// closures mein paheli baar chalane par ek function aata hai 
// dusri baar chalane par karykram chalta huva dikhega 
ans() // output : 1
ans() // output : 2
ans() // output : 3
ans() // output : 4

let ans2 = count()
// galat ❌
ans2() // output : 5 
ans2() // output : 6
ans2() // output : 7

// sahi ✅
ans2() // output : 1 
ans2() // output : 2
ans2() // output : 3
ans2() // output : 4
ans2() // output : 5

// jah bhi parent function chalayenge naye variables bante hai 

// ans() - ke pass apna khud ka c hai 
// ans2() - ke pass apna khud ka c hai 

// par yaha closure toh likha hi nahi hai na 
// arey bhai aisa function jo ki return kare ek aur function and jo returning function parent function ka variable use kar rahe hai - isi ko hi toh closures bolte hai 

// is concept ko hi bolte hai - closures 

// VARIABLE KO PRIVATE BANANA

// fayde : 
// variable ko private kar sakte hai 
// global pollution ko rok sakte hai
  
// Fuuuhhh..☺️
// this keyword - special keyword hai -- kyo ki baki saare keyword ki value ya unka nature same raheta hai this ki value ya nature badal jata hai is baat se ki app use kaha use kar rahe ho

// global scope 
console.log(this);// window
// ab ye window kya hai pradhan mantri - supreme


// function scope
function abcd(){
    console.log(this);// window
}


// method scope
let obj = {
    name:"shivam",
    sayName:function(){
        console.log(this);
    }
}

// agar galti se tumne method mein normal function ke jagah arrow function likh diya - this keyword ki jagah value loose karke object nahi window ho jayega

// agar object ke andar method ke andar ek aur function to this phir se value loose karke window ban jayega 
// agar object ke andar method ke andar function bana kar this ki value ko loose nahi hone dena hai toh normal function ki jagah arrow function banao  

// in obj , sayName ye ek method hai - aisa function jo ki object ke andar ho use hum object kehete hai
// method ke andar this ki value pura object ho jata hai 


//event handler 
document.querySelector('h1').addEventListener('click',function(){
   console.log(this); // hamesha add event listner pe this vahi hoga jispe add event listner laga huva ho
})


// quick - note 📝
// ----------------
// global - window 
// function - window
// method with esr5 function - object
// method with es6 arrow func - window
// exs5 func inside es5 method - window
// arrow func inside es5 method - object 
// event handler - element 
// class blank object 


// is chij se full farak padta hai ki aap ne arrow function kaha banaya hai 
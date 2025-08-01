function abcd(){
    var a = 12;// a ka var se jo banaya gaya haia vo function ke andar hi jana ja sakta hai function ke bahar nahi use kar sakte 
}
console.log(a);

// scopes - functional scope , global scope and block scope 

// functional scope kya hota hai  - ki vo chij function ke andar hi use ho sakti hai 
function abc(){
    let x = 12; // ye sirf function ke andar hi use ho sakta hai 
}

// global scope kya hai - pure code ke kahi bhi use ho sakti hai 
var z = 23; // ye global scope hai pure is code mein kahi bhi use ho sakta hai
// agar aap ka code kisi bhi braces ke andar  nahi hai global hai


// block scope - {} akele nahi function ke saath curly braces mein hi use ho sakti hai 
{
    let y = 12;// block scope hai is brades ke andar hi use ho sakta hai 
}

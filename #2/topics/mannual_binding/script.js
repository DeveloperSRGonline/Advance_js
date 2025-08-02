// this call , apply , binding
// function ko call karte waqt aap set kar sakte ho ki uski this ki value kya hogi

let obj = {
    name:'shivam',

}

function abcd(a,b,c){
    console.log(this.name,a,b,c);// function ke andar this ki value window hoti hai // output : shivam 
    // a b c mein 1 2 3 chale jayenge and this ki value obj ho jayegi
}

// abcd()// output milega window
abcd.call(obj,1,2,3) // abhi bhi abcd call ho raha hai and ab this ki value // isse confuse nahi hona ki kisko call karenge - hamesha function hi call hota hai  

// apply parameter kaheta hai ki app ek se jyada paremeter bhejoge toh app do parameter bhej rahe ho
// pahela wala hai obj dusra aap ki saari values array ke andar 
// abcd.apply(obj,[1,2,3])

// abcd.bind(obj,1,2,3) - ismei array nahi likhte 

let fnc = abcd.bind(obj,1,2,3)// jaise call and apply chalta deta hai abcd ko vaise bind nahi chalata ye ek function ki copy banadeta hai 
fnc() // ab fnc ki value kya hai obj toh obj mil jayega 



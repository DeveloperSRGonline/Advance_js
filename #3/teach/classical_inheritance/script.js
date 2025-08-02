// classical inheritance - java , cpp
// classes banana and unhe extend kardena 

// inheritance - class se inherite karna (ek class dusre class se kuchh leti hai)
// prototypal inheritance - ye sirf javascript mein hoti hai - object se object inherite karta hai 

let coffee = {
    color:'dark',
    drink:function(){
        console.log('gut gut gut');
    }
};

let arebiataCoffee = Object.create(coffee) // ye chij kya karta hai is object ko coffee object ke saath jod deta hai
console.log(arebiataCoffee);  
// jo coffee hai ye arebiataCoffee ka as a prototype ban gaya hai


// Defination : ek object hai app chaho to uski saari props/methods ko inherit kara dete ho dusre object mein 

// let a = {}
// let b = Object.create(a)// a mein jo jo hoga vo sab b ke pass hai b ke prototype mein a hai // is case mein shared hoti hai

// aisa kyo nahi kiya 

let a = {}
let b = {...a}// a ki hard copy b mein   
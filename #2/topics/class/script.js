class Abcd{
    // a = 12;  var let ka use nahi kar sakte 
    constructor(){
        console.log('hey');
        this.a = 12;
    }
}

let val = new Abcd(); // jab bhi hum abcd ko new ke saath call karenge  - new kya karta hai ek blank object bana dega hai 
// jaha jaha this likha hoga vaha vaha blank object aa jayega and use this. ke baad jo likha hia vo us object ke andar aa jayega 
// classes mein hamesha blank object hota hai this keyword yane
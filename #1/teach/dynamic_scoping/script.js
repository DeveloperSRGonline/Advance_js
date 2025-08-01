// dynamic scoping -> kaha se call kar rahe ho uspe depend karega ki kya value milegi
// ye js mein exist nahi karta 

let a = 12;
function abcd(){
    console.log(a);
}

function efg(){
    let a = 13;
    abcd() // agar js dynamically scoped hoti toh abcd() kaha present hai efg ke andar so abcd chalne ke baad console.log(a) mein kya print ho jata 13 but 12 hoga 
}

efg()

// kaha pe create kiya ho and vo kya kya excess kar sakta hai uspar depend karta hai 
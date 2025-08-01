// js-lexical scope : aap js mein physically ki position par avaliable ho uspar depend karta hai ki aap kya access kar sakte ho


function abcd(){
    let a = 12; // lexically means physically kaha par present hai line number 5 par inside abcd() function so ye abcd() ke andar is ka lexical yane physically present hai yane ye pure function me kahi bhi access ho sakta hai 
    function efg(){
        console.log(a);
    }
}
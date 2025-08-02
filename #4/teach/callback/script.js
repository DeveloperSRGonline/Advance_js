function kuchhDerBaadChalunga(val){
    setTimeout(() => {
        val()
    }, (Math.floor(Math.random()*10)*1000))
}

kuchhDerBaadChalunga(function(){
    console.log('Hey!');
})

// ek function ko bhej de rahe ho parameter mein , to vo parameter wala function kahela ta hai - callback 
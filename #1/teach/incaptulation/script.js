// Invaptulation - inner logic hide karna and un chijo par focus karna jin chijo ki jarurat hai 

// example hai 
function clickLimiter(){
    let click = 0;
    return function(){
         click++;
         if(click < 5){
            console.log(`clicked : ${click} times`);
         }else{
            console.log('Limit exceeded!');
         }
    }
}
let fnc = clickLimiter()// click limiter ek function return karega use hum fnc mein save kar lete hai 
fnc() // output : clicked 1
fnc() // output : clicked 2
fnc() // output : clicked 3
fnc() // output : clicked 4
fnc() // output : clicked 5
fnc() // output : limit exceeded!

// jo click variable hai vo private variable hai usko hum bahar se directly access ya modify nahi kar sakte hai 

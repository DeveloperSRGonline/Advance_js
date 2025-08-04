// promises 

// aap ka promise banate ho jo ki do states mein se ek state mein se ek state mein se hota hai and wo yaa to resolve hoga ya to regect hoga ab wo kya hoga ye to waqt batayega par hamein do no ke liye code likha padta hai 

let  pr = new Promise(function(res,rej){
    setTimeout(() => {
        let rn = Math.floor(Math.random()*10)
        if(rn>5){
            res(`resolved with :  ${rn} `)
        }else{
            rej(`rejected with :  ${rn} `)
        }
    }, 3000);
})
.then(function(val){
    console.log(val);
}).catch(function(val){
    console.log(val);
})

// pr ki tin state ho sakti hai res, rej , pending 
// is mein do state ho sakti hai res ya rej 
// resolve huva toh "then" chalega 
// reject huva toh "catch" chalega 

// let  pr = new Promise(function(res,rej){
//     setTimeout(() => {
//         let rn = Math.floor(Math.random()*10)
//         if(rn>5){
//             res(`resolved with :  ${rn} `)
//         }else{
//             rej(`rejected with :  ${rn} `)
//         }
//     }, 3000);
// })

// async function abcd() {
//     try{
//         let val = await pr
//         console.log("try chala : ",val);
//     }catch(err){
//         console.log("catch chala : ",err);
//     }
// }

// abcd()

// async await keheta hai async ke andar ke code ko try and catch mein rakho 
// agar resolve huva toh try ka code cafi hota hai and if rej huva toh catch ka code chalta hai 

//  pr yane promise ye future mein kabhi chalega 
// toh hum ek function banate hai and uske upar async chip kate hai 
// value ka pehele await likhte hai 
// agar uska ans val mein aa jayega agar pr reject huva toh err mei aayega and catch chalega , try ke andar likhte hai pura await wala agar await wale mein kuchh issue aa gaye toh catch wala chalega 

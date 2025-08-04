// fetch api  - data ko manga sakte hai kisi url se
// json - javascript object notation - bilkul object ki tarah hota hai bas dono taraf double quote 

// js mein inbuild function hai fetch ismei koi url likh sakte ho - ye kya karta hai us url pe jata hai and data lekar aata hai 
// fetch kyo ki promise based hai - toh isko use karne ke do tarike hai 
// jab bhi fetch resolve hoga tab .then chalega and reject huva toh .catch chalega 
// fetch('')
// .then(function(rawData){
//     console.log(rawData);
// }).catch(function(err){
//     console.log(err);
// })

// fetch('https://randomuser.me/api/')
// .then((rawData)=>{
//    return rawData.json
// })
// .then(data => {
//     console.log(data);
// })
// .catch((err)=>{
//     console.log(err);
// })
// fetch karne par do data milta hai use read karne ke liye json mein conver karna padta hai - rawData readable nahi hai and use hamein pahele .then mein return karna padta hai and durse then mein data milta hai 

fetch('https://randomuser.me/api/')
.then((rawData)=>rawData.json())// implicit return
.then(data => console.log(data.results[0].name))

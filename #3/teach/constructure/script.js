// constructure

// function CreateBiscuits(name , price ,qty,company,category){
//     this.name = name // function mein by default this window hota hai
//     this.price = price;
//     this.qty = qty;
//     this.company = company;
//     this.category = category;
// }

// let biscuit1 = new CreateBiscuits('Oreo',10,5,'Cadbury','choclate Biscuit')// biscuit1 ek object hai uske andar vahi sab hai jo CreateBiscuits ke andar hai

// apne kuchh aisa bana diya hai jisko use kar ke aap baar baar kuchh bana sakte ho ismein vo details hogi jo us object mein hogi

// hamein sikhna hai factories banana - ek baarblueprint ki har object kaise dikhega and hum naye naye objects with different values bana paayenge,  bas iske baare mein hai OOP (lagbhag)

// function CreatePencil(name, price, color) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
// }

// CreatePencil.prototype.write = function (text) {
//   // wtite ek method hai
//   let h1 = document.createElement("h1");
//   h1.textContent = text;
//   h1.style.color = this.color;
//   document.body.append(h1);
// };
// CreatePencil.prototype.company = "sheryians";

// let pencil1 = new CreatePencil("Natraj", 10, "black");
// let pencil2 = new CreatePencil("d-write", 20, "greenyellow");

// new lagane se ek naya object ban jata hai and jo createpencil object mein jo this hai vo jo blank object banega this se vo yaha par rahega
// and yaha pencil1 mein pura object return ho jayega

// but function ke andar this is value window hoti hai but aapne abh new lagaya hai is liye this is value new blank object hogi

// this.property = value - jo bhi new blank object banege uske property set hogi respective to createPencil

// pencil1 ke pass apna khud ka price color hoga and
// pencil2 ke pass apna khud ka price color hoga

// kuch chije aise hoti ha jo khud ki ho ya na ho use farak nahi padta
// jab aap ye mante ho ki company

class CreatePencil {
  // first word capital
  constructor(name, company, price, color) {
    this.name = name;
    this.company = company;
    this.price = price;
    this.color = color;
  }
  // write naam ki method banate hai
  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);
  }
  // erase method hai jo ki document se sare element hata dega hai
  erase() {
    // sabhi h1 ko select karke nodelist (array) jaisa structure banayega and us nodelist par foreach chalake un element ko har rahe hai
    // document.querySelectorAll('h1').forEach(function(elem){
    //     elem.remove();
    // })

    document.querySelectorAll("h1").forEach((elem) => {
      if (elem.style.color === this.color) {
        elem.remove();
      }
    });
  }
}
// new createpencil se constructor chalta hai
let p1 = new CreatePencil("natraj", "natraj", 10, "black");
let p2 = new CreatePencil("apsara", "apsara", 15, "blue");

// this how oop work hum kahi bhi kuchh bhi na likha hai properly likha hai kaha ka code jo pencil hai uska khud ka construdture method hai

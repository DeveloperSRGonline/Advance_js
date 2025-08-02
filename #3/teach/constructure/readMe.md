
# 🖊️ JavaScript Constructor Function: `CreatePencil`

## 📘 What is a Constructor Function?

A constructor function is a special type of function in JavaScript used to create multiple **objects** with the same structure but **different values**.

It's like a **blueprint** 🏗️ for creating objects.

---

## 📦 Constructor Example: `CreatePencil`

```js
function CreatePencil(name, price, color, company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    this.write = function(text) {
        let h1 = document.createElement('h1');
        h1.textContent = text;
        h1.style.color = color;
        document.body.append(h1);
    }
}

let pencil1 = new CreatePencil('Natraj', 10, 'black', 'natraj');
let pencil2 = new CreatePencil('d-write', 20, 'greenyellow', 'doms');
```

---

## 🧠 Explanation

- `new CreatePencil(...)` creates a **new blank object**.
- Inside the constructor, `this` refers to that **new object**.
- Properties like `name`, `price`, etc., are **assigned** to `this`.
- `this.write` is a **method** that dynamically creates an `<h1>` element and appends it to the `document.body`.
- `textContent` is the text passed while calling `write(text)`.
- `h1.style.color = color` sets the color from the object's color property.

---

## 🔁 Reusability

Using this constructor, you can create any number of pencil objects with different data:

```js
let pencil3 = new CreatePencil('Apsara', 15, 'blue', 'Apsara');
pencil3.write('This is Apsara pencil');
```

---

## 🧾 Notes

- By default, `this` inside a function refers to the `window` object.
- But when using `new`, `this` refers to a **newly created object**.
- The constructor function returns this new object implicitly.

---

## ✅ Summary

- Constructor functions allow **object creation templates**.
- `new` keyword is key to creating new instances.
- Methods like `write()` can act on specific object data.

---

👨‍💻 Use this as a foundation to explore **OOP concepts** in JavaScript like prototypes, inheritance, and ES6 classes.

Happy coding! 🚀

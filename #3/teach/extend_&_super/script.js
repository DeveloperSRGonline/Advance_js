class User {
  // har use ke pass naam ,address,username,email,role
  constructor(name, address, username, email, role) {
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = role;
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = `${this.name} : ${text}`;
    document.body.appendChild(h1)
  }
}

let user1 = new User("shivam", "bhopal", "async123", "hey@heyhey.com");
let user2 = new User("shiv", "karanja", "shiv123", "hey@eeehey.com");

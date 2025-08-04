function getUser(){
    fetch("https://randomuser.me/api/?results=3")
  .then((raw) => raw.json())
  .then((data) => {
    data.results.forEach(function (user) {
      const card = document.createElement("div");
      card.className = "bg-gray-800 rounded shadow-lg p-6 max-w-sm w-full";

      //Inner container
      const innerFlex = document.createElement("div");
      innerFlex.className = "flex items-center space-x-4";

      //Avatar Image
      const avatar = document.createElement('img')
      avatar.className = "w-16 h-16 rounded-full object-cover border-2 border-gray-700"
      avatar.src = user.picture.large
      avatar.alt = "User avatar"

      //Text Container
      const textContainer = document.createElement('div')

      //Name
      const name = document.createElement('h2')
      name.className = 'text-xl font-semibold text-gray-100'
      name.textContent = user.name.first + " " + user.name.last;

      //Email
      const email = document.createElement('p')
      email.className = 'text-gray-400'
      email.textContent = user.email

      textContainer.appendChild(name)
      textContainer.appendChild(email)

      innerFlex.appendChild(avatar)
      innerFlex.appendChild(textContainer)

      card.appendChild(innerFlex)

      document.querySelector('.users').appendChild(card)
    });
  });

}
getUser()


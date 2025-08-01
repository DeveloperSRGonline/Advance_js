// toster

function createToster(config){
    return function(notification){
      let div = document.createElement("div")
      div.className = `fixed ${config.theme === 'dark' ? "bg-black text-white" : "bg-white text-black"} px-6 py-3 rounded shadow-lg pointer-events-none z-50 flex items-center space-x-2 rounded ${config.positionX === 'right' ? 'right-10' : 'left-10'} ${config.positionY === 'top' ? 'top-10' : 'bottom-10'}`
      div.textContent = notification;
      document.body.append(parent)

      setTimeout(() => {
            document.body.removeChild(div)
      }, config.duration * 1000);
    }
}


let toster = createToster({
     positionX:'right',
     positionY:'bottom',
     theme:"dark",
     duration:3,
})

toster("This is a dummy notification!")
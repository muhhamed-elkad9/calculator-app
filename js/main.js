let slider = document.querySelector("input");
let body = document.querySelector("body")

slider.oninput = function() {
  if (this.value <= 3) {
		body.classList.replace("ThemeTwo", "ThemeOne")
		body.classList.replace("ThemeThree", "ThemeOne")
  }
  if (this.value >= 47 && this.value <= 53) {
		body.classList.replace("ThemeOne", "ThemeTwo")
		body.classList.replace("ThemeThree", "ThemeTwo")
  }
  if (this.value >= 97) {
		body.classList.replace("ThemeOne", "ThemeThree")
		body.classList.replace("ThemeTwo", "ThemeThree")
  }
};



let screen = document.querySelector(".screen .text-sc");
let reset = document.querySelector(".reset")
let del = document.querySelector(".del")
let equal = document.querySelector(".red")
let keys = document.querySelectorAll(".key")

keys.forEach((key) => {
  key.onclick = function () {
    if (screen.textContent == "0") {
      screen.textContent = "";
    }
    screen.textContent += key.textContent
  }
})

reset.onclick = function () {
  screen.textContent = "0"
}

del.onclick = function () {
  if (screen.textContent == "0") {
    return preventDefault()
  }
  if ((screen.textContent).length < 2) {
    screen.textContent = "0"
  } 
  else {
    screen.textContent = (screen.textContent).slice(0, (screen.textContent).length - 1)
  }
}

equal.onclick = function () {
  screen.textContent = eval(screen.textContent)
}



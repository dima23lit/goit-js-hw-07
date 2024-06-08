const btn = document.querySelector(".change-color")
const spanButton = document.querySelector(".color")
const bodyChange = document.querySelector("body")

btn.addEventListener('click', changeCol)

function changeCol() {
  bodyChange.style.backgroundColor = getRandomHexColor()
  const rgbColor = Array.from(bodyChange.style.cssText).splice(18).join("")
  spanButton.textContent = rgbColor
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}
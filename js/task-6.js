const controls = document.querySelector("#controls")
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
createBtn.dataset.action = "create";
destroyBtn.dataset.action = "destroy";
const onInput = controls.firstElementChild
const boxes = document.querySelector("#boxes")

createBtn.addEventListener("click", createButton)
destroyBtn.addEventListener("click", destroyButton)

function createButton() {
  if (Number(onInput.value.trim() < Number(onInput.min.trim())) || Number(onInput.value.trim() > Number(onInput.max.trim()))) {
    alert ("Please enter number from 1 to 100")
  } else {
    createBoxes(Number(onInput.value.trim()))
  }
}

function destroyButton() {
  const removeClass = document.querySelectorAll('.remove')
  for( let i = 0; i < removeClass.length; i++ ){
  removeClass[i].outerHTML = "";
}
  onInput.value = ""
}


function createBoxes(amount) {
  let hw = 30;
  let arrayOfBox = [];
  for (let i = 0; i < amount; i++) {
    let div = `<div class="remove" style="display: block; margin-top: 20px; margin-bottom: 20px; margin-right: 20px; background-color: ${getRandomHexColor()}; width: ${hw}px; height: ${hw}px;"></div>`
    hw += 10;
    arrayOfBox.push(div)
    destroyButton()
  }
  boxes.insertAdjacentHTML("afterbegin", arrayOfBox.join(""))
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
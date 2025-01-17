const btnChangeColor = document.querySelector('.change-color');
const body = document.querySelector('body');
const spanColor = document.querySelector('.color');

function changeColor() {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
    spanColor.textContent = color;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

btnChangeColor.addEventListener('click', changeColor);

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
    boxes.innerHTML = '';

    const amount = input.value;
    if (amount < 1 || amount > 100) {
        return;
    }

    const elements = [];
    for (let i = 0; i < amount; i += 1) {
        const div = document.createElement('div');
        div.style.width = `${30 + i * 10}px`;
        div.style.height = `${30 + i * 10}px`;
        div.style.backgroundColor = getRandomHexColor();
        elements.push(div);
    }

    boxes.append(...elements);
    input.value = '';
}

function destroyBoxes() {
    boxes.innerHTML = '';
    input.value = '';
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

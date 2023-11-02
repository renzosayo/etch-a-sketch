
const divContainer = document.querySelector('.container');
const divContainerCSS = getComputedStyle(divContainer);
const divContainerSize = divContainerCSS.width.slice(0, -2);
const sizeChanger = document.querySelector('.size-changer');

sizeChanger.addEventListener('click', getInputNewSize);

function createGrid(gridSize) {

    removeAllChildren(divContainer);

    for(let heightCounter = 0; heightCounter < gridSize; heightCounter++) {
        for(let widthCounter = 0; widthCounter < gridSize; widthCounter++) {

            const grid = document.createElement('div');
            
            grid.style.height = `${divContainerSize / gridSize}px`;
            grid.style.width = `${divContainerSize / gridSize}px`;

            grid.classList.add('grid');

            grid.addEventListener('mouseenter', (e) => {
                grid.classList.add('hover');
            });

            divContainer.appendChild(grid);
        }
    }
}

function getInputNewSize() {
    let newSize = 0;
    let keepGoing = true;

    while(keepGoing){
        let userInput = prompt("Please input new size. (Max. 100)");

        if(!userInput || userInput > 100 || userInput < 1) {
            continue;
        } else {
            newSize = userInput;
            createGrid(newSize);
            break;
        }
    }
}

function removeAllChildren(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

createGrid(16);

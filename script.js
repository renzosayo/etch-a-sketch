
const divContainer = document.querySelector('.container');

function createGrid() {
    for(let heightCounter = 0; heightCounter <= 15; heightCounter++) {
        for(let widthCounter = 0; widthCounter <= 15; widthCounter++) {
            const grid = document.createElement('div');

            grid.classList.add('grid');

            grid.addEventListener('mouseenter', (e) => {
                grid.classList.add('hover');
            });

            divContainer.appendChild(grid);
        }
    }

    const sizeChanger = document.querySelector('.size-changer');
    sizeChanger.addEventListener('click', changeSize);

}

function changeSize() {

}

createGrid();
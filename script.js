const grid = document.querySelector('.grid');
const gridButtons = document.querySelectorAll('.gridButtons button');
const buttonReset = document.querySelector('button[name="reset"]');
const buttonMonochrome = document.querySelector('button[name="monochrome"]');
const buttonRouge = document.querySelector('button[name="rouge"]');
let cellSize;

// Grid Styles
grid.style.display = 'flex';
grid.style.flexWrap = 'wrap';
grid.style.width = '401px'; 
grid.style.height = '401px'; 
// To avoid double borders in the grid
grid.style.borderLeft = '1px solid #909090';
grid.style.borderTop = '1px solid #909090';



gridButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.name === 'custom') {
            const customCellsPerSide = prompt("Enter the number of cells per side for the custom grid:", "10");
            if (customCellsPerSide) {
                initiateGrid(parseInt(customCellsPerSide, 10));
            }
        } else {
            initiateGrid(parseInt(button.name, 10));
        }
    });
});


document.addEventListener("DOMContentLoaded", ()=>{
    const colour = "#000000"
    initiateGrid(16, colour);
});

function initiateGrid(cellsPerSide, colour) {
    const gridSize = 400;
    const cellSize = gridSize/cellsPerSide;
    gridArea = cellsPerSide * cellsPerSide;

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    
    for (let i=0; i < gridArea; i++) {
        const gridCell = document.createElement('div');
        createCell(gridCell, cellSize);
        grid.appendChild(gridCell);
    }

    mouseOverEvent(colour);
}

// Grid Cell Styles
function createCell(gridCell, cellSize){
    gridCell.style.width = `${cellSize}px`;
    gridCell.style.height = `${cellSize}px`;
    // To avoid double borders in the grid
    gridCell.style.borderRight = '1px solid #909090';
    gridCell.style.borderBottom = '1px solid #909090';
}

// Mouseover grid cells
function mouseOverEvent (colour) {
    const allGridCells = document.querySelectorAll('.grid > div');
    for (const gridCell of allGridCells) {
        gridCell.addEventListener("mouseover", ()=>{
            gridCell.style.backgroundColor = colour
        })
    }
}

//ClearGrid
buttonReset.addEventListener("click", clearGrid)
function clearGrid() {
    const allGridCells = document.querySelectorAll('.grid > div');
    for (const gridCell of allGridCells){
            gridCell.style.backgroundColor = ''
        }
    }

buttonMonochrome.addEventListener("click", ()=>{
    clearGrid();
    const monochromeColour = "#000000"
    mouseOverEvent(monochromeColour)
});

buttonRouge.addEventListener("click", ()=>{
    clearGrid();
    const rougeColour = "#a20000"
    mouseOverEvent(rougeColour)
});
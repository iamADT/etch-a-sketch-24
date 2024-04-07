const grid = document.querySelector('.grid');
const gridSize = 400;
let cellSize = 16;

// Grid Styles
grid.style.display = 'flex';
grid.style.flexWrap = 'wrap';
grid.style.width = '401px'; 
grid.style.height = '401px'; 
// To avoid double borders in the grid
grid.style.borderLeft = '1px solid #909090';
grid.style.borderTop = '1px solid #909090';


// Grid Cell Styles
function createCell(gridCell, cellSize){
    gridCell.style.width = `${cellSize}px`;
    gridCell.style.height = `${cellSize}px`;
    // To avoid double borders in the grid
    gridCell.style.borderRight = '1px solid #909090';
    gridCell.style.borderBottom = '1px solid #909090';
}

const cellsPerSide = gridSize/cellSize;
gridArea = cellsPerSide * cellsPerSide;

for (let i=0; i < gridArea; i++) {
    const gridCell = document.createElement('div');
    createCell(gridCell, cellSize);
    grid.appendChild(gridCell);
}

// Mouse over grid cells
const allGridCells = document.querySelectorAll('.grid > div');;
for (const gridCell of allGridCells) {
    gridCell.addEventListener("mouseover", ()=>{
        gridCell.style.backgroundColor = '#000000'
    })
}



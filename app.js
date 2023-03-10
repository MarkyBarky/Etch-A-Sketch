window.onload = () => {
    // Initialize 16x16 grid
    let gridContainer = document.getElementById("grid-container");
    createGrid(gridContainer, 16);

    let newBtn = document.getElementById("new");
    let resetBtn = document.getElementById("reset");
    
    resetBtn.addEventListener('click', () => {
        let cells = document.querySelectorAll(".cell");
        cells.forEach(cell => {
            cell.classList.remove('draw');
        })
    })

    // when click 'clear' button: remove 'draw' class from all cells
    newBtn.addEventListener('click', () => {
        let newSize = prompt("Enter a new grid size 1-100");
        if (!(newSize >= 1 && newSize <= 100)) {
            alert("Please enter a size between 1 and 100");
            return;
        }
        createGrid(gridContainer, newSize)
    });
};

function createGrid(gridContainer, newSize) {
    // clear current grid
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for (let r = 0; r < newSize; r++) {
        let gridRow = document.createElement('div');
        gridRow.classList.add("row");

        for (let c = 0; c < newSize; c++) {
            let gridCell = document.createElement('div');
            gridCell.classList.add("cell");
            gridCell.addEventListener('mouseover', draw);
            gridRow.appendChild(gridCell);
        }

        gridContainer.appendChild(gridRow);
    }
}

// adds class which makes background of cell different colour
function draw() {
    this.classList.add('draw');
}
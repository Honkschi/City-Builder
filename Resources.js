class Resources {
  wood = 0;
  stone = 0;
  iron = 0;

  woodAcc = 0;
  stoneAcc = 0;
  ironAcc = 0;

  updateActiveWoodCells(grid) {
    let countActiveCells = 0;
    for (const cell of grid) {
      if (cell.color === "red") {
        countActiveCells++;
      }
    }
    this.wood = countActiveCells;
  }

  updateActiveStoneCells(grid) {
    let countActiveCells = 0;
    for (const cell of grid) {
      if (cell.color === "red") {
        countActiveCells++;
      }
    }
    this.stone = countActiveCells;
  }

  updateActiveIronCells(grid) {
    let countActiveCells = 0;
    for (const cell of grid) {
      if (cell.color === "red") {
        countActiveCells++;
      }
    }
    this.iron = countActiveCells;
  }
}

export default Resources;

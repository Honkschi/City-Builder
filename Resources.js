class Resources {
  constructor() {
    this.wood = 0;
    this.stone = 0;
    this.iron = 0;

    this.woodAcc = 0;
    this.stoneAcc = 0;
    this.ironAcc = 0;
  }

  updateActiveWoodCells(grid) {
    let countActiveCells = 0;
    for (const cell of grid) {
      if (cell.image) {
        countActiveCells += 1;
      }
    }
    this.woodAcc = countActiveCells;
  }

  updateActiveStoneCells(grid) {
    let countActiveCells = 0;
    for (const cell of grid) {
      if (cell.image) {
        countActiveCells++;
      }
    }
    this.stoneAcc = countActiveCells;
  }

  updateActiveIronCells(grid) {
    let countActiveCells = 0;
    for (const cell of grid) {
      if (cell.image) {
        countActiveCells++;
      }
    }
    this.ironAcc = countActiveCells;
  }
  showEverysing() {
    console.log(this.wood);
    console.log(this.woodAcc);
    console.log(this.stone);
    console.log(this.stoneAcc);
    console.log(this.iron);
    console.log(this.ironAcc);
  }
}

export default Resources;

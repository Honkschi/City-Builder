class Box {
  constructor(x, y, width, height, color, name) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.name = name;
    this.grid = [];
    this.createGrid();
  }

  // Methode, um die Box und das Raster zu zeichnen
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    // Raster zeichnen
    for (let cell of this.grid) {
      this.ctx.strokeStyle = "black";
      this.ctx.strokeRect(cell.x, cell.y, cell.width, cell.height);
      this.ctx.fillStyle = cell.color;
      this.ctx.fillRect(cell.x, cell.y, cell.width, cell.height);
    }
  }

  // Methode, um das Raster zu erstellen
  createGrid(rows = 4, cols = 4) {
    const cellWidth = this.width / cols;
    const cellHeight = this.height / rows;

    // Rasterzellen hinzufügen
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        this.grid.push({
          x: this.x + col * cellWidth,
          y: this.y + row * cellHeight,
          width: cellWidth,
          height: cellHeight,
          color: "blue",
          isSelected: false,
        });
      }
    }
  }

  // Klick-Handling für Raster
  handleClick(mouseX, mouseY) {
    for (let cell of this.grid) {
      if (
        mouseX >= cell.x &&
        mouseX <= cell.x + cell.width &&
        mouseY >= cell.y &&
        mouseY <= cell.y + cell.height
      ) {
        console.log("Clicked on cell at", cell.x, cell.y);
        cell.isSelected = !cell.isSelected;
        if (cell.isSelected) {
          cell.color = "blue";
        } else {
          cell.color = "red";
        }
      }
    }
  }
}

// Externe Datei "klasse.js" importieren
export default Box;
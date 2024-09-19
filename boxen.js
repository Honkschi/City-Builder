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

  // Methode, um das Raster zu erstellen
  createGrid(rows = 4, cols = 4) {
    const cellWidth = this.width / cols;
    const cellHeight = this.height / rows;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        this.grid.push({
          x: this.x + col * cellWidth,
          y: this.y + row * cellHeight,
          width: cellWidth,
          height: cellHeight,
          clicked: false, // Gibt an, ob das Rechteck angeklickt wurde
        });
      }
    }
  }

  // Methode, um die Box und das Raster zu zeichnen
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    // Raster zeichnen
    for (let cell of this.grid) {
      ctx.strokeStyle = "black";
      ctx.strokeRect(cell.x, cell.y, cell.width, cell.height);

      if (cell.clicked) {
        // Wenn ein Rechteck angeklickt wurde, fülle es mit einer Farbe
        ctx.fillStyle = "rgba(0, 255, 0, 0.3)";
        ctx.fillRect(cell.x, cell.y, cell.width, cell.height);
      }
    }
  }
  // Überprüfen, ob ein Klick auf ein Rechteck im Raster erfolgt ist
  handleClick(mouseX, mouseY) {
    for (let cell of this.grid) {
      if (
        mouseX >= cell.x &&
        mouseX <= cell.x + cell.width &&
        mouseY >= cell.y &&
        mouseY <= cell.y + cell.height
      ) {
        cell.clicked = !cell.clicked; // Status umschalten
        
      }
    }
  }
}

export default Box;








































/*
const boxes = [
  {
    x: 250,
    y: 50,
    width: 100,
    height: 100,
    color: "grey",
    dragging: false,
    name: "Stein",
  },
  {
    x: 400,
    y: 50,
    width: 100,
    height: 100,
    color: "red",
    dragging: false,
    name: "Eisen",
  },
  {
    x: 250,
    y: 200,
    width: 100,
    height: 100,
    color: "green",
    dragging: false,
    name: "Holz",
  },
  {
    z: 1,
    x: 400,
    y: 200,
    width: 100,
    height: 100,
    color: "yellow",
    dragging: false,
    name: "Haus",
  },
];

const resources = [
  {
    x: 0,
    y: 0,
    width: 200,
    height: 200,
    color: "lightgray",
    name: "Berg",
  },
  {
    x: 600,
    y: 0,
    width: 200,
    height: 200,
    color: "lightgreen",
    name: "Wald",
  },
  {
    x: 0,
    y: 400,
    width: 200,
    height: 200,
    color: "brown",
    name: "Eisenader",
  },
  {
    x: 600,
    y: 400,
    width: 200,
    height: 200,
    color: "lightblue",
    name: "Wohngebiet",
  },
];
*/

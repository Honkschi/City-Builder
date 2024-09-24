

// Klasse für die importierte Box
class Klasse {
  constructor(ctx, x, y, width, height, color, img, resources, isHouse) {
    this.ctx = ctx; // Canvas-Kontext speichern
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.img = img;
    this.grid = [];
    this.createGrid(); // Beim Erstellen wird das Raster erzeugt
    this.waldImage = new Image()
    this.waldImage.src = this.img
    this.waldImage.onload = () => {console.log("imageLoaded");
    }
    this.cost = {
      wood: 10,
      stone: 5,
      iron: 2,
    }
    this.resources = resources;
    this.isHouse = isHouse;
    /* 10 wood, 5 stone, 2 eisen */
  }

  // Methode, um die Box und das Raster zu zeichnen
  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);

    // Raster zeichnen
    for (let cell of this.grid) {
      if (cell.isSelected) {
        this.ctx.drawImage(cell.image, cell.x, cell.y, cell.width, cell.height)
      } else {
        this.ctx.fillStyle = cell.color;
      this.ctx.fillRect(cell.x, cell.y, cell.width, cell.height);
      this.ctx.strokeStyle = "black";
      this.ctx.strokeRect(cell.x, cell.y, cell.width, cell.height);
      }
      
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
          color:"rgba(0,0,0,0)",
          isSelected: false,
          image: null,
        });
      }
    }
  }

  // Klick-Handling für Raster
  handleClick(mouseX, mouseY) {
    // console.log(this.grid);
    
    // console.log(this.grid.map(cell => cell.color));
    
    for (let cell of this.grid) {
      if (
        mouseX >= cell.x &&
        mouseX <= cell.x + cell.width &&
        mouseY >= cell.y &&
        mouseY <= cell.y + cell.height
        
      ) {
        if (this.isHouse) {
          if (this.resources.wood >= this.cost.wood && this.resources.stone >= this.cost.stone && this.resources.iron >= this.cost.iron) {
          cell.isSelected = !cell.isSelected;
          if (cell.isSelected) {
            cell.color = null;
            cell.image = this.waldImage;
            console.log(cell);
            
            this.resources.wood -= this.cost.wood,
            this.resources.stone -= this.cost.stone,
            this.resources.iron -= this.cost.iron
          } else{
            cell.image = null;
          console.log(cell);
          }
        } else {
          return;
        }
        
        // console.log("Clicked on cell at", cell.x, cell.y);
      } else {
        cell.isSelected = !cell.isSelected;
        if (cell.isSelected) {
          cell.color = null;
          cell.image = this.waldImage;
          console.log(cell);
        }
      }
        
        
      }
    }
  }
}

// Externe Datei "klasse.js" importieren
export default Klasse;

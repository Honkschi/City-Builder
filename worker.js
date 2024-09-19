class Worker {
  constructor(x, y, width, height, color, name) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.name = name;
    this.grid = [];
    
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}

export default Worker;
export default class Worker {
  constructor(x, y, width, height, color, name, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.name = name;
    this.speed = speed; // Geschwindigkeit
    this.target = null; // Ziel der Worker-Box (entweder 'resource' oder 'lager')
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  
  moveTo(targetBox) {
    const targetX = targetBox.x + targetBox.width / 2 - this.width / 2;
    const targetY = targetBox.y + targetBox.height / 2 - this.height / 2;

    const dx = targetX - this.x;
    const dy = targetY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance > 1) {
      this.x += (dx / distance) * this.speed;
      this.y += (dy / distance) * this.speed;
    }
  }
}
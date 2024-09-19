import Box from "./boxen.js";
import Worker from "./worker.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const resources = [
  new Box(0, 0, 200, 200, "lightgrey", "Berg"),
  new Box(600, 0, 200, 200, "lightgreen", "Wald"),
  new Box(0, 400, 200, 200, "brown", "Eisenader"),
  new Box(600, 400, 200, 200, "lightblue", "Wohngebiet"),
  new Box(350, 250, 100, 100, "yellow", "Lager"),
];

const movingBox1 = new Worker(600, 200, 50, 50, "red", "Transport");
const movingBox2 = new Worker(150, 200, 50, 50, "red", "Transport");
const movingBox3 = new Worker(150, 350, 50, 50, "red", "Transport");

let direction = 1; // 1 für Wald -> Lager, -1 für Lager -> Wald
let isDragging = false;
let offsetX, offsetY;

function boxnames(box) {
  // Zeichne die Box
  ctx.fillStyle = box.color;
  ctx.fillRect(box.x, box.y, box.width, box.height);

  // Zeichne den Namen in die Mitte der Box
  ctx.fillStyle = "black"; // Textfarbe
  ctx.font = "16px Arial"; // Schriftart und -größe

  // Berechne die Position für zentrierten Text
  const textX = box.x + box.width / 2 - ctx.measureText(box.name).width / 2;
  const textY = box.y + box.height / 2 + 6; // Vertikale Zentrierung (6 ist ein Schätzwert für die Texthöhe)

  ctx.fillText(box.name, textX, textY); // Text in der Box
}

// Event Listener für Mausklicks hinzufügen
canvas.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const mousePos = getMousePos(canvas, event);
    rect.x = mousePos.x - offsetX;
    rect.y = mousePos.y - offsetY;
    drawRect();
  }
  console.log(isDragging);
  
});

function getMousePos(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
   
  };
}




function draw() {
  // Update funktion
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const box of resources) {
    ctx.fillStyle = box.color;
    ctx.fillRect(box.x, box.y, box.width, box.height);
    boxnames(box);
  }

  // Aktualisiere die Position der bewegenden Box
  if (direction === 1 && movingBox1.x >= 600) {
    direction = -1;
  } else if (direction === -1 && movingBox1.x <= 400) {
    direction = 1;
  }

  movingBox1.x += direction * 1; // Bewege die Box
  movingBox2.x -= direction * 1; // Bewege die Box
  movingBox3.x -= direction * 1; // Bewege die Box

  boxnames(movingBox1);
  boxnames(movingBox2);
  boxnames(movingBox3);
}

console.log(getMousePos.rect);





function animate() {
  
  draw();
  requestAnimationFrame(animate);
}

// Starte die Animation
animate();

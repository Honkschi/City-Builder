import Klasse from "./klasse.js";
import Worker from "./worker.js";
import Lager from "./lager.js";
import Settings from "./settings.js";
import Resources from "./Resources.js";


// Canvas und Kontext initialisieren
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const resources = new Resources();

// Eine Instanz der importierten Box erstellen und den Kontext übergeben
const wald = new Klasse(
  ctx,
  600,
  0,
  200,
  200,
  Settings.colors.wald,
  Settings.imgs.wald,
  resources,
  false
);
const berg = new Klasse(
  ctx,
  0,
  0,
  200,
  200,
  Settings.colors.berg,
  Settings.imgs.berg,
  resources,
  false
);
const eisen = new Klasse(
  ctx,
  0,
  400,
  200,
  200,
  Settings.colors.eisen,
  Settings.imgs.eisen,
  resources,
  false
);
const haus = new Klasse(
  ctx,
  600,
  400,
  200,
  200,
  Settings.colors.haus,
  Settings.imgs.haus,
  resources,
  true
);

const movingBox1 = new Worker(600, 200, 50, 50, "red", "Transport");
const movingBox2 = new Worker(150, 200, 50, 50, "red", "Transport");
const movingBox3 = new Worker(150, 350, 50, 50, "red", "Transport");

const lager = new Lager(350, 250, 100, 100, "yellow", "Lager");



let direction = 1; // 1 für Wald -> Lager, -1 für Lager -> Wald

// Event Listener für Mausklicks hinzufügen
canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  // Überprüfen, ob auf ein Rechteck im Raster geklickt wurde
  berg.handleClick(mouseX, mouseY);
  wald.handleClick(mouseX, mouseY);
  eisen.handleClick(mouseX, mouseY);
  haus.handleClick(mouseX, mouseY);
});

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

// Hauptzeichnungsfunktion
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Canvas löschen

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

  boxnames(lager);

  // Importierte Box und Raster zeichnen

  berg.draw();
  wald.draw();
  eisen.draw();
  haus.draw();
}



setInterval(() => {
  resources.updateActiveWoodCells(wald.grid);
  resources.updateActiveStoneCells(berg.grid);
  resources.updateActiveIronCells(eisen.grid);

  resources.wood += resources.woodAcc;
  resources.stone += resources.stoneAcc;
  resources.iron += resources.ironAcc;

  // updateDisplayResouces();
  // resources.showEverysing();
}, 5000); // Alle 10 Sekunden

function animate() {
  document.getElementById("woodResources").innerText = resources.wood;
  document.getElementById("stoneResources").innerText = resources.stone;
  document.getElementById("ironResources").innerText = resources.iron;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  requestAnimationFrame(animate);
}

// Starte die Animation
animate();

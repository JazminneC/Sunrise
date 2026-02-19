// SEZIONE DATI
// posizione orizzontale del sole
let sunX = 0;  

// altezza dell'orizzonte
let horizon = 250;  

// dimensioni del sole
let sunSize = 80;  

// posizioni alberi
let treePositions = [150, 300, 450];

//SEZIONE DISEGNO
function setup() {
  createCanvas(600, 400); // crea la tela su cui disegnare
}

function draw() {
  // cielo azzurro
  background(135, 206, 235);  
  
  // movimento del sole
  sunX += 2;
  if (sunX > width + 50) {  // se il sole esce dal lato destro ricomincia da sinistra
    sunX = -50;
  }
  
  // sole
  fill(255, 204, 0);  
  noStroke();
  circle(sunX, 100, sunSize);  

  // disegno degli alberi
  for (let i = 0; i < treePositions.length; i++) {
    drawTree(treePositions[i], horizon);
  }

  // terreno verde
  fill(34, 139, 34);  
  rect(0, horizon, width, height - horizon);
}

//SEZIONE CALCOLI
function drawTree(x, y) {
  // tronco
  fill(139, 69, 19);
  rect(x - 10, y - 60, 20, 60);
  
  // chioma
  fill(0, 100, 0);
  circle(x, y - 80, 80);
}

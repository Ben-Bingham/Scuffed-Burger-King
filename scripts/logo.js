function setup() {
    var canvas = createCanvas(50, 50);
 
    canvas.parent('Logo');
  }

  function draw() {
    background(255, 135, 50);
    // Buns
    fill(255, 135, 50);
    noStroke();
    
    // Top bun
    fill(255);
    ellipse(200 / 8, 50 / 8, 385 / 8, 85 / 8);
    rect(7 / 8, 50 / 8, 386 / 8, 65 / 8);
    
    fill(255, 135, 50);
    ellipse(200 / 8, 50 / 8, 380 / 8, 80 / 8);
    rect(10 / 8, 50 / 8, 380 / 8, 63 / 8);
    
    // Bottom bun
    fill(255);
    ellipse(203 / 8, 375 / 8, 385 / 8, 25 / 8);
    rect(10 / 8, 310 / 8, 386 / 8, 65 / 8);
    
    fill(255, 135, 50);
    ellipse(203 / 8, 373 / 8, 380 / 8, 20 / 8);
    rect(13 / 8, 313 / 8, 380 / 8, 60 / 8);
    
    fill(255, 0, 0);
    textSize(120 / 8);
    rectMode(CORNER);
    text("Burger", 10 / 8, 205 / 8);
    text("Queen", 10 / 8, 300 / 8);
  }
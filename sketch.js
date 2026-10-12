//prima richiesta variabili 
let xPulcino = 250;
let yPulcino = 420;
let xMax = 500;
let yMax = 600;
/*per la stella mi sono ispirata alla pioggia nel tutorial p5.js variables and change
variabili per la stella*/
let lineX = 0;
let lineY = 0;

function setup() {
  createCanvas(xMax, yMax);
  frameRate(3.5); //frequenza di aggiornamento a 3,5 fotogrammi al secondo
}

//terza richiesta primitive 
function draw() {
  background("#113a5a"); //cielo
  noStroke();
  fill("#5f9d48"); //prato
  rect(0, 460, 500, 140);
  ellipse(250, 470, 600, 80);

  //stella
  stroke("#e5e057");
  strokeWeight(1.5);
  line(lineX, lineY, lineX, lineY - 16);
  line(lineX + 8, lineY - 8, lineX - 8, lineY - 8);
  line(lineX + 8, lineY, lineX - 8, lineY - 16);
  line(lineX - 8, lineY, lineX + 8, lineY - 16);

  //pulcino prima corpo poi testa, ali, occhi, becco 
  // e zampine da mettere prima perchè dietro al corpo
  noStroke();
  fill(255, 140, 20);
  ellipse(xPulcino-32, yPulcino+72, 30, 18);
  ellipse(xPulcino+32, yPulcino+72, 30, 18);
  fill(255, 220, 70);
  ellipse(xPulcino, yPulcino+20, 118, 118); 
  ellipse(xPulcino, yPulcino-60, 105, 110);
  triangle(
    xPulcino-20, yPulcino-45,
    xPulcino-90, yPulcino+20,
    xPulcino-30, yPulcino+10
  ); 
  triangle(
    xPulcino+20, yPulcino-45,
    xPulcino+90, yPulcino+20,
    xPulcino+30, yPulcino+10
  );
  fill("black");
  ellipse(xPulcino-25, yPulcino-65, 10,16);
  ellipse(xPulcino+25, yPulcino-65, 10, 16); 
  fill(255, 140, 20); 
  triangle(
    xPulcino-20, yPulcino-49, 
    xPulcino+20, yPulcino-49, 
    xPulcino, yPulcino-36
  );

  //cappellino 
  fill(240, 110, 160);
  triangle(
    xPulcino-25, yPulcino-108,
    xPulcino+25, yPulcino-108,
    xPulcino, yPulcino-165,
  );
  stroke(255, 185, 215); //aggiunta linee più chiare
  strokeWeight(3);
  line(xPulcino - 18, yPulcino - 118, 
    xPulcino + 18, yPulcino - 118);
  line(xPulcino - 11.5, yPulcino - 132, 
    xPulcino + 11.5, yPulcino - 132);
  line(xPulcino - 5.5,  yPulcino - 146, 
    xPulcino + 5.5,  yPulcino - 146
  );

  //movimento casuale stella
  lineX = random(0, xMax);  //genera numeri randomici compresi tra 0 e 500 (escluso)
  lineY = random(0, yMax/1.4); 

  //seconda richiesta ciclo for e if 
  for (let i = 0; i<3; i++){
    let xPalloncino = 0;
    let yPalloncino = 0;

    if(i == 0){
      xPalloncino=160;
      yPalloncino=150;
    } else if(i == 2){
      xPalloncino=120;
      yPalloncino=80;
    } else{
      xPalloncino=210;
      yPalloncino=100;
    }
    
    stroke("#c7c6c6"); //colore grigio dello sroke
      strokeWeight(1.3);
      line(xPulcino - 75, yPulcino+10, //coordinate filo in basso (punto in cui vengono retti i fili)
      xPalloncino, yPalloncino+60); //coordinate filo in alto
    stroke(180, 20, 40);
      strokeWeight(2);
      fill(221, 47, 47);
      ellipse(xPalloncino, yPalloncino, 110, 130
    );
  }
}


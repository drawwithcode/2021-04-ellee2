const phrase = "carote olio mandorle zucchero farina cannella vaniglia limone uova sale pomodori panna cioccolato miele pistacchi maizena rum zucca pere";
const words = phrase.split(" ");
let buttons;
let iterator = 0;
var textfield;
var output;

function preload(){
  bg = loadImage('assets/recipe.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  textfield = createInput();
  textfield.position(50, 650);
  textfield.changed(newText);
  output = select('#output');
  output.position(50, 60);
  

  words.forEach(word => {
    createElement("button", word);
  })

  buttons = selectAll("button");

  buttons.forEach(button => {
    
    button.style("position: absolute");
    button.style('font-size', '25px');
    button.style('background-color', 'orange');
    button.style('stroke-color', 'orange');
    
  });
  console.log(buttons);
}

function draw() {
  background(220);
 
  image(bg, 0, 0, windowWidth, windowHeight);
  var myText = "Carrot Cake recipe";
  push();
  textFont("Pacifico");
  textAlign(LEFT);
  textSize(70);
  fill('orange');
  text(myText, 50, 80);
  pop();

  var myText2 = "Write down your list, choose carefully";
  push();
  textAlign(LEFT);
  textSize(15);
  fill('black');
  text(myText2, 50, 620);
  pop();
  iterator ++;
  buttons.forEach((button, i) => {
    let x = noise((iterator + (40 * i)) / 400) * windowWidth;
    let y = noise((iterator - (40 * i)) / 400) * windowHeight;
    button.position(x, y);
});
}




function newText() {

  createP(textfield.value());

}

let background1;
let background10;
let showAltBackground = false;
let tekst;
let x = 4;
let button;
let invisibleButton;
let kontynuujButton;
let closeButton;
let tick;
let showTick = false; // <-- teraz domyślnie ukryty
let NakartedebetowaButton;

function preload() {
  background1 = loadImage('background1.png');
  background10 = loadImage('background10.png');
  tick = loadImage('tick.png');
}

function setup() {
  createCanvas(2388, 1668 );
  imageMode(CORNER);

  // Pole tekstowe (hasło)
  tekst = createInput("I");
  textSize(26);
  tekst.position((width / 3) + 91, (height / 2) - 50);
  tekst.size(640, 67);
  tekst.style('border', 'none');
  tekst.style('background', 'none');

  // Przycisk zmieniający tło
  button = createButton('');
  button.size(400, 90);
  button.position((width -400 )/ 2, height * 0.75 - 60);
  button.style('background', 'transparent');
  button.style('border', 'none');
  button.style('cursor', 'pointer');
  button.mousePressed(() => {
    showAltBackground = true;
    tekst.hide();
  });

  // Przycisk "X"
  closeButton = createButton('X');
  closeButton.size(50, 50);
  closeButton.position(width /3+85, height / 3 -135);
  closeButton.style('background', 'transparent');
  closeButton.style('border', 'none');
  closeButton.style('font-size', '20px');
  closeButton.style('color', 'rgba(0,0,0,0)');
  closeButton.style('cursor', 'pointer');
  closeButton.mousePressed(() => {
    showAltBackground = false;
    tekst.show();
    showTick = false;
  });

  // Przycisk "Kontynuuj" (niewidoczny)
  kontynuujButton = createButton('');  kontynuujButton.size(580, 60);
  kontynuujButton.position(width / 2 - 280, height / 2 + 100);
  kontynuujButton.style('appearance', 'none');
  kontynuujButton.style('-webkit-appearance', 'none');
  kontynuujButton.style('-moz-appearance', 'none');
  kontynuujButton.style('outline', 'none');
  kontynuujButton.style('box-shadow', 'none');
  //kontynuujButton.style('color', 'rgba(0,0,0,0)');
  kontynuujButton.style('padding', '0');
  kontynuujButton.style('margin', '0');
  kontynuujButton.style('font-size', '0');
  kontynuujButton.style('cursor', 'pointer');
  kontynuujButton.elt.style.background = '#B370770A';
  kontynuujButton.elt.style.border = 'none'
  kontynuujButton.mousePressed(() => {
    if (!showAltBackground) {
      console.log("Kliknięto przycisk Kontynuuj");
      showTick = true;
    }
  });

  // Niewidoczny przycisk "Na kartę debetową"
  NakartedebetowaButton = createButton('&nbsp;');
  NakartedebetowaButton.size(300, 60);
  NakartedebetowaButton.position(width - 420, height - 154);
  NakartedebetowaButton.style('appearance', 'none');
  NakartedebetowaButton.style('-webkit-appearance', 'none');
  NakartedebetowaButton.style('-moz-appearance', 'none');
  NakartedebetowaButton.style('outline', 'none');
  NakartedebetowaButton.style('box-shadow', 'none');
  NakartedebetowaButton.style('color', 'rgba(0,0,0,0)');
  NakartedebetowaButton.style('padding', '0');
  NakartedebetowaButton.style('margin', '0');
  NakartedebetowaButton.style('font-size', '0');
  NakartedebetowaButton.style('cursor', 'pointer');
  NakartedebetowaButton.elt.style.background = 'transparent';
  NakartedebetowaButton.elt.style.border = 'none';
  NakartedebetowaButton.mousePressed(() => {
    //console.log("Kliknięto przycisk Na kartę debetową");
  window.open("https://persied.github.io/dropdown-powiadomienia/","_self");
              });
}

function draw() {
  if (showAltBackground) {
    image(background10, 0, 0, width, height);
    closeButton.show();
    kontynuujButton.hide();
    NakartedebetowaButton.hide();
  } else {
    image(background1, 0, 0, width, height);
    closeButton.hide();
    kontynuujButton.show();
    NakartedebetowaButton.show();

    // Pokazanie tick tylko po kliknięciu "Kontynuuj"
    if (showTick) {
      let tickX = tekst.x + tekst.width - 58;
      let tickY = tekst.y + 1;
      image(tick, tickX, tickY, 60, 60);
    }
  }
}

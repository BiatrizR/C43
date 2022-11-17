var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage;
var database, gameState;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins;
var cars = [];

// variáveis de obstaculos
var obstacle1, obstacle1Img;
var obstacle2, obstacle2Img;

function preload() {
  //function preload para adicionar vairáveis.
  backgroundImage = loadImage("./assets/planodefundo.png");
  car1_img = loadImage("../assets/car1.png");
  car2_img = loadImage("../assets/car2.png");
  track = loadImage("../assets/PISTA.png");

  //magens do combustivel e moedas
  fuelImage = loadImage("./assets/fuel.png");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  //obstacle1 = loadImage("./")


}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //criando o objeto de jogo, chamando as classes
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  //verificando se há 2 jogadores no jogo se sim atualizamos o gameState para 1
  if (playerCount === 2) {
    game.update(1);
  }

  //se gameState igual a um o game muda pra play/jogar
  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


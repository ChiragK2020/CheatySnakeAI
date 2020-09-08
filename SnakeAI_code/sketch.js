//There is a slider for the framerate;
//This Snake AI is a cheat that actualy repeatedly follows a hamiltonian cycle..But I am still very proud of it lol;
var food;
var s;
var boxl = 40;
var slider;
var frames;
var moveCount = 0;
var wboxes;
var hboxes;

function setup() {
  createCanvas(640, 640);
  s = new Snake();
  food = spawnfood();
  window.addEventListener("keydown", keypress, false);
  slider = createSlider(1, 1000000, 30, 10);
  slider.size(300);
  wboxes = width / boxl;
  hboxes = height / boxl;

}
wboxes = wboxes;
hboxes = hboxes;

function keypress(key) {
  if (key.keyCode == "39") {
    slider.value(slider.value() + 1);
  } else if (key.keyCode == "37") {
    slider.value(slider.value() - 1);
  } else {
    if (s.parts.length <= 1) {
      if (key.keyCode == "87") { //GO UP
        s.turn(0, -1);
      } else if (key.keyCode == "83") { //GO DOWN
        s.turn(0, 1);
      } else if (key.keyCode == "68") { //GO RIGHT
        s.turn(1, 0);
      } else if (key.keyCode == "65") { //GO LEFT
        s.turn(-1, 0);
      }
    } else if (s.parts.length > 1) {
      if (key.keyCode == "83") { //GO UP
        if (s.xdir == 0 && s.ydir == -1) {} else {
          s.turn(0, 1);
        }
      }
      if (key.keyCode == "87") { //GO DOWN
        if (s.xdir == 0 && s.ydir == 1) {} else {
          s.turn(0, -1);
        }
      }
      if (key.keyCode == "68") { //GO RIGHT
        if (s.xdir == -1 && s.ydir == 0) {} else {
          s.turn(1, 0);
        }
      }
      if (key.keyCode == "65") { //GO Left
        if (s.xdir == 1 && s.ydir == 0) {} else {
          s.turn(-1, 0);
        }
      }
    }
  }
}

function spawnfood() {
  var validpos = [];
  var shouldpush = [];
  var i = 0;
  var j = 0;
  for (i = 0; i <= width-boxl ; i += boxl) {
    for (j = 0; j < height-boxl ; j += boxl) {
      for (var a = 0; a < s.parts.length; a++) {
        shouldpush.push(!(i == s.parts[a].x && (j == s.parts[a].y)));
      }
      if (shouldpush.every(function(val){return val})) {
        validpos.push(createVector(i, j));
        shouldpush=[];
      }else{
        console.log(validpos);
      shouldpush=[];
      }
    }
  }
  return random(validpos);
}

function draw() {
  frames = slider.value();
  frameRate(frames);
  background(0);
  noStroke();
  var winstr;
  if (s.wins()) {
    background(255, 0, 0);
    fill(0, 0, 255);
    textSize(80);
    winstr = 'You Win!!!';
    text(winstr, 0, 200);
    noLoop();
  } else if (s.loses()) {
    background(0, 0, 255);
    fill(255, 0, 0);
    textSize(80);
    winstr = 'You Scored \n ' + str(s.points) + ' points!!!';
    text(winstr, 0, 200);
    noLoop();
  } else {
    thinkturn();
    document.getElementById("score").innerHTML = "SCORE:"+str(s.points);
    fill(240, 5, 5);
    rect(food.x, food.y, boxl, boxl);
    s.move();
    s.show();
    if (s.touchfood()) {
      s.grow();
      food = spawnfood();
    }
  }
}
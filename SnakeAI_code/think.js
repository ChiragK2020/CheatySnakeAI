function isTrue(value,index,arr){
  return value;
}
function isEven(num) {
  return num % 2 == 0;
}

var moveIL;

function thinkturn() {
  if (isEven(wboxes)) {
    if ((s.parts[0].x == 0 && s.parts[0].y == 0)&&moveCount>0) {
      s.turn(1, 0);
      moveCount=0;
    }
    //First turn
    else if (moveCount == wboxes - 1) {
      s.turn(0, 1);
    }
    //Turn into Loop
    else if (moveCount == hboxes + (wboxes - 2)) {
      s.turn(-1, 0);
    }
    //Repeated turning pattern
    moveIL = moveCount - (wboxes + hboxes - 1);
    var d = 1;
    var l = hboxes - 2;
    for (var a = 0; a <= (wboxes); a++) {
      if (moveIL == ((hboxes - 1) * (wboxes - 2))) {
        s.turn(0, -1);
      } else if (moveIL == (a * ((hboxes - 1) * 2))) {
        s.turn(0, -1);
      } else if (moveIL == l) {
        s.turn(-1, 0);
      } else if (moveIL == (d * (hboxes - 1))) {
        s.turn(0, 1);
      }
      d += 2;
      l += hboxes - 1;
    }
    //Comes back over
    if ((s.parts[0].x == 0 && s.parts[0].y == boxl)) {
      s.turn(0, -1);
    }
  } else {
    console.log("Invalid Dimensions");
  }

}
class Snake {
  constructor() {
    this.parts = [createVector(0, 0)];
    this.xs = [];
    this.ys = [];
    this.xdir = 1;
    this.ydir = 0;
    this.points = this.parts.length - 1;
  }
  move() {
    for (var i = 0; i < this.parts.length; i++) {
      if (i == 0) {
        this.xs.unshift(this.parts[i].x);
        this.ys.unshift(this.parts[i].y);
        this.parts[i].x += (this.xdir * boxl);
        this.parts[i].y += (this.ydir * boxl);
      } else {
        this.parts[i].x = this.xs[i - 1];
        this.parts[i].y = this.ys[i - 1];
      }
    }
    moveCount++;
  }
  turn(x, y) {

    this.xdir = x;
    this.ydir = y;
  }
  wins() {
    var x;
    x = ((width / boxl) * (height / boxl)) - 1;
    if (this.points == x) {
      return true;
    }
    return false;
  }
  loses() {
    return (this.touchbody() || this.touchwall())
  }
  touchbody() {
    for (var i = 0; i < this.parts.length; i++) {
      if (i != 0) {
        if (this.parts[0].x == this.parts[i].x && this.parts[0].y == this.parts[i].y) {
          return true;
        }
      }
    }
    return false;
  }
  touchwall() {

    return ((this.parts[0].x < 0 || (this.parts[0].x) > (width - boxl) || (this.parts[0].y < 0 || this.parts[0].y > (height - boxl))))

  }
  touchfood() {
    if ((this.parts[0].x == food.x) && (this.parts[0].y == food.y)) {
      return true;
    }
    return false;
  }
  grow() {
    this.points++;
    this.parts.push(createVector(this.xs[this.parts.length - 1], this.ys[this.parts.length - 1]));
  }
  show() {
    var b;
    for (var a = 0; a < s.parts.length; a++) {
      noStroke();
      fill(161, 68, 219);
      rect(s.parts[a].x, s.parts[a].y, boxl, boxl);
      //
      if (a == 0) {
        fill(87, 80, 79);
        if (this.xdir == 1 && this.ydir == 0) { //Facing Right
          circle(this.parts[a].x + boxl / 2 + 5, this.parts[a].y + boxl / 2 - 5, 13);
        }
        if (this.xdir == -1 && this.ydir == 0) { //Facing Left
          circle(this.parts[a].x + boxl / 2 - 5, this.parts[a].y + boxl / 2 - 2, 13);
        }
        if (this.xdir == 0 && this.ydir == -1) { //Facing Up
          circle(this.parts[a].x + boxl / 2 - 5, this.parts[a].y + boxl / 2 - 5, 13);
        }
        if (this.xdir == 0 && this.ydir == 1) { //Facing Down
          circle(this.parts[a].x + boxl / 2 + 4, this.parts[a].y + boxl / 2 + 4, 13);
        }
      }
      //
      if (s.parts.length == 1) {
        //Do Nothing
      } else if (a == 0) { //First part
        //Stroke top
        for (b = 1; b < s.parts.length; b++) {
          if (b == a + 1) {
            continue;
          }
          if ((s.parts[a].x == s.parts[b].x) && (s.parts[a].y == s.parts[b].y + boxl)) {
            stroke(0);
            strokeWeight(1);
            line(s.parts[a].x, s.parts[a].y, s.parts[a].x + boxl, s.parts[a].y);
          }
        }
        //Stroke Bottom
        for (b = 1; b < s.parts.length; b++) {
          if (b == a + 1) {
            continue;
          }
          if ((s.parts[a].x == s.parts[b].x) && (s.parts[a].y == s.parts[b].y - boxl)) {
            stroke(0);
            strokeWeight(1);
            line(s.parts[a].x, s.parts[a].y + boxl, s.parts[a].x + boxl, s.parts[a].y + boxl);
          }
        }
        //Stroke Left
        for (b = 1; b < s.parts.length; b++) {
          if (b == a + 1) {
            continue;
          }
          if ((s.parts[a].x == s.parts[b].x + boxl) && (s.parts[a].y == s.parts[b].y)) {
            stroke(0);
            strokeWeight(1);
            line(s.parts[a].x, s.parts[a].y, s.parts[a].x, s.parts[a].y + boxl);
          }
        }
        //Stroke Right
        for (b = 1; b < s.parts.length; b++) {
          if (b == a + 1) {
            continue;
          }
          if ((s.parts[a].x == s.parts[b].x - boxl) && (s.parts[a].y == s.parts[b].y)) {
            stroke(0);
            strokeWeight(1);
            line(s.parts[a].x + boxl, s.parts[a].y, s.parts[a].x + boxl, s.parts[a].y + boxl);
          }
        }
      } else if (a == s.parts.length - 1) {
        //Stroke top
        for (b = s.parts.length - 1; b >= 0; b--) {
          if (b == a - 1) {
            continue;
          }
          if ((s.parts[a].x == s.parts[b].x) && (s.parts[a].y == s.parts[b].y + boxl)) {
            stroke(0);
            strokeWeight(1);
            line(s.parts[a].x, s.parts[a].y, s.parts[a].x + boxl, s.parts[a].y);
          }
        }
        //Stroke Bottom
        for (b = s.parts.length - 1; b >= 0; b--) {
          if (b == a - 1) {
            continue;
          }
          if ((s.parts[a].x == s.parts[b].x) && (s.parts[a].y == s.parts[b].y - boxl)) {
            stroke(0);
            strokeWeight(1);
            line(s.parts[a].x, s.parts[a].y + boxl, s.parts[a].x + boxl, s.parts[a].y + boxl);
          }
        }
        //Stroke Left
        for (b = s.parts.length - 1; b >= 0; b--) {
          if (b == a - 1) {
            continue;
          }
          if ((s.parts[a].x == s.parts[b].x + boxl) && (s.parts[a].y == s.parts[b].y)) {
            stroke(0);
            strokeWeight(1);
            line(s.parts[a].x, s.parts[a].y, s.parts[a].x, s.parts[a].y + boxl);
          }
        }
        //Stroke Right
        for (b = s.parts.length - 1; b >= 0; b--) {
          if (b == a - 1) {
            continue;
          }
          if ((s.parts[a].x == s.parts[b].x - boxl) && (s.parts[a].y == s.parts[b].y)) {
            stroke(0);
            strokeWeight(1);
            line(s.parts[a].x + boxl, s.parts[a].y, s.parts[a].x + boxl, s.parts[a].y + boxl);
          }
        }
      } else {
        //Stroke top
        for (b = 0; b < s.parts.length; b++) {
          if (b == a + 1 || b == a - 1) {
            continue;
          }
          if ((s.parts[a].x == s.parts[b].x) && (s.parts[a].y == s.parts[b].y + boxl)) {
            stroke(0);
            strokeWeight(1);
            line(s.parts[a].x, s.parts[a].y, s.parts[a].x + boxl, s.parts[a].y);
          }
        }
        //Stroke Bottom
        for (b = 0; b < s.parts.length; b++) {
          if (b == a + 1 || b == a - 1) {
            continue;
          }
          if ((s.parts[a].x == s.parts[b].x) && (s.parts[a].y == s.parts[b].y - boxl)) {
            stroke(0);
            strokeWeight(1);
            line(s.parts[a].x, s.parts[a].y + boxl, s.parts[a].x + boxl, s.parts[a].y + boxl);
          }
        }
        //Stroke Left
        for (b = 0; b < s.parts.length; b++) {
          if (b == a + 1 || b == a - 1) {
            continue;
          }
          if ((s.parts[a].x == s.parts[b].x + boxl) && (s.parts[a].y == s.parts[b].y)) {
            stroke(0);
            strokeWeight(1);
            line(s.parts[a].x, s.parts[a].y, s.parts[a].x, s.parts[a].y + boxl);
          }
        }
        //Stroke Right
        for (b = 0; b < s.parts.length; b++) {
          if (b == a + 1 || b == a - 1) {
            continue;
          }
          if ((s.parts[a].x == s.parts[b].x - boxl) && (s.parts[a].y == s.parts[b].y)) {
            stroke(0);
            strokeWeight(1);
            line(s.parts[a].x + boxl, s.parts[a].y, s.parts[a].x + boxl, s.parts[a].y + boxl);
          }
        }
      }
    }
  }
}
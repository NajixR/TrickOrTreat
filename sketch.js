var player;
var bucket;
var points = 0;
function setup() {
	createCanvas(400, 400);
	// put setup code here
	player = new Player();
	bucket = new Bucket();
	timerT = createP('timer ' + timeAmount);
}
var left = false;
let right = false;
let up = false;
let down = false;
function draw() {
	background(51);
	player.show();
	movePlayer();
	bucket.show();
	textSize(14);
	if(isMoveable == false) {
		text("Press Enter to start, you have 60 seconds to get the buckets!", 0, 50);
	}
	textSize(24);
	text("Points: " + points, 0,  30);

	if(collide(player.x, player.y, bucket.x, bucket.y, bucket.w, bucket.h) == true) {
		bucket = new Bucket();
		points++;
	} 



}

let isMoveable = false;
let start = false;

function keyPressed() {
	if(isMoveable) {
		if(key == "a") {
			left = true;
		}
		if(key == "d") {
			right = true;
		}
		if(key == "w") {
			up = true;
		}
		if(key == "s") {
			down = true;
		}
	}
	if(keyCode == 13) {
		isMoveable = true;
		if(start == false) {
			start = true;
			setInterval(timer, 1000);

		}
	}
}
function keyReleased() {
	if(key == "a") {
		left = false;
	}
	if(key == "d") {
		right = false;
	}
	if(key == "w") {
		up = false;
	}
	if(key == "s") {
		down = false;
	}
}

function movePlayer() {
	if(left) {
		player.x -= player.vel;
	}
	if(right) {
		player.x += player.vel;
	}
	if(up) {
		player.y -= player.vel;
	}
	if(down) {
		player.y += player.vel;
	}
}


function collide(px, py, bx, by, bw, bh) {
	if(px > bx && px < bx + bw && py > by && py < by + bh) {
		return true;
	} else {
		return false;
	}
}
let timeAmount = 60;
function timer(time) {
	if(timeAmount != 0) {
		timerT.html("Time: " + timeAmount);
		timeAmount--;
	} else {
		isMoveable = false;
	}
	
}
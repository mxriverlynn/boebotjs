var j5 = require("johnny-five");

var STOP_SPEED = 90;
var leftSpeed = STOP_SPEED;
var rightSpeed = STOP_SPEED;

function BoEBot(pinLeft, pinRight){
  this.leftServo = new j5.Servo({
    pin: pinLeft,
    type: "continuous"
  });

  this.rightServo = new j5.Servo({
    pin: pinRight,
    type: "continuous"
  });
}

BoEBot.prototype.setSpeed = function(leftSpeed, rightSpeed){
  this.leftServo.to(leftSpeed);
  this.rightServo.to(rightSpeed);
}

BoEBot.prototype.fwd = function(speed){
  if (!speed){ speed = 1};

  leftSpeed = STOP_SPEED - speed;
  rightSpeed = STOP_SPEED + speed;
  this.setSpeed(leftSpeed, rightSpeed);
};

BoEBot.prototype.back = function(speed){
  if (!speed){ speed = 1};
  this.fwd(-speed);
};

BoEBot.prototype.stop = function(){
  leftSpeed = STOP_SPEED;
  rightSpeed = STOP_SPEED;
  this.setSpeed(leftSpeed, rightSpeed);
};

BoEBot.prototype.left = function(speed){
  if (!speed){ speed = 1};

  leftSpeed = leftSpeed - speed;
  this.setSpeed(leftSpeed, rightSpeed);
};

BoEBot.prototype.right = function(speed){
  if (!speed){ speed = 1 };

  rightSpeed = rightSpeed + speed;
  this.setSpeed(leftSpeed, rightSpeed);
};

BoEBot.prototype.spinRight = function(speed){
  if (!speed){ speed = 1 };

  leftSpeed = STOP_SPEED + speed;
  rightSpeed = STOP_SPEED + speed;
  this.setSpeed(leftSpeed, rightSpeed);
}

BoEBot.prototype.spinLeft = function(speed){
  if (!speed){ speed = 1 };

  leftSpeed = STOP_SPEED - speed;
  rightSpeed = STOP_SPEED - speed;
  this.setSpeed(leftSpeed, rightSpeed);
}

module.exports = BoEBot;

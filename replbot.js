var j5 = require("johnny-five");
var BoEBot = require("./boebot");

var board = new j5.Board({
  port: "/dev/tty.linvor-DevB"                       
});

board.on("ready", function(){

  var boebot = new BoEBot(12, 11);
  boebot.stop();

  board.repl.inject({
    bot: boebot
  });

  console.log("BoE-Bot Ready!");

});


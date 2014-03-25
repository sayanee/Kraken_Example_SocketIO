module.exports.listen = function(app) {

  io = require('socket.io').listen(app);

  io.sockets.on('connection', function (socket) {
    setInterval(function(){
      var num = Math.floor((Math.random()*100)+10)
      socket.emit('ping', num);
    }, 500);
  });

  return io;
};

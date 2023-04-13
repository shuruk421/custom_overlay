var socket;

function setup() {
    createCanvas(1920, 1080);
    //red stroke
    stroke(255, 0, 0);
    //transperant fill
    fill(0, 0, 0, 0);
    // set stroke weight
    strokeWeight(2);
    //set frameRate
    frameRate(240);
    socket = new WebSocket('ws://localhost:8081/esp');
    socket.onmessage= function(e) {
        clear();
        var lines = JSON.parse(e.data);
        lines.forEach(function(l) {
            line(l.X1, l.Y1, l.X2, l.Y2);
        });
    };
}

function draw() {
    if (socket.readyState === 1)
        socket.send('GET');
}
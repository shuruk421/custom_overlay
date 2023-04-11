var socket;

function setup() {
    createCanvas(1920, 1080);
    //red stroke
    stroke(255, 0, 0);
    //transperant fill
    fill(0, 0, 0, 0);
    // set stroke weight to 3 pixels
    strokeWeight(3);
    socket = new WebSocket('ws://localhost:8080/esp');
    socket.onmessage= function(e) {
        clear();
        var rectangles = JSON.parse(e.data);
        rectangles.forEach(function(rectangle) {
            rect(rectangle.X, rectangle.Y, rectangle.Width, rectangle.Height);
        });
    };
}

function draw() {
    if (socket.readyState === 1)
        socket.send('GET');
}
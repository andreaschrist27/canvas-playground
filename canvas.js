let canvas = document.querySelector('canvas'); // get canvas element

canvas.width = window.innerWidth; // set width canvas element
canvas.height = window.innerHeight; // set height canvas element

let c = canvas.getContext('2d'); // insert object to canvas
c.fillStyle = 'rgba(255,0,0,0.5)'; // set color
c.fillRect(450,200,100,100); // object 1st //x , y, width ,height
c.fillStyle = 'rgba(0,255,0,0.5)';
c.fillRect(250,200,100,100); // object 2nd


// line
c.beginPath();
c.moveTo(50,300); //x y
c.lineTo(400,20);
c.lineTo(800,350);
c.strokeStyle = "#fa34a3"; // set color
c.stroke();

// Arc / cricle 
c.beginPath();
c.arc(400, 100, 30,0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();

for(let i = 0 ; i < 3 ; i++){
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x,y,30,0,Math.PI * 2, false);
    c.strokeStyle = getRndColor(); // random color
    c.stroke();
}
function getRndColor() { //color random function
    var r = 255*Math.random()|0,
        g = 255*Math.random()|0,
        b = 255*Math.random()|0;
    return 'rgb(' + r + ',' + g + ',' + b + ')';
}
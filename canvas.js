let canvas = document.querySelector('canvas'); // get canvas element

canvas.width = window.innerWidth; // set width canvas element
canvas.height = window.innerHeight; // set height canvas element

let c = canvas.getContext('2d'); // insert object to canvas
c.fillRect(100,100,100,100); // object 1st 
c.fillRect(200,200,200,200); // object 2nd
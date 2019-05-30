'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const dots = [];
const distance = 50;
let dotsX = 10;
let dotsY = 10;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

while (dotsY < canvas.height) {
  while (dotsX < canvas.width) {
    dots.push(
      {
        x: dotsX,
        y: dotsY,
      }
    )
    dotsX += distance;
  }
  dotsY += distance;
  dotsX = distance;
}

function drowCircle(x, y, r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI); 
  ctx.fillStyle = '#000'; 
  ctx.fill();
}

canvas.addEventListener('mousemove', event => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const dotsInRange = dots.filter(dot => {
    return dot.x >= (mouseX - distance)
    && dot.x <= (mouseX + distance)
    && dot.y >= (mouseY - distance)
    && dot.y <= (mouseY + distance)
  })

  dotsInRange.forEach(dot => {
    const radius = Math.min(30 /(1 +  Math.abs((dot.x)- event.clientX)),
    15 /(1 +  Math.abs((dot.y)- event.clientY)) + 1)
    drowCircle(dot.x, dot.y, radius)
  })
})



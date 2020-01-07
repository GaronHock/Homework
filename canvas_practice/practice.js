document.addEventListener("DOMContentLoaded", function(){
    const canvasElement = document.getElementById("mycanvas");
    canvasElement.height = 500;
    canvasElement.width = 500;
    
    const ctx = canvasElement.getContext("2d");
    ctx.fillStyle = ('red');
    ctx.fillRect(20, 10, 150, 100);

    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.strokeStyle = ("green");
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "purple";
    ctx.fill();
});

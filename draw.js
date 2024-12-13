// Select the canvas and get its drawing context
const canvas = document.getElementById("animalCanvas");
const ctx = canvas.getContext("2d");

// Function to draw a simple bird
function drawBird() {
    // Clear the canvas before drawing
    clearCanvas();

    // Draw the bird's body
    ctx.beginPath();
    ctx.arc(300, 200, 50, 0, Math.PI * 2); // Head
    ctx.fillStyle = "#FFD700"; // Yellow color
    ctx.fill();
    ctx.closePath();

    // Draw the bird's eye
    ctx.beginPath();
    ctx.arc(320, 190, 5, 0, Math.PI * 2); // Eye
    ctx.fillStyle = "#000"; // Black color
    ctx.fill();
    ctx.closePath();

    // Draw the beak
    ctx.beginPath();
    ctx.moveTo(350, 200);
    ctx.lineTo(330, 210);
    ctx.lineTo(330, 190);
    ctx.fillStyle = "#FFA500"; // Orange color
    ctx.fill();
    ctx.closePath();

    // Draw the bird's wings
    ctx.beginPath();
    ctx.ellipse(300, 230, 70, 30, Math.PI / 3, 0, Math.PI * 2); // Left wing
    ctx.fillStyle = "#FFD700"; // Yellow color
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.ellipse(300, 230, 70, 30, -Math.PI / 3, 0, Math.PI * 2); // Right wing
    ctx.fillStyle = "#FFD700"; // Yellow color
    ctx.fill();
    ctx.closePath();

    // Draw the bird's tail
    ctx.beginPath();
    ctx.moveTo(250, 220);
    ctx.lineTo(220, 200);
    ctx.lineTo(250, 180);
    ctx.fillStyle = "#FFD700";
    ctx.fill();
    ctx.closePath();
}

// Function to clear the canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Initial drawing
drawBird();
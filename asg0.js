// DrawRectangle.js
function main() {
    // Retrieve <canvas> element <- (1)
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    
    // Get the rendering context for 2DCG <- (2)
    var ctx = canvas.getContext('2d');
    // Draw a rectangle <- (3)
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; // Set a black color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Fill a rectangle with the color

    // Instantiate a vector v1 using the Vector3 class
    var v1 = new Vector3([2.25, 2.25, 0]);

    // Draw the vector v1 in red color
    drawVector(ctx, v1, "red");

    } 

// Function to draw a vector with origin at the center of the canvas
function drawVector(ctx, v, color) {
    var canvas = ctx.canvas;
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    
    // Scale factor of 20 as specified
    var scale = 20;
    
    // Set line properties
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    
    // Begin drawing path
    ctx.beginPath();
    
    // Move to the center of the canvas (origin)
    ctx.moveTo(centerX, centerY);
    
    // Draw line to the endpoint of the vector
    // Note: y-coordinate is negated because canvas y-axis points downward
    ctx.lineTo(centerX + v.elements[0] * scale, centerY - v.elements[1] * scale);
    
    // Draw the line
    ctx.stroke();
}

function handleDrawEvent() {
    // Get the canvas and context
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');

    // Clear the canvas (black background)
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Read input values
    var x = parseFloat(document.getElementById('xInput').value);
    var y = parseFloat(document.getElementById('yInput').value);

    // Create vector and draw
    var v1 = new Vector3([x, y, 0]);
    drawVector(ctx, v1, "red");
}
// DrawRectangle.js
function main() {
    var canvas = document.getElementById('example');
    if (!canvas) {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }
    
    var ctx = canvas.getContext('2d');
    // Draw a rectangle <- (3)
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height); 

    var x = parseFloat(document.getElementById('xInput').value);
    var y = parseFloat(document.getElementById('yInput').value);

    var v1 = new Vector3([x, y, 0]);
    drawVector(ctx, v1, "red");

    } 

// Function to draw a vector with origin at the center of the canvas
function drawVector(ctx, v, color) {
    var canvas = ctx.canvas;
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    
    var scale = 20;
    
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    
    ctx.moveTo(centerX, centerY);
    
    ctx.lineTo(centerX + v.elements[0] * scale, centerY - v.elements[1] * scale);
    
    ctx.stroke();
}

function handleDrawEvent() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    var x1 = parseFloat(document.getElementById('xInput').value);
    var y1 = parseFloat(document.getElementById('yInput').value);
    var v1 = new Vector3([x1, y1, 0]);

    var x2 = parseFloat(document.getElementById('x2Input').value);
    var y2 = parseFloat(document.getElementById('y2Input').value);
    var v2 = new Vector3([x2, y2, 0]);

    drawVector(ctx, v1, "red");
    drawVector(ctx, v2, "blue");
}

function handleDrawOperationEvent() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');

    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    var x1 = parseFloat(document.getElementById('xInput').value);
    var y1 = parseFloat(document.getElementById('yInput').value);
    var v1 = new Vector3([x1, y1, 0]);

    var x2 = parseFloat(document.getElementById('x2Input').value);
    var y2 = parseFloat(document.getElementById('y2Input').value);
    var v2 = new Vector3([x2, y2, 0]);

    drawVector(ctx, v1, "red");
    drawVector(ctx, v2, "blue");

    var op = document.getElementById('operationSelect').value;
    var s = parseFloat(document.getElementById('scalarInput').value);

    if (op === 'add') {
        let v3 = new Vector3([x1, y1, 0]);
        v3.add(v2);
        drawVector(ctx, v3, "green");
    } else if (op === 'sub') {
        let v3 = new Vector3([x1, y1, 0]);
        v3.sub(v2);
        drawVector(ctx, v3, "green");
    } else if (op === 'mul') {
        let v3 = v1.mul(s);
        let v4 = v2.mul(s);
        drawVector(ctx, v3, "green");
        drawVector(ctx, v4, "green");
    } else if (op === 'div') {
        let v3 = v1.div(s);
        let v4 = v2.div(s);
        drawVector(ctx, v3, "green");
        drawVector(ctx, v4, "green");
    }
    else if (op === 'magnitude') {
        console.log("v1 magnitude:", v1.magnitude());
        console.log("v2 magnitude:", v2.magnitude());
    }
    else if (op === 'normalize') {
        let v3 = v1.normalize();
        let v4 = v2.normalize();
        drawVector(ctx, v3, "green");
        drawVector(ctx, v4, "green");
    }
    else if (op === 'angle') {
        let angle = angleBetween(v1, v2);
        console.log("Angle between v1 and v2:", angle.toFixed(2), "degrees");
    }
    else if (op === 'area') {
        let area = areaTriangle(v1, v2);
        console.log("Area of triangle formed by v1 and v2:", area.toFixed(2));
    }
}

function angleBetween(v1, v2) {
    let dot = Vector3.dot(v1, v2);
    let mag1 = v1.magnitude();
    let mag2 = v2.magnitude();
    if (mag1 === 0 || mag2 === 0) return 0; 

    let cosTheta = dot / (mag1 * mag2);
    cosTheta = Math.max(-1, Math.min(1, cosTheta));
    let angleRad = Math.acos(cosTheta);
    let angleDeg = angleRad * (180 / Math.PI);
    return angleDeg;
}

function areaTriangle(v1, v2) {
    let crossVec = Vector3.cross(v1, v2);
    let area = crossVec.magnitude() / 2;
    return area;
}

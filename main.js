// The main function that draws some things
function draw() {
    // Get the 'context' to render on, it has all the fancy functions
    const ctx = document.getElementById("canvas").getContext("2d")

    // Clear what was on the canvas from the previous draw call,
    // so we can create a new animation frame
    ctx.clearRect(0, 0, 300, 400)

    // Get the precise current seconds, so from 0 to 59.999, in current minute
    const time = new Date()
    const seconds = time.getSeconds() + time.getMilliseconds() / 1000

    // Our line function!
    drawLine(ctx, 200, 150, 150, seconds)

    // Call this draw function again when it is time to draw a new frame
    window.requestAnimationFrame(draw)
}

// Start it all!
draw()

// Custom function to draw a line with a midpoint somewhere and a length and
// rotation
function drawLine(ctx, centerX, centerY, length, rotation) {
    // Some maths, you know this stuff
    const xOffset = Math.sin(rotation) * length / 2
    const yOffset = Math.cos(rotation) * length / 2

    // Start drawing a 'path'...
    ctx.beginPath()

    // ... from (X, Y) ...
    ctx.moveTo(centerX - xOffset, centerY - yOffset)

    // ... to (X, Y) ...
    ctx.lineTo(centerX + xOffset, centerY + yOffset)

    // ... and make it a line!
    ctx.stroke()
}



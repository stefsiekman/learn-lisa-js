function draw() {
    const ctx = document.getElementById("canvas").getContext("2d")

    ctx.clearRect(0, 0, 300, 400)

    const time = new Date()
    const seconds = time.getSeconds() + time.getMilliseconds() / 1000

    drawLine(ctx, 200, 150, 150, seconds)

    window.requestAnimationFrame(draw)
}

draw()

function drawLine(ctx, centerX, centerY, length, rotation) {
    const xOffset = Math.sin(rotation) * length / 2
    const yOffset = Math.cos(rotation) * length / 2

    ctx.beginPath()
    ctx.moveTo(centerX - xOffset, centerY - yOffset)
    ctx.lineTo(centerX + xOffset, centerY + yOffset)
    ctx.stroke()
}



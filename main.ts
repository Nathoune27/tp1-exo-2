input.onButtonPressed(Button.A, function () {
    led.unplot(posX, posY)
    posX += -1
    if (posX < 0) {
        posX = 4
    }
    led.plot(posX, posY)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(posX, posY)
    posX += 1
    if (posX > 4) {
        posX = 0
    }
    led.plot(posX, posY)
})
let posY = 0
let posX = 0
posX = 0
posY = 0
let N = 1
led.plot(posX, posY)
basic.forever(function () {
    basic.pause(1000)
    led.unplot(posX, posY)
    posY += N
    if (posY <= 0) {
        N = 1
    } else if (posY >= 4) {
        N = -1
    }
    led.plot(posX, posY)
})

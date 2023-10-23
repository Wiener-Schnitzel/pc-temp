basic.forever(function () {
    basic.showNumber(input.temperature(), 100)
    basic.pause(10000)
})
basic.forever(function () {
    if (input.temperature() < 35) {
        basic.setLedColor(0x00ff00)
    } else if (input.temperature() > 35) {
        basic.setLedColor(0xff0000)
    }
})

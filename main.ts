radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 6) {
        basic.showString("Hola, cómo estás?")
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(5)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(7)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(4)
})
radio.setGroup(1)

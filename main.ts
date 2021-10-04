input.onGesture(Gesture.Shake, function () {
    if (edad >= 7 && edad <= 10) {
        basic.showLeds(`
            # . # # .
            . . . . #
            . # # . .
            . . # . #
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . # # .
            . . . . #
            . # # . .
            # . . # #
            . # # # #
            `)
    }
})
let edad = 0
edad = 0
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . # # # .
    . . . # .
    . # # # .
    . . . # .
    . # # # .
    `)
basic.pause(200)
basic.showLeds(`
    . # # # .
    . . . # .
    . # # # .
    . # . . .
    . # # # .
    `)
basic.pause(200)
basic.showLeds(`
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    . # # # .
    `)
basic.pause(200)
basic.showLeds(`
    . . . . #
    # # . # #
    . # # # #
    # . . # #
    . . . . .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        edad = edad + 1
        basic.showNumber(edad)
    }
    if (input.buttonIsPressed(Button.B)) {
        edad = edad - 1
        basic.showNumber(edad)
    }
})

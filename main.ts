input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # . .
        # . . # .
        # . . # .
        # . . # .
        # # # . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        # # # . .
        `)
    basic.pause(2000)
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(3000)
    basic.showNumber(5)
    basic.showString("/")
    basic.showNumber(11)
    basic.showString("/")
    basic.showNumber(22)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # # #
        `)
    basic.pause(2000)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.pause(2000)
})

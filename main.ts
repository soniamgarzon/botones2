basic.forever(function () {
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        basic.showNumber(1)
    } else {
        basic.showNumber(0)
    }
})
basic.forever(function () {
    basic.showLeds(`
        . # # . .
        # . . # .
        # . . # .
        # . . # .
        . # # . .
        `)
    if (input.buttonIsPressed(Button.A) || input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
            basic.showLeds(`
                . # # # .
                # . . # .
                . . # . .
                . # . . .
                # # # # .
                `)
        }
    }
})

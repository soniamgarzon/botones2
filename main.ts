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

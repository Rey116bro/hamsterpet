input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Silly)
})
input.onGesture(Gesture.LogoUp, function () {
    basic.showLeds(`
        . # . # .
        . . # . .
        . # . # .
        . # # # .
        . . . . .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . . . .
        # . # . .
        . # . . .
        # . # . .
        # # # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Ghost)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Fabulous)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Confused)
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . # .
        . . # . #
        . . # # #
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showIcon(IconNames.Surprised)
})
basic.showString("PetHamster!!!")
basic.showString("Pin0=Reset")
basic.showLeds(`
    . # . # .
    . . . . .
    . . # . .
    # . . . #
    . # # # .
    `)
music.playMelody("C5 B A G F E D C ", 200)

input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `)
    basic.pause(1000)
    robobit.rotatems(RBRobotDirection.Left, 100, 500)
})
input.onGesture(Gesture.ScreenDown, function () {
    robobit.stop(RBStopMode.Brake)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `)
    basic.pause(1000)
    robobit.rotatems(RBRobotDirection.Right, 100, 500)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    robobit.goms(RBDirection.Forward, 60, 2000)
})
robobit.select_model(RBModel.Mk3)

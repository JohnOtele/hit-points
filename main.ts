controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    HP += -1
    game.splash("HP:" + HP)
})
let HP = 0
HP = 3
scene.setBackgroundColor(5)
game.splash("YOU HAVE" + HP + " CHANCE(S) ONLY")
forever(function () {
    if (HP == 0) {
        game.over(true)
    }
})

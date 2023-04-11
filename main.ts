let index = 0
music.playMelody("C D E F G A B C5 ", 120)
basic.showString("START")
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        index = randint(0, 3)
        if (index == 0) {
            music.ringTone(988)
            basic.showArrow(ArrowNames.North)
            basic.pause(400)
            music.stopAllSounds()
        } else if (index == 1) {
            music.ringTone(880)
            basic.showArrow(ArrowNames.South)
            basic.pause(400)
            music.stopAllSounds()
        } else if (index == 2) {
            music.ringTone(784)
            basic.showArrow(ArrowNames.East)
            basic.pause(400)
            music.stopAllSounds()
        } else if (index == 3) {
            music.ringTone(698)
            basic.showArrow(ArrowNames.West)
            basic.pause(400)
            music.stopAllSounds()
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        music.stopAllSounds()
    }
})

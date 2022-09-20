function RockPaperScissor () {
    my_hand = randint(1, 3)
    if (my_hand == Rock_Index) {
        Rock_image.showImage(0)
    } else if (my_hand == Paper_Index) {
        Paper_Image.showImage(0)
    } else if (my_hand == Scissor_Index) {
        Scissor_Image.showImage(0)
    }
}
input.onGesture(Gesture.Shake, function () {
    RockPaperScissor()
})
let my_hand = 0
let Scissor_Image: Image = null
let Paper_Image: Image = null
let Rock_image: Image = null
let Scissor_Index = 0
let Paper_Index = 0
let Rock_Index = 0
basic.showIcon(IconNames.Happy)
Rock_Index = 1
Paper_Index = 2
Scissor_Index = 3
Rock_image = images.createImage(`
    . . . . .
    . # # # .
    # # # # #
    # # # # #
    . . . . .
    `)
Paper_Image = images.createImage(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
Scissor_Image = images.createImage(`
    # # . . #
    # # . # .
    . . # . .
    # # . # .
    # # . . #
    `)

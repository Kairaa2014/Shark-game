namespace SpriteKind {
    export const decoration = SpriteKind.create()
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Shark,
    assets.animation`swim left`,
    200,
    true
    )
})
info.onCountdownEnd(function () {
    game.over(true, effects.bubbles)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
let MyFood: Sprite = null
let MyDecor: Sprite = null
let Shark: Sprite = null
scene.setBackgroundColor(8)
scene.setBackgroundImage(assets.image`ocean1`)
Shark = sprites.create(assets.image`shark`, SpriteKind.Player)
controller.moveSprite(Shark)
Shark.setStayInScreen(true)
info.startCountdown(15)
for (let index = 0; index < 10; index++) {
    MyDecor = sprites.create(assets.image`decoration`, SpriteKind.decoration)
    MyDecor.setPosition(randint(0, 160), 96)
}
animation.runImageAnimation(
Shark,
assets.animation`swim right`,
200,
true
)
game.onUpdateInterval(2100, function () {
    MyFood = sprites.create(assets.image`food`, SpriteKind.Food)
    MyFood.setPosition(scene.screenWidth(), randint(5, 115))
    MyFood.vx = -75
})

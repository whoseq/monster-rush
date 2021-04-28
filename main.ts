namespace SpriteKind {
    export const para = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true, effects.confetti)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (canavar.vy == 0) {
        canavar.vy = -120
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.para, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let paraaaa: Sprite = null
let canavar: Sprite = null
canavar = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . 7 5 3 5 7 . . . . . . 
    . . . 7 7 4 5 3 5 4 7 7 . . . . 
    . . 7 7 b b 4 3 4 b 6 7 7 . . . 
    . . . 7 b 6 b 4 b 6 b 7 . . . . 
    . . . . 7 b 7 7 7 b 7 . . . . . 
    . . . . . 7 4 1 4 7 . . . . . . 
    . . . . 7 1 1 2 1 1 7 . . . . . 
    . . . . 7 3 3 3 3 3 7 . . . . . 
    . . . . 7 1 1 1 1 . 7 . . . . . 
    . . . . . 7 1 1 1 7 . . . . . . 
    . . . . . 7 1 1 1 7 . . . . . . 
    . . . . . . 7 1 7 . . . . . . . 
    . . . . . 7 4 4 4 7 . . . . . . 
    . . . . 7 . 7 7 7 . 7 . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(canavar, 100, 0)
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`level3`)
scene.cameraFollowSprite(canavar)
canavar.ay = 200
canavar.say("I'm gonna WIN!", 5000)
for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
    paraaaa = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . f 4 5 5 5 5 5 4 f . . . 
        . . . f 4 5 5 5 5 5 5 5 4 f . . 
        . . f 4 5 f f f 5 f f f 5 4 f . 
        . . f 5 5 f 5 5 5 f 5 5 5 5 f . 
        . . f 5 5 f 5 5 5 f 5 5 5 5 f . 
        . . f 5 5 f 5 5 5 f 5 5 5 5 f . 
        . . f 5 5 f 5 5 5 f 5 5 5 5 f . 
        . . f 5 5 f f f 5 f f f 5 5 f . 
        . . f 4 5 5 5 5 5 5 5 5 5 4 f . 
        . . . f 4 5 5 5 5 5 5 5 4 f . . 
        . . . . f 4 5 5 5 5 5 4 f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.para)
    tiles.placeOnTile(paraaaa, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(30, -60)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(50, 0)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(30, 60)
})
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 3 3 3 3 3 3 . . . 
    . . . . . 3 3 3 3 3 3 . 3 3 3 . 
    . . . . . 3 3 3 3 3 3 . . . 3 . 
    . . . . . . . . . 3 3 3 3 3 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
if (mySprite.tileKindAt(TileDirection.Center, sprites.builtin.brick)) {
    game.over(false)
}
if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
    game.over(true)
}

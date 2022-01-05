scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump_velocity == 0) {
        jump_velocity = -125
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
let jump_velocity = 0
jump_velocity = 0
scene.setBackgroundColor(9)
let cube = sprites.create(img`
    222aaaaaaaaa777aaa
    222aaaaaaaaa777aaa
    222aaaaaaaaa777aaa
    444222aaa111aaa777
    444222aaa111aaa777
    444222aaa111aaa777
    aaa444222aaa111aaa
    aaa444222aaa111aaa
    aaa444222aaa111aaa
    aaaaaa444222aaa111
    aaaaaa444222aaa111
    aaaaaa444222aaa111
    777111aaa444222aaa
    777111aaa444222aaa
    777111aaa444222aaa
    aaa777111aaa444222
    aaa777111aaa444222
    aaa777111aaa444222
    `, SpriteKind.Player)
cube.setVelocity(125, 0)
scene.cameraFollowSprite(cube)
tiles.loadMap(tiles.createMap(tilemap`level1`))
tiles.placeOnRandomTile(cube, assets.tile`myTile2`)
game.onUpdateInterval(100, function () {
    if (jump_velocity != 0) {
        cube.vy = jump_velocity
        cube.vx = 125
        jump_velocity += 30
    } else {
        jump_velocity = 0
        cube.vy = 0
        cube.vx = 125
    }
    if (cube.tileKindAt(TileDirection.Bottom, assets.tile`myTile`) || (cube.tileKindAt(TileDirection.Bottom, assets.tile`myTile12`) || (cube.tileKindAt(TileDirection.Bottom, assets.tile`myTile8`) || cube.tileKindAt(TileDirection.Bottom, assets.tile`myTile11`)))) {
        jump_velocity = 0
    }
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {
	
})
game.setDialogCursor(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 1 1 1 1 1 3 3 1 1 1 1 1 3 3 
    3 3 1 1 1 1 1 3 3 1 1 1 1 1 3 3 
    3 3 f f f 1 1 3 3 f f f 1 1 3 3 
    3 3 f f f 1 1 3 3 f f f 1 1 3 3 
    3 3 f f f 1 1 3 3 f f f 1 1 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 2 2 2 2 2 3 3 3 3 3 3 3 
    3 3 3 3 2 2 2 2 2 3 3 3 3 3 3 3 
    3 3 3 3 2 2 2 2 2 3 3 3 3 3 3 3 
    3 3 3 3 2 2 2 2 2 3 3 3 3 3 3 3 
    3 3 3 3 2 2 2 2 2 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `)
game.splash("salva mi vida plis ", "tiki tiki miau miau")
let mySprite = sprites.create(img`
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 1 1 1 1 1 3 1 1 1 1 1 3 3 
    3 3 3 1 1 1 1 1 3 1 1 1 1 1 3 3 
    3 3 3 f f f 1 1 3 f f f 1 1 3 3 
    3 3 3 f f f 1 1 3 f f f 1 1 3 3 
    3 3 3 f f f 1 1 3 f f f 1 1 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 2 2 2 3 3 3 3 3 3 3 3 3 
    3 3 3 3 2 2 2 3 3 3 3 3 3 3 3 3 
    3 3 3 3 2 2 2 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
mySprite.setStayInScreen(true)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)

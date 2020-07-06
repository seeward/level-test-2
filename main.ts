namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function makeDemon () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . f f f f f . . . . . . . . . . 
. . . . . . . f f b 1 1 1 1 f f . . . . . . . . 
. . . . . . f b 1 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f 1 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . f f f f 1 1 1 1 1 1 1 d f . . . . . . 
. . . . f b 1 1 1 c 1 d d 1 1 1 d f . . . . . . 
. . . . f f b 1 b 1 f d c f 1 1 b f . . . . . . 
. . . . . f f b f b f b 1 1 1 1 1 f . . . . . . 
. . . . . . f f f f c f d b 1 b 1 f . . . . . . 
. . . . . . . f c c c f c f b f b f . . . . . . 
. . . . . . . . f f f f f f f f f f . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . f . . f f f f f f f . . . . . . . . . 
. . . . . f f f f f f f f f . . . . . . . . . . 
. . . . . . f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    mySprite.follow(jesus.sprite, 20)
    animation.runImageAnimation(
    mySprite,
    [img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f f . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 b f f . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 1 b f . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 1 1 f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 f f f f . . . . . 
. . . . . . f d 1 1 1 d d 1 c 1 1 1 b f . . . . 
. . . . . . f b 1 1 f c d f 1 b 1 b f f . . . . 
. . . . . . f 1 1 1 1 1 b f b f b f f . . . . . 
. . . . . . f 1 b 1 b d f c f f f f . . . . . . 
. . . . . . f b f b f c f c c c f . . . . . . . 
. . . . . . f f f f f f f f f f . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f f . . f . . . . . 
. . . . . . . . . . f f f f f f f f f . . . . . 
. . . . . . . . . . . f f f f f f f . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f 1 1 1 1 1 1 1 d f . . . . . . . 
. . . . . . f d 1 1 1 1 1 1 1 d d f . . . . . . 
. . . . . . f d 1 1 1 1 1 1 d d d f . . . . . . 
. . . . . . f d 1 1 1 d d d d d d f . . . . . . 
. . . . . . f d 1 d f b d d d d b f . . . . . . 
. . . . . . f b d d f c d b b b c f . . . . . . 
. . . . . . . f 1 1 1 1 1 b b c f . . . . . . . 
. . . . . . . f 1 b 1 f f f f f . . . . . . . . 
. . . . . . . f b f c 1 1 1 b f . . . . . . . . 
. . . . . . . . f f 1 b 1 b f f . . . . . . . . 
. . . . . . . . . f b f b f f f . f . . . . . . 
. . . . . . . . . . f f f f f f f f . . . . . . 
. . . . . . . . . . . . f f f f f . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . f f f f f . . . . . . . . . . 
. . . . . . . f f b 1 1 1 1 f f . . . . . . . . 
. . . . . . f b 1 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f 1 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . f f f f 1 1 1 1 1 1 1 d f . . . . . . 
. . . . f b 1 1 1 c 1 d d 1 1 1 d f . . . . . . 
. . . . f f b 1 b 1 f d c f 1 1 b f . . . . . . 
. . . . . f f b f b f b 1 1 1 1 1 f . . . . . . 
. . . . . . f f f f c f d b 1 b 1 f . . . . . . 
. . . . . . . f c c c f c f b f b f . . . . . . 
. . . . . . . . f f f f f f f f f f . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . f . . f f f f f f f . . . . . . . . . 
. . . . . f f f f f f f f f . . . . . . . . . . 
. . . . . . f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`,img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . f f f f . . . . . . . . . . 
. . . . . . . . f f 1 1 1 1 f f . . . . . . . . 
. . . . . . . f b 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . . f d 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . . f d d 1 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d 1 1 1 1 1 1 d f . . . . . . 
. . . . . . f d d d d d d 1 1 1 d f . . . . . . 
. . . . . . f b d d d d b f d 1 d f . . . . . . 
. . . . . . f c b b b d c f d d b f . . . . . . 
. . . . . . . f c b b 1 1 1 1 1 f . . . . . . . 
. . . . . . . . f f f f f 1 b 1 f . . . . . . . 
. . . . . . . . f b 1 1 1 c f b f . . . . . . . 
. . . . . . . . f f b 1 b 1 f f . . . . . . . . 
. . . . . . f . f f f b f b f . . . . . . . . . 
. . . . . . f f f f f f f f . . . . . . . . . . 
. . . . . . . f f f f f . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`],
    500,
    true
    )
    tiles.placeOnRandomTile(mySprite, sprites.builtin.forestTiles10)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    codeplant.jesus.playAnimation(codeplant.jesus.AnimationTypes.WalkLeft)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (firing == 0) {
        codeplant.jesus.playAnimation(codeplant.jesus.AnimationTypes.HealRightWithStaff)
        pause(250)
        effects.sendHealingBolt(jesus.sprite, effects.Direction.Right, 0.1)
        firing = 1
        pause(500)
    }
    firing = 0
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    codeplant.jesus.playAnimation(codeplant.jesus.AnimationTypes.IdleLeft)
})
function setupGame () {
    hasDemon = 0
    firing = 0
    info.setScore(0)
    scene.setBackgroundColor(15)
    tiles.setTilemap(tiles.createTilemap(
            hex`2000100001060606060606060606060606060606060606060b060606060606121313131302050505050505050505050505050505050505050b05050505050512130e0d1302050505050505050505050505050505050505050b050505050505121313131302050505050505050505050505050505050505050b05050505050512121010100b0b0b0b0b0b0b0b1005050505050505050505050b050505050505050505050802050505050505050505050505050505050505050b050505050505050505050802050505050505050505050505050505050505050b050505050505050505050802050505050505050505050505050505050505050b0505050505050505050508020505050505100b0b0b0b0b0b0b0b0b050505051005050505050505050505080205050505050505050505050505100b050505050505050505050505050505080205050505050505050505050505050b050505050505050505050505050505080205050505050505050505050505050b050505050505050505050505050505080205050505050505050505050505050b05050505050505050505050505050508020505050505050505050505050505050505050505050505050505050505050802050505050505050505050505050505050505050505050505050505050505080310050505050505050505050505050505050505050505050505050505051009`,
            img`
. . . . . . . . . . . . . . . . . . . . 2 . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . . 2 . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . . 2 . . . . . . 2 . . . . 
. . . . . . . . . . . . . . . . . . . . 2 . . . . . . 2 2 . . . 
2 2 2 2 2 2 2 2 . . . . . . . . . . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 2 . . . . . . . . . . . 
. . . . . . . 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.builtin.forestTiles5,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles1,sprites.builtin.forestTiles10,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.builtin.forestTiles11,sprites.builtin.forestTiles15,sprites.builtin.forestTiles16,sprites.builtin.forestTiles4,sprites.dungeon.hazardWater,sprites.dungeon.hazardLava0,sprites.dungeon.hazardLava1,sprites.dungeon.chestClosed,sprites.dungeon.collectibleBlueCrystal,sprites.builtin.oceanSand11,sprites.dungeon.collectibleInsignia,sprites.dungeon.floorDark0],
            TileScale.Sixteen
        ))
    jesus = codeplant.jesus.create(SpriteKind.Player)
    tiles.placeOnRandomTile(jesus.sprite, sprites.builtin.forestTiles10)
    controller.moveSprite(jesus.sprite)
    scene.cameraFollowSprite(jesus.sprite)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    effects.playSmallHealingAnimation(sprite)
    pause(1000)
    sprite.destroy()
    hasDemon = 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (firing == 0) {
        codeplant.jesus.playAnimation(codeplant.jesus.AnimationTypes.HealLeftWithStaff)
        pause(250)
        effects.sendHealingBolt(jesus.sprite, effects.Direction.Left, 0.1)
        firing = 1
        pause(500)
        firing = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.say("unclean")
    hasDemon = 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    codeplant.jesus.playAnimation(codeplant.jesus.AnimationTypes.WalkRight)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    codeplant.jesus.playAnimation(codeplant.jesus.AnimationTypes.IdleRight)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    if (hasDemon == 0) {
        tiles.setTileAt(location, sprites.builtin.forestTiles10)
        info.changeScoreBy(1)
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.hazardLava0, function (sprite, location) {
    effects.playSmallHealingAnimation(sprite)
    sprite.destroy(effects.spray, 500)
    hasDemon = 0
    jesus.sprite.say("")
})
let hasDemon = 0
let firing = 0
let jesus: Jesus = null
let mySprite: Sprite = null
setupGame()
game.onUpdate(function () {
    if (info.score() == 9) {
        if (hasDemon == 0) {
            game.over(true)
        }
    }
    if (hasDemon == 0) {
        jesus.sprite.say("")
    }
})
forever(function () {
    makeDemon()
    pause(7000)
})

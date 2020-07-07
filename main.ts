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
    if (bossMade == 0) {
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
function makeBossDemon () {
    if (bossMade == 0) {
        bossDemon = sprites.create(img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 c 6 6 6 6 c 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`, SpriteKind.Enemy)
        animation.runImageAnimation(
        bossDemon,
        [img`
. . . c c c c c c . . . . . . . 
. . c 6 7 7 7 7 6 c . . . . . . 
. c 7 7 7 7 7 7 7 7 c . . . . . 
c 6 7 7 7 7 7 7 7 7 6 c . . . . 
c 7 c 6 6 6 6 c 7 7 7 c . . . . 
f 7 6 f 6 6 f 6 7 7 7 f . . . . 
f 7 7 7 7 7 7 7 7 7 7 f . . . . 
. f 7 7 7 7 6 c 7 7 6 f . . . . 
. . f c c c c 7 7 6 f c c c . . 
. . c 6 2 7 7 7 f c c 7 7 7 c . 
. c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
. c 1 1 1 1 7 6 6 c 6 6 6 c c c 
. c 1 1 1 1 1 6 6 6 6 6 6 c . . 
. c 6 1 1 1 1 1 6 6 6 6 6 c . . 
. . c 6 1 1 1 1 1 7 6 6 c c . . 
. . . c c c c c c c c c c . . . 
`,img`
. . . . . c c c c c c c . . . . 
. . . . c 6 7 7 7 7 7 6 c . . . 
. . . c 7 c 6 6 6 6 c 7 6 c . . 
. . c 6 7 6 f 6 6 f 6 7 7 c . . 
. . c 7 7 7 7 7 7 7 7 7 7 c . . 
. . f 7 8 1 f f 1 6 7 7 7 f . . 
. . f 6 f 1 f f 1 f 7 7 7 f . . 
. . . f f 2 2 2 2 f 7 7 6 f . . 
. . c c f 2 2 2 2 7 7 6 f c . . 
. c 7 7 7 7 7 7 7 7 c c 7 7 c . 
c 7 1 1 1 7 7 7 7 f c 6 7 7 7 c 
f 1 1 1 1 1 7 6 f c c 6 6 6 c c 
f 1 1 1 1 1 1 6 6 c 6 6 6 c . . 
f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
. f 6 1 1 1 1 1 6 6 6 6 c . . . 
. . f f c c c c c c c c . . . . 
`,img`
. . . . . . c c c c c c c . . . 
. . . . . c f f 6 6 f f 7 c . . 
. . . . c 7 6 6 6 6 6 6 7 6 c . 
. . . c 7 7 7 7 7 7 7 7 7 7 c . 
. . . c 7 8 1 f f 1 6 7 7 7 c . 
. . . f 6 f 1 f f 1 f 7 7 7 f . 
. . . f 6 f 2 2 2 2 f 7 7 7 f . 
. . c c 6 f 2 2 2 2 f 7 7 6 f . 
. c 7 7 7 7 2 2 2 2 7 7 f c . . 
c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
. f 6 1 1 1 1 6 6 6 6 6 c . . . 
. . f f c c c c c c c c . . . . 
`,img`
. . . . . . c c c c c c c . . . 
. . . . . c f f 6 6 f f 7 c . . 
. . . . c 7 6 6 6 6 6 6 7 6 c . 
. . . c 7 7 7 7 7 7 7 7 7 7 c . 
. . . c 7 8 1 f f 1 6 7 7 7 c . 
. . . f 6 f 1 f f 1 f 7 7 7 f . 
. . . f 6 f 2 2 2 2 f 7 7 7 f . 
. . c c 6 f 2 2 2 2 f 7 7 6 f . 
. c 7 7 7 7 2 2 2 2 7 7 f c . . 
c 7 1 1 1 7 7 7 7 7 c c 7 7 c . 
f 1 1 1 1 1 7 7 7 f c 6 7 7 7 c 
f 1 1 1 1 1 1 6 f c c 6 6 6 c c 
f 6 1 1 1 1 1 6 6 c 6 6 6 c . . 
f 6 1 1 1 1 1 6 6 6 6 6 6 c . . 
. f 6 1 1 1 1 6 6 6 6 6 c . . . 
. . f f c c c c c c c c . . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . c c c c c 
. . . . . . . . . c c 7 7 7 6 c 
. . . . . . . . c c 7 7 7 c c . 
. . . . . . . . c 6 7 7 c . . . 
. . . . . . . . c 6 6 6 c . . . 
. . . c c c c c c 6 6 6 c c . . 
. . c 6 7 7 7 7 6 c c 6 6 6 c . 
. c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
. c 1 c f f 1 c 7 6 f 6 6 c c . 
. c c c c c c c c c c c c . . . 
`,img`
. . . . . . . . . . . c c c c c 
. . . . . . . . . c c 7 7 7 6 c 
. . . . . . . . c c 7 7 7 c c . 
. . . . . . . . c 6 7 7 c . . . 
. . . . . . . . c 6 6 6 c . . . 
. . . . . . . . c 6 6 6 c c . . 
. . . c c c c c c c 6 6 6 c c . 
. . c 6 7 7 7 7 6 c c 6 6 6 c . 
. c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
. f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
. c 1 c f f 1 c 7 6 f 6 6 c c . 
. c c c c c c c c c c c c . . . 
`,img`
. . . . . . . . . . . c c c c c 
. . . . . . . . . c c 7 7 7 6 c 
. . . . . . . . c c 7 7 7 c c . 
. . . . . . . . c 6 7 7 c . . . 
. . . . . . . . c 6 6 6 c . . . 
. . . . . . . . c 6 6 6 c c . . 
. . . c c c c c c c 6 6 6 c c . 
. . c 6 7 7 7 7 6 c c 6 6 6 c . 
. c 7 7 7 7 7 7 7 7 c 6 6 6 c c 
c 6 7 7 7 7 7 7 7 7 6 c 6 6 6 c 
c 7 c 6 6 6 6 c 7 7 7 c 6 6 6 c 
f 7 c c 6 6 c c 7 7 7 f 6 6 6 c 
f 7 6 f 6 6 f 6 7 7 7 f 6 6 6 c 
. f 7 7 7 7 7 7 7 7 6 f 6 6 c . 
. c 1 c f f 1 c 7 6 f 6 6 c c . 
. c c c c c c c c c c c c . . . 
`],
        100,
        true
        )
        bossDemon.follow(jesus.sprite)
        bossMade = 1
    }
}
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    codeplant.jesus.playAnimation(codeplant.jesus.AnimationTypes.IdleLeft)
})
function setupGame () {
    game.splash("Avoid demons and gather planets")
    hasDemon = 0
    firing = 0
    info.setScore(0)
    scene.setBackgroundColor(15)
    tiles.setTilemap(tiles.createTilemap(
            hex`2000100001060606060606060606060606060606060606060b060606060606121313131302050505050505050505050505050505050505050b05050505050512130e0d1302050505050505050505050505050505050505050b050505050505121313131302050505050505050505050505050505050505050b05050505050512121010100b0b0b0b0b0b0b0b1005050505050505050505050b050505050505050505050802050505050505050505050505050505050505050b050505050505050505050802050505050505050505050505050505050505050b050505050505050505050802050505050505050505050505050505050505050b0505050505050505050508020505050505100b0b0b0b0b0b0b0b0b050505051005050505050505050505080205050505050505050505050505100b050505050505050505050505050505080205050505050505050505050505050b050505050505050505050505050505080205050505050505050505050505050b050505050505050505050505050505080205050505050505050505050505050b05050505050505050505050505050508020505050505050505050505050505100505050505050505050505050505050802050505050505050505050505050505050505050505050505050505050505080310050505050505050505050505050505050505050505050505050505051009`,
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
    bossMade = 0
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.setVelocity(0, 0)
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
    }
    if (info.score() == 4) {
        makeBossDemon()
    }
})
scene.onOverlapTile(SpriteKind.Enemy, sprites.dungeon.hazardLava0, function (sprite, location) {
    sprite.destroy(effects.spray, 500)
    hasDemon = 0
    jesus.sprite.say("")
})
let hasDemon = 0
let bossDemon: Sprite = null
let firing = 0
let jesus: Jesus = null
let mySprite: Sprite = null
let bossMade = 0
setupGame()
game.onUpdate(function () {
    if (hasDemon == 0) {
        jesus.sprite.say("")
    }
})
forever(function () {
    makeDemon()
    pause(7000)
})

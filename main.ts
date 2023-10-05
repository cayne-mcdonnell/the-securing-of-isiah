namespace SpriteKind {
    export const sacredheart = SpriteKind.create()
    export const item = SpriteKind.create()
    export const playerprojectile = SpriteKind.create()
    export const cupidsarrow = SpriteKind.create()
    export const headless = SpriteKind.create()
    export const death = SpriteKind.create()
    export const floaty = SpriteKind.create()
    export const floaty2 = SpriteKind.create()
    export const minimap = SpriteKind.create()
    export const active = SpriteKind.create()
    export const activebar = SpriteKind.create()
    export const menu = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . f f f f f f f f f f f f f . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . . f f f f f f f . . . . . 
        . . f f d d d d d d d f f . . . 
        . . f d d d d d d d d d f . . . 
        . . f f f d d d d d f f f . . . 
        . . . . f d d f d d f . . . . . 
        . . . . f f f . f f f . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . f f f f f f f f f f f f f . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . f f f f f f f f f . . . . . 
        . . f d d d d d d d f . . . . . 
        . . f d d d d d d d d f . . . . 
        . . f f f d d d d d f . . . . . 
        . . . . f d d f f f f . . . . . 
        . . . . f f f . . f . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . f f f f f f f f f f f f f . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . . f f f f f f f . . . . . 
        . . f f d d d d d d d f f . . . 
        . . f d d d d d d d d d f . . . 
        . . f f f d d d d d f f f . . . 
        . . . . f d d f d d f . . . . . 
        . . . . f f f . f f f . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . f f f f f f f f f f f f f . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f d d d d d d d f . . . 
        . . . f d d d d d d d d f . . . 
        . . . . f d d d d d f f f . . . 
        . . . . f f f f d d f . . . . . 
        . . . . . f . . f f f . . . . . 
        `],
    200,
    true
    )
    lastpos = 0
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    if (currentroom == 3) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        tiles.setCurrentTilemap(tilemap`level22`)
        mySprite.setPosition(80, 25)
        currentroom = 1
        timesenteredroom3 += 1
    }
    if (currentroom == 4) {
        sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
        tiles.setCurrentTilemap(tilemap`level30`)
        mySprite.setPosition(80, 25)
        currentroom = 3
        timesenteredroom3 += 1
    }
})
function chargeactive () {
    activebarcharge += 1
    chargeyuh = 0
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (activebarcharge >= 4) {
        if (lastpos == 0) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f . . . . . 
                . . f f 9 9 9 9 9 9 9 f f . . . 
                . f 9 9 1 1 9 9 9 9 9 9 9 f . . 
                . f 9 1 1 9 9 9 9 9 9 9 9 f . . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 8 8 f . 
                . f 9 9 9 9 9 9 9 9 9 8 8 f . . 
                . f 9 9 9 9 9 9 9 8 8 8 8 f . . 
                . . f f 9 9 8 8 8 8 8 f f . . . 
                . . . . f f f f f f f . . . . . 
                `, mySprite, 0, -60)
            activebarcharge = 0
        } else if (lastpos == 1) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f . . . . . 
                . . f f 9 9 9 9 9 9 9 f f . . . 
                . f 9 9 1 1 9 9 9 9 9 9 9 f . . 
                . f 9 1 1 9 9 9 9 9 9 9 9 f . . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 8 8 f . 
                . f 9 9 9 9 9 9 9 9 9 8 8 f . . 
                . f 9 9 9 9 9 9 9 8 8 8 8 f . . 
                . . f f 9 9 8 8 8 8 8 f f . . . 
                . . . . f f f f f f f . . . . . 
                `, mySprite, 0, 60)
            activebarcharge = 0
        } else if (lastpos == 2) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f . . . . . 
                . . f f 9 9 9 9 9 9 9 f f . . . 
                . f 9 9 1 1 9 9 9 9 9 9 9 f . . 
                . f 9 1 1 9 9 9 9 9 9 9 9 f . . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 8 8 f . 
                . f 9 9 9 9 9 9 9 9 9 8 8 f . . 
                . f 9 9 9 9 9 9 9 8 8 8 8 f . . 
                . . f f 9 9 8 8 8 8 8 f f . . . 
                . . . . f f f f f f f . . . . . 
                `, mySprite, -60, 0)
            activebarcharge = 0
        } else if (lastpos == 3) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f . . . . . 
                . . f f 9 9 9 9 9 9 9 f f . . . 
                . f 9 9 1 1 9 9 9 9 9 9 9 f . . 
                . f 9 1 1 9 9 9 9 9 9 9 9 f . . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 9 9 f . 
                f 9 9 9 9 9 9 9 9 9 9 9 8 8 f . 
                . f 9 9 9 9 9 9 9 9 9 8 8 f . . 
                . f 9 9 9 9 9 9 9 8 8 8 8 f . . 
                . . f f 9 9 8 8 8 8 8 f f . . . 
                . . . . f f f f f f f . . . . . 
                `, mySprite, 60, 0)
            activebarcharge = 0
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    if (currentroom == 2) {
        tiles.setCurrentTilemap(tilemap`level22`)
        mySprite.setPosition(138, 60)
        currentroom = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    timesenteredroom2 += 1
    if (currentroom == 1) {
        if (timesenteredroom2 == 1) {
            mySprite.setPosition(22, 60)
            myEnemy = sprites.create(img`
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . 1 1 . . . . . . . . . . . 1 1 . 
                1 1 1 1 . . . . . . . . . 1 1 1 1 
                1 1 1 1 1 . . . . . . . 1 1 1 1 1 
                1 1 1 1 1 1 . . . . . . 1 1 1 1 1 
                . 1 1 1 1 1 f f f f f 1 1 1 1 1 . 
                . . . 1 1 1 f f f f f 1 1 1 . . . 
                . . . . . . f f f f f . . . . . . 
                . . . . . . f f f f f . . . . . . 
                . . . . . . f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            enemies = 1
            animation.runImageAnimation(
            myEnemy,
            [img`
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . 1 1 . . . . . . . . . . . 1 1 . 
                1 1 1 1 . . . . . . . . . 1 1 1 1 
                1 1 1 1 1 . . . . . . . 1 1 1 1 1 
                1 1 1 1 1 1 . . . . . . 1 1 1 1 1 
                . 1 1 1 1 1 f f f f f 1 1 1 1 1 . 
                . . . 1 1 1 f f f f f 1 1 1 . . . 
                . . . . . . f f f f f . . . . . . 
                . . . . . . f f f f f . . . . . . 
                . . . . . . f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . 1 1 1 f f f f f 1 1 1 . . . 
                . 1 1 1 1 1 f f f f f 1 1 1 1 1 . 
                1 1 1 1 1 1 f f f f f . 1 1 1 1 1 
                1 1 1 1 1 . f f f f f . 1 1 1 1 1 
                1 1 1 1 . . f f f f f . . 1 1 1 1 
                . 1 1 . . . . . . . . . . . 1 1 . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . 
                `],
            100,
            true
            )
            myEnemy.setPosition(122, 21)
            myEnemy.follow(mySprite, 20)
            statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
            statusbar.attachToSprite(myEnemy)
            statusbar.max = 3
            tiles.setCurrentTilemap(tilemap`level2`)
            previousroom = 1
            currentroom = 2
            addItem()
        } else if (timesenteredroom2 >= 2) {
            enemies = 0
            mySprite.setPosition(22, 60)
            tiles.setCurrentTilemap(tilemap`level24`)
            previousroom = 1
            currentroom = 2
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.runtime() - last_pressed >= tear_rate * 20) {
        if (lastpos == 0) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -75)
            timer.after(750, function () {
                sprites.destroy(projectile, effects.disintegrate, 100)
            })
        } else if (lastpos == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, 75)
            timer.after(750, function () {
                sprites.destroy(projectile, effects.disintegrate, 100)
            })
        } else if (lastpos == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -75, 0)
            timer.after(750, function () {
                sprites.destroy(projectile, effects.disintegrate, 100)
            })
        } else if (lastpos == 3) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 75, 0)
            timer.after(750, function () {
                sprites.destroy(projectile, effects.disintegrate, 100)
            })
        }
        last_pressed = game.runtime()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . f f f f f f f f f f f f f . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d f d d d d d f . . . . 
        . . . f d 9 d d d d d f . . . . 
        . . . f d 9 d d d d d f . . . . 
        . . . f f 9 d d d d d f . . . . 
        . . . f d 9 d d d d d f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f d d d f . . . . . . 
        . . . . . f d f d f . . . . . . 
        . . . . . f d d d f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . f f f f f f f f f f f f f . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d f d d d d d f . . . . 
        . . . f d 9 d d d d d f . . . . 
        . . . f d 9 d d d d d f . . . . 
        . . . f f 9 d d d d d f . . . . 
        . . . f d 9 d d d d d f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f d d d f f . . . . . 
        . . . . f f d d d d d f . . . . 
        . . . . . f d d d f f f . . . . 
        . . . . f d d f f f . . . . . . 
        . . . . f f f f . . f . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . f f f f f f f f f f f f f . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d f d d d d d f . . . . 
        . . . f d 9 d d d d d f . . . . 
        . . . f d 9 d d d d d f . . . . 
        . . . f f 9 d d d d d f . . . . 
        . . . f d 9 d d d d d f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . f d d d f . . . . . . 
        . . . . . f d f d f . . . . . . 
        . . . . . f d d d f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . f f f f f f f f f f f f f . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d f d d d d d f . . . . 
        . . . f d 9 d d d d d f . . . . 
        . . . f d 9 d d d d d f . . . . 
        . . . f f 9 d d d d d f . . . . 
        . . . f d 9 d d d d d f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f d d d f . . . . . . 
        . . . f d d d d d f f . . . . . 
        . . . f f f d d d f . . . . . . 
        . . . . . f f f d d f . . . . . 
        . . . . f . . f f f f . . . . . 
        `],
    200,
    true
    )
    lastpos = 2
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.floaty, function (sprite, otherSprite) {
    if (game.runtime() - timesinceenemyhit >= timebetweenenemydmg) {
        if (hasCupidsArrow < 1) {
            sprites.destroy(projectile)
        }
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
        timesinceenemyhit = game.runtime()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.floaty, function (sprite, otherSprite) {
    if (game.runtime() - lasthit >= timebetweenisiahdmg) {
        otherSprite.setStayInScreen(true)
        if (lastpos == 0) {
            otherSprite.setPosition(mySprite.x + 8, mySprite.y - 30)
        } else if (lastpos == 1) {
            otherSprite.setPosition(mySprite.x - 8, mySprite.y + 30)
        } else if (lastpos == 2) {
            otherSprite.setPosition(mySprite.x - 30, mySprite.y - 8)
        } else if (lastpos == 3) {
            otherSprite.setPosition(mySprite.x + 30, mySprite.y - 8)
        }
    }
    lasthit = game.runtime()
    statusbarisiah.value += -1
})
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    if (currentroom == 3 && enemies > 0) {
        headlessman = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . f f f d 2 2 2 d f f f . . . 
            . . f d d d d 2 d d d d f . . . 
            . . . f f d d d d d f f . . . . 
            . . . . f d d d d d f . . . . . 
            . . . . f d d f d d f . . . . . 
            . . . . . f f . f f . . . . . . 
            `, spritehappyman, 0, 0)
        headlessman.setKind(SpriteKind.headless)
        headlessstatus = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
        headlessstatus.max = 3
        headlessstatus.attachToSprite(headlessman)
        sprites.destroy(spritehappyman)
        headlessman.follow(mySprite, 15)
    }
    if (currentroom != 3) {
        enemies += -1
        sprites.destroy(status.spriteAttachedTo(), effects.disintegrate, 100)
    }
})
sprites.onDestroyed(SpriteKind.cupidsarrow, function (sprite) {
    hasCupidsArrow = 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.floaty2, function (sprite, otherSprite) {
    if (game.runtime() - timesinceenemyhit >= timebetweenenemydmg) {
        if (hasCupidsArrow < 1) {
            sprites.destroy(projectile)
        }
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
        timesinceenemyhit = game.runtime()
    }
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    music.stopAllSounds()
    lastpos = 4
    sprites.destroyAllSpritesOfKind(SpriteKind.floaty)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.floaty2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.item)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.StatusBar)
    sprites.destroyAllSpritesOfKind(SpriteKind.cupidsarrow)
    tiles.setCurrentTilemap(tilemap`level26`)
    scene.setBackgroundImage(img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555555555555555555555555555555555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555544444444555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555444444444444444444455555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555444444444444444444444444444455555555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff55555444444444444444444444444444444444455555555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff555555444444444444444444444444444444444444455555fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff555555444444444444444444444444444444444444455555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555544444444444444444444444444444444455555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555554444444444444444444444444445555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555544444444444444444444445555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff555555555555555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff5555555555555555555ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    gameoverisiah = sprites.create(img`
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
        `, SpriteKind.death)
    gameoverisiah.setPosition(78, 55)
    mySprite.setVelocity(0, 0)
    if (lastpos == 4) {
        animation.runImageAnimation(
        gameoverisiah,
        [img`
            . . . . . f f f f f f f . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . f f f f f f f f f f f f f . . 
            . . . . f d d d d d d d f . . . . 
            . . . . f d d d d d d d f . . . . 
            . . . . f d f d d d f d f . . . . 
            . . . . f d 9 d d d 9 d f . . . . 
            . . . . f d 9 d d d 9 d f . . . . 
            . . . f f d 9 f f f 9 d f f . . . 
            . . . f d f 9 f f f 9 f d f . . . 
            . . . f d d f f f f f d d f . . . 
            . . . f f d d d d d d d f f . . . 
            . . . . . f d d d d d f . . . . . 
            . . . . . f d d d d d f . . . . . 
            . . . . . f d d f d d f . . . . . 
            . . . . . f f f . f f f . . . . . 
            `,img`
            . . . . . . . f f f f f f f . . . 
            . . . . . . . f f f f f f f . . . 
            . . . . . . . 2 2 2 2 2 2 2 . . . 
            . . . . f f f f f f f f f f f f f 
            . . . . . . f d d d d d d d f . . 
            . . . . . . f d d d d d d d f . . 
            . . . . . . f d f d d d f d f . . 
            . . . . . . f d 9 d d d 9 d f . . 
            . . . . . . f d 9 d d d 9 d f . . 
            . . . . . f f d 9 f f f 9 d f f . 
            . . . . . f d f 9 f f f 9 f d f . 
            . . . . . f d d f f f f f d d f . 
            . . . . . f f d d d d d d d f f . 
            . . . . . . . f d d d d d f . . . 
            . . . . . . . f d d d d d f . . . 
            . . . . . . . f d d f d d f . . . 
            . . . . . . . f f f . f f f . . . 
            `,img`
            . . . . . f f f f f f f . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . f f f f f f f f f f f f f . . 
            . . . . f d d d d d d d f . . . . 
            . . . . f d d d d d d d f . . . . 
            . . . . f d f d d d f d f . . . . 
            . . . . f d 9 d d d 9 d f . . . . 
            . . . . f d 9 d d d 9 d f . . . . 
            . . . f f d 9 f f f 9 d f f . . . 
            . . . f d f 9 f f f 9 f d f . . . 
            . . . f d d f f f f f d d f . . . 
            . . . f f d d d d d d d f f . . . 
            . . . . . f d d d d d f . . . . . 
            . . . . . f d d d d d f . . . . . 
            . . . . . f d d f d d f . . . . . 
            . . . . . f f f . f f f . . . . . 
            `,img`
            . . . f f f f f f f . . . . . . . 
            . . . f f f f f f f . . . . . . . 
            . . . 2 2 2 2 2 2 2 . . . . . . . 
            f f f f f f f f f f f f f . . . . 
            . . f d d d d d d d f . . . . . . 
            . . f d d d d d d d f . . . . . . 
            . . f d f d d d f d f . . . . . . 
            . . f d 9 d d d 9 d f . . . . . . 
            . . f d 9 d d d 9 d f . . . . . . 
            . f f d 9 f f f 9 d f f . . . . . 
            . f d f 9 f f f 9 f d f . . . . . 
            . f d d f f f f f d d f . . . . . 
            . f f d d d d d d d f f . . . . . 
            . . . f d d d d d f . . . . . . . 
            . . . f d d d d d f . . . . . . . 
            . . . f d d f d d f . . . . . . . 
            . . . f f f . f f f . . . . . . . 
            `,img`
            . . . . . f f f f f f f . . . . . 
            . . . . . f f f f f f f . . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . . 
            . . f f f f f f f f f f f f f . . 
            . . . . f d d d d d d d f . . . . 
            . . . . f d d d d d d d f . . . . 
            . . . . f d f d d d f d f . . . . 
            . . . . f d 9 d d d 9 d f . . . . 
            . . . . f d 9 d d d 9 d f . . . . 
            . . . f f d 9 f f f 9 d f f . . . 
            . . . f d f 9 f f f 9 f d f . . . 
            . . . f d d f f f f f d d f . . . 
            . . . f f d d d d d d d f f . . . 
            . . . . . f d d d d d f . . . . . 
            . . . . . f d d d d d f . . . . . 
            . . . . . f d d f d d f . . . . . 
            . . . . . f f f . f f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . f d d f f f f f f f . . . 
            f f f f d d f d d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            . f d d d f f f d d d d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f f f f d d f d d d d d d f 2 f f 
            . . . . f d d f f f f f f f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . f d d f f f f f f f . . . 
            f f f f d d f d d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            . f d d d f f f d d d d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f f f f d d f d d d d d d f 2 f f 
            . . . . f d d f f f f f f f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . f d d f f f f f f f . . . 
            f f f f d d f d d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            . f d d d f f f d d d d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f f f f d d f d d d d d d f 2 f f 
            . . . . f d d f f f f f f f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . f d d f f f f f f f . . . 
            f f f f d d f d d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            . f d d d f f f d d d d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f f f f d d f d d d d d d f 2 f f 
            . . . . f d d f f f f f f f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . f d d f f f f f f f . . . 
            f f f f d d f d d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            . f d d d f f f d d d d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f f f f d d f d d d d d d f 2 f f 
            . . . . f d d f f f f f f f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . f d d f f f f f f f . . . 
            f f f f d d f d d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            . f d d d f f f d d d d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f f f f d d f d d d d d d f 2 f f 
            . . . . f d d f f f f f f f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . f d d f f f f f f f . . . 
            f f f f d d f d d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            . f d d d f f f d d d d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f f f f d d f d d d d d d f 2 f f 
            . . . . f d d f f f f f f f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . f d d f f f f f f f . . . 
            f f f f d d f d d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            . f d d d f f f d d d d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f f f f d d f d d d d d d f 2 f f 
            . . . . f d d f f f f f f f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . f d d f f f f f f f . . . 
            f f f f d d f d d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            . f d d d f f f d d d d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f f f f d d f d d d d d d f 2 f f 
            . . . . f d d f f f f f f f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . f d d f f f f f f f . . . 
            f f f f d d f d d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            . f d d d f f f d d d d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f f f f d d f d d d d d d f 2 f f 
            . . . . f d d f f f f f f f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . f d d f f f f f f f . . . 
            f f f f d d f d d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            . f d d d f f f d d d d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f f f f d d f d d d d d d f 2 f f 
            . . . . f d d f f f f f f f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . f d d f f f f f f f . . . 
            f f f f d d f d d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            . f d d d f f f d d d d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f f f f d d f d d d d d d f 2 f f 
            . . . . f d d f f f f f f f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . f d d f f f f f f f . . . 
            f f f f d d f d d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            . f d d d f f f d d d d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f f f f d d f d d d d d d f 2 f f 
            . . . . f d d f f f f f f f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . f d d f f f f f f f . . . 
            f f f f d d f d d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            . f d d d f f f d d d d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f f f f d d f d d d d d d f 2 f f 
            . . . . f d d f f f f f f f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . f d d f f f f f f f . . . 
            f f f f d d f d d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            . f d d d f f f d d d d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f f f f d d f d d d d d d f 2 f f 
            . . . . f d d f f f f f f f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . f d d f f f f f f f . . . 
            f f f f d d f d d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            . f d d d f f f d d d d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f f f f d d f d d d d d d f 2 f f 
            . . . . f d d f f f f f f f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . f d d f f f f f f f . . . 
            f f f f d d f d d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            . f d d d f f f d d d d d f 2 f f 
            f d d d d f f f d d d d d f 2 f f 
            f d d d d f 9 9 9 9 f d d f 2 f f 
            f f f f d d f d d d d d d f 2 f f 
            . . . . f d d f f f f f f f . . . 
            . . . . f f f f . . . . . f . . . 
            . . . . . . . . . . . . . f . . . 
            . . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.UntilDone)
        pause(2000)
        sprites.destroyAllSpritesOfKind(SpriteKind.death)
        scene.setBackgroundImage(img`
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffdddfffdddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffdddfdddfdddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffdddfdddfddffffddddffdddddddddbddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffdddfdddfdfddddddbfdfddffdddbbbddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffddfdddfddfddddddfbdfdfdfddbddddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffddfdffdddffddddfdddfdfdfddbddddddfffdddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffddffffddddfffdddffffdfdfddddddddddfddfdddfddddffddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffddfddddddffddddfdddfdfdfddddddddddfddfdddfddddffddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffddddddbddddfddffdddfdfdffdddddddddfddfddfddddfdfdddffdddddddddddddddddddddfffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffddddddbddbdbdddddddddfddfdbdddddddfddfddfdddfddfddfffddfddfddddddddddddbddfffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffddddddbddbdbbddbbbbddbbbbbbddddddfddffddfddfffffddfdfddffdfddddddddbdddbddfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffdddddddbddbfddddbdbbbdbbbbbdddddddffffddffdfddddfddfdfdddfffddddddddbdddbddfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffdddddddfddffddddbbbbbbbbbbddbbdddddddddddddfddddfdfdfdddddfdddddddddbdddbdffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffddddddfbdddbdffdbbbbbbbbbdddddddddddddddddddddddddfddfdddffdddddddddbdddbdffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffddddddfbdddbfffdfbbbbbbdbffddddddddddddddddddddddddddddddfddddddddddbddbddffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffdddddffdbddffdfffdbbbbbddfffdddddddddddddddddddddddddddddfddddddddddddbdddffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffddddddfddbdffddfffddbbbbdfddfddfffdddffddddfddddddddddddddddddfdddddddbddddffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffdddddddddbdfdbdfdfddbbbbdfddfddfddddfffdddffffdddddddddddddddfddddddddbddddffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffdddddddddbdddbdddfddbbbbdfdffdfffdddfdfdddfddfddddddddddddddffddddddddddddfffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffdddddddddbddddddddddbbbbdffdddfddddfdffdddfddfddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffdddddddddbddddddddddbdbdddddddffddfdddfdddfddfddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffddddddddddbddddddddddbbbddddddddffddddddddffdffddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffdddddfffddddddddddddddddddddddddddddddddddfdffdddddddddddddddddddbbddddddddfffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffdddddfddffddddddddddddddddddddddddddddddddfffddddddddddddddddddddbbddddddddfffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffdddddfdddfdddfddddbbddddddddddddddddddddddddddddfdddddddddddbbdddbbddbbddbdfffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffddddfddddfddfdffdddffddddddddddddddddddddddddddddddddddddddddbbddbbbbbbddbffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffdddddfdddfdddfdddddfdfddfffddddddddddddddddddddddddddddddddddddbddbbbbdddddffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffdddddfdddfddfffddddfdfddfddfddddddddddddddddddddddddddddddddddddddbbbddddddffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffddddfdddfdddfddfddfddfddfddfddddddffdddddddddddddddddddddddddddddbbbbddddddffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffdddddfffdddffdddddffffdfdddfddddddffdddddddddddddddddddddddddddddbdbbbdddddffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffdddddddddddffffddfddfddfffffdddddfddfdffddddddfdddfddddddddddddddbdbbbbddddffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddfdddddddddddfdfffdfdddddddfdddfddffddddddddddbdbbbbdddfffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddfdddffdffddddddffddfdfddfddfddddfbbddddddbdfffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddffddfdddddfddffddfdddddfddddfddddddddbdfffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddfdffdddddfdddfddffdddffdddffddddddddbdfffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddfddddfdffddddfddddfdddddddddddfffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddfddffffdffddddfdddddddddddfffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffdffddddddddddffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffddddddddffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfdddddffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddddddddddddddffffffffffffffdddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddddddfffff1111111111111fffffddddddddddddddddddbbbbdddddddffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddddffff11111111111111111111111ffddddddddddddddbbddddbdddddfffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffddddddddddddddddddff11111111111111111111111111111ffddddddddddddbddddddbddddfffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddf111111111111111111111111111111111fddddddddddbdddddddbddddfffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffdddddddddddddddff11111111111111111111111111111111111fdddddddddbbddddddbddddfffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffdddddddddddddddff1111111111111111111111111111111111111ffddddddddbddddddbddddfffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffddddddddddddddff11111111111111111111111111111111111111ffddddddddbdddddbdddddfffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffdddddddddddddff1111111111111111111111111111111111111111fddddbbddbbddddbddddffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffddddddddddddff11111111111111111111111111111111111111111fddddddbbdbbbbbdddddffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffddddddddddddf111111111111111111111111111111111111111111ffdddddddbbdddddddddffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffddddddddddddf11111111111111111111111111111111111111111111fdddddddbdbddddddddffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffdddddddddddf111111111111111111111111111111111111111111111fdddddddbdbddddddddffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffddddddddddff111111111111111111111111111111111111111111111fffdddddbddddddddddffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffddddddddddf1111111111111111111f11111111111111111111ffff111ffdddddbddddddddddffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffdddddddddd1111111111111111111ff11111111fff11111111ffffff11fddddbbbdddddddddfffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffdddddddbddf1111111111111111111f1111111fffff11111111ffffff1ffdddbbdbdddddddddfffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffdddddddbddf111111111111111111ff11111fffffff11111ff1ffffff1fddddddddbddddddddfffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffdddddddbddf111111111111111111f1111fffffffff11111fff1fffff1fddddddddbddddddddfffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffddddddddbdff1111111111111111ff111ffffffffff1111ffff11ffff1fdddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffddddddddbddf1111111111111111ff111fffffffffff111fffff1ffff1fdddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffdddddddddbddf11111111111111111f111fffffffffff11ffffff1ffff1ffdddddddddbbdbbdffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffdddddddddbddff1111111111111111ff11fffffffffff11fffffff1fff11ffddddddddbbdbdbffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffddddddddddbddf11f1111111111111ff11fffffffffff11fffffff1111111fddddddddbdbbbbffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffddddddddddbddf11f1111111111111ff11fffffffff1111ffff1fff111111fddddddddbbbbbdffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffddddddddddbddf1f1111111111111fff111111111111111fff111ff111111fdddddddddbbbddffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffdddddddddddbddff111111111111fff11111111111111111ff11f11111111ffddddddddddddddffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffddddddddddddbddf11111111111ff11111111111111111111111ff111111ffddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffddddddddddddbddf11111111ff111f111111111111111111111111f11111ffddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffdddddddddddddbddf111111fff111f11111fffff11111111111111ff11111ffdddddddddddddfffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffdddddddddddddbddf1111111f11111f1111ffff11111111111111111111111fdddddddddddddfffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffdddddddddddddddddff11111111ffffff111ffff11ffff11111111111111ffffdddddddddddddfffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffddddddddddddddddddff1111111ffffff111ffff111fff11ffffffffffff1f1fdddddddddddddfffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffddddddddddddddddddffff111111ffffff111111111fff1ff1111f111f111f1fddddddddddddffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffddddddddddddddddddffffffffffffffff111111111ffff11f111f111ff11fffddddddddddddffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffdddbbbbbbbbdddddddddffffffffffffff11111111ffff1f1f111f1111f111fdddddddddddddffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffdddddddbbbddbbdddddddddffffffffffff11111111ffff1f1f1fffffffffff1dddddddddddddffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffdddddddddbdddbddddddddddddddddddddf11111111ffffff1ff111f11f11f1fdddddddddddddffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffddddddddddbdddbdddddddddddddddddddf11111111f11f1ffff111f11f11f1fdddddddddddddffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffdddddddddddbdddbddddddddddddddddddf11111111f11f11f1f111f1fffffffddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffddddddddddddddddbdddddddddddddddddf1f111111ffff11f1ffffff111111fddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffdddffffddddddddddbbddddddddddddddddf1f11111111f1ffffff1111111111fddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffdddfddfddddddbbddbbddddddddddddddddf1f111111111111111111111111111fdddddddddddfffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffddfdddddddddddbbdbbddddddddddddddddff1111111111111111111111111111fdddddddddddfffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffddfdfddddffdddbbdbbdfffddddddddddddddfff1111111111111111111111111fdddddddddddfffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffddfdffdffdfddffffbbdfdffdddffddddddddddffff1111111111111111111111fddddddddddffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffdddffffdffddfdfdbfbbfdddfdddfffdfddddddddddffff1111111111111111111fddddddddddffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffddddffdddfffdddfbfbbfdddfddfdfdddfdfddddddddddffff11111111111111fffddddddddddffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffdddddddddddddddffbdffdffdddfdffddffdddfffddddddbbffffffffffffffffddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffddddddddddddddddbbdbffdddddfddfdddfddddddddbbbbddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffddddddddddddddddbbdbdddddddfffdddfdddfdddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffddddddddddddddddbbbddddddddddddddfdddffffddddfdddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffddddddddddddbbbbddddddddddddddddddfdddddddfdddffddffdfffddfffddfdddddddddfffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffddddddbbbbddddddddddddddddddffffdddddfddffdfddffdfddfdfddfddddffdddfffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffddddbddddddddddddddfddddddddddddfffdffdddffffdfdfddfddddfdfdddfffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddddfdffddddddddddddddddddddddfdfddfddddfdfdddfffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddffdddfffdfddffdddddddddddddddfdfdddfbbfdddfffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddfddfddfdfddffdddfffddddddddddddddffdffffdddfffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddfffdfdfddfddfddfddddddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddfdffdfdddfdfffddfffdddddbddddffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddfffddfffddddffdfddddddbdddffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddfdddffffddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddddddddddddffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddddfffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            `)
        gameoverscreen = 1
        music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.LoopingInBackground)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . f f f f f f f f f f f f f . 
        . . . . f d d d d d d d f . . . 
        . . . . f d d d d d d d f . . . 
        . . . . f d d d d d f d f . . . 
        . . . . f d d d d d 9 d f . . . 
        . . . . f d d d d d 9 d f . . . 
        . . . . f d d d d d 9 f f . . . 
        . . . . f d d d d d 9 d f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . f d d d f . . . . . 
        . . . . . . f d f d f . . . . . 
        . . . . . . f d d d f . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . f . . . . . . . 
        `,img`
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . f f f f f f f f f f f f f . 
        . . . . f d d d d d d d f . . . 
        . . . . f d d d d d d d f . . . 
        . . . . f d d d d d f d f . . . 
        . . . . f d d d d d 9 d f . . . 
        . . . . f d d d d d 9 d f . . . 
        . . . . f d d d d d 9 f f . . . 
        . . . . f d d d d d 9 d f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . f f d d d f . . . . . 
        . . . . f d d d d d f f . . . . 
        . . . . f f f d d d f . . . . . 
        . . . . . . f f f d d f . . . . 
        . . . . . f . . f f f f . . . . 
        `,img`
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . f f f f f f f f f f f f f . 
        . . . . f d d d d d d d f . . . 
        . . . . f d d d d d d d f . . . 
        . . . . f d d d d d f d f . . . 
        . . . . f d d d d d 9 d f . . . 
        . . . . f d d d d d 9 d f . . . 
        . . . . f d d d d d 9 f f . . . 
        . . . . f d d d d d 9 d f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . f d d d f . . . . . 
        . . . . . . f d f d f . . . . . 
        . . . . . . f d d d f . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . f . . . . . . . 
        `,img`
        . . . . . f f f f f f f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . f f f f f f f f f f f f f . 
        . . . . f d d d d d d d f . . . 
        . . . . f d d d d d d d f . . . 
        . . . . f d d d d d f d f . . . 
        . . . . f d d d d d 9 d f . . . 
        . . . . f d d d d d 9 d f . . . 
        . . . . f d d d d d 9 f f . . . 
        . . . . f d d d d d 9 d f . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . f d d d f f . . . . 
        . . . . . f f d d d d d f . . . 
        . . . . . . f d d d f f f . . . 
        . . . . . f d d f f f . . . . . 
        . . . . . f f f f . . f . . . . 
        `],
    200,
    true
    )
    lastpos = 3
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.floaty2, function (sprite, otherSprite) {
    if (game.runtime() - lasthit >= timebetweenisiahdmg) {
        otherSprite.setStayInScreen(true)
        if (lastpos == 0) {
            otherSprite.setPosition(mySprite.x + 8, mySprite.y - 30)
        } else if (lastpos == 1) {
            otherSprite.setPosition(mySprite.x - 8, mySprite.y + 30)
        } else if (lastpos == 2) {
            otherSprite.setPosition(mySprite.x - 30, mySprite.y - 8)
        } else if (lastpos == 3) {
            otherSprite.setPosition(mySprite.x + 30, mySprite.y - 8)
        }
    }
    lasthit = game.runtime()
    statusbarisiah.value += -1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . f f f f f f f f f f f f f . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d f d d d f d f . . . . 
        . . . f d 9 d d d 9 d f . . . . 
        . . . f d 9 d d d 9 d f . . . . 
        . . . f d 9 f f f 9 d f . . . . 
        . . . f d 9 d d d 9 d f . . . . 
        . . . . f f f f f f f . . . . . 
        . . f f d d d d d d d f f . . . 
        . . f d d d d d d d d d f . . . 
        . . f f f d d d d d f f f . . . 
        . . . . f d d f d d f . . . . . 
        . . . . f f f . f f f . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . f f f f f f f f f f f f f . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d f d d d f d f . . . . 
        . . . f d 9 d d d 9 d f . . . . 
        . . . f d 9 d d d 9 d f . . . . 
        . . . f d 9 f f f 9 d f . . . . 
        . . . f d 9 d d d 9 d f . . . . 
        . . f f f f f f f f f . . . . . 
        . . f d d d d d d d f . . . . . 
        . . f d d d d d d d d f . . . . 
        . . f f f d d d d d f . . . . . 
        . . . . f d d f f f f . . . . . 
        . . . . f f f . . f . . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . f f f f f f f f f f f f f . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d f d d d f d f . . . . 
        . . . f d 9 d d d 9 d f . . . . 
        . . . f d 9 d d d 9 d f . . . . 
        . . . f d 9 f f f 9 d f . . . . 
        . . . f d 9 d d d 9 d f . . . . 
        . . . . f f f f f f f . . . . . 
        . . f f d d d d d d d f f . . . 
        . . f d d d d d d d d d f . . . 
        . . f f f d d d d d f f f . . . 
        . . . . f d d f d d f . . . . . 
        . . . . f f f . f f f . . . . . 
        `,img`
        . . . . f f f f f f f . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . 2 2 2 2 2 2 2 . . . . . 
        . f f f f f f f f f f f f f . . 
        . . . f d d d d d d d f . . . . 
        . . . f d d d d d d d f . . . . 
        . . . f d f d d d f d f . . . . 
        . . . f d 9 d d d 9 d f . . . . 
        . . . f d 9 d d d 9 d f . . . . 
        . . . f d 9 f f f 9 d f . . . . 
        . . . f d 9 d d d 9 d f . . . . 
        . . . . f f f f f f f f f . . . 
        . . . . f d d d d d d d f . . . 
        . . . f d d d d d d d d f . . . 
        . . . . f d d d d d f f f . . . 
        . . . . f f f f d d f . . . . . 
        . . . . . f . . f f f . . . . . 
        `],
    200,
    true
    )
    lastpos = 1
})
function addItem () {
    if (Math.percentChance(100)) {
        item = sprites.create(img`
            . . . . . . . f . . . . . . . . 
            . . . . . . f b f . . . . . . . 
            . . . . . f f b f f . . . . . . 
            . . . . . f b b b f . . . . . . 
            . . . . . f b b b f . . . . . . 
            . . . . f b b b b b f . . . . . 
            . . . . f b b b b b f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . . f . . . . . . . . 
            . . . . . . f f f . . . . . . . 
            . . . . . f 2 f 2 f . . . . . . 
            . . . . f 2 2 f 2 2 f . . . . . 
            . . . . f 2 2 f 2 2 f . . . . . 
            . . . . f 2 f f f 2 f . . . . . 
            . . . . f f . . . f f . . . . . 
            `, SpriteKind.cupidsarrow)
        item.setPosition(78, 55)
        animation.runImageAnimation(
        item,
        [img`
            ....................
            ....................
            ..........f.........
            .........fbf........
            ........ffbff.......
            ........fbbbf.......
            ........fbbbf.......
            .......fbbbbbf......
            .......fbbbbbf......
            .......fffffff......
            ..........f.........
            ..........f.........
            .........fff........
            ........f2f2f.......
            .......f22f22f......
            .......f22f22f......
            .......f2fff2f......
            .......ff...ff......
            ....................
            ....................
            `,img`
            ....................
            ..........f.........
            .........fbf........
            ........ffbff.......
            ........fbbbf.......
            ........fbbbf.......
            .......fbbbbbf......
            .......fbbbbbf......
            .......fffffff......
            ..........f.........
            ..........f.........
            .........fff........
            ........f2f2f.......
            .......f22f22f......
            .......f22f22f......
            .......f2fff2f......
            .......ff...ff......
            ....................
            ....................
            ....................
            `,img`
            ..........f.........
            .........fbf........
            ........ffbff.......
            ........fbbbf.......
            ........fbbbf.......
            .......fbbbbbf......
            .......fbbbbbf......
            .......fffffff......
            ..........f.........
            ..........f.........
            .........fff........
            ........f2f2f.......
            .......f22f22f......
            .......f22f22f......
            .......f2fff2f......
            .......ff...ff......
            ....................
            ....................
            ....................
            ....................
            `,img`
            ..........f.........
            .........fbf........
            ........ffbff.......
            ........fbbbf.......
            ........fbbbf.......
            .......fbbbbbf......
            .......fbbbbbf......
            .......fffffff......
            ..........f.........
            ..........f.........
            .........fff........
            ........f2f2f.......
            .......f22f22f......
            .......f22f22f......
            .......f2fff2f......
            .......ff...ff......
            ....................
            ....................
            ....................
            ....................
            `,img`
            ....................
            ..........f.........
            .........fbf........
            ........ffbff.......
            ........fbbbf.......
            ........fbbbf.......
            .......fbbbbbf......
            .......fbbbbbf......
            .......fffffff......
            ..........f.........
            ..........f.........
            .........fff........
            ........f2f2f.......
            .......f22f22f......
            .......f22f22f......
            .......f2fff2f......
            .......ff...ff......
            ....................
            ....................
            ....................
            `,img`
            ....................
            ....................
            ..........f.........
            .........fbf........
            ........ffbff.......
            ........fbbbf.......
            ........fbbbf.......
            .......fbbbbbf......
            .......fbbbbbf......
            .......fffffff......
            ..........f.........
            ..........f.........
            .........fff........
            ........f2f2f.......
            .......f22f22f......
            .......f22f22f......
            .......f2fff2f......
            .......ff...ff......
            ....................
            ....................
            `],
        500,
        true
        )
    } else if (Math.percentChance(20)) {
    	
    } else if (Math.percentChance(25)) {
        item = sprites.create(img`
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
            `, SpriteKind.item)
        animation.runImageAnimation(
        mySprite,
        [img`
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
            `],
        500,
        true
        )
    } else if (Math.percentChance(35)) {
        item = sprites.create(img`
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
            `, SpriteKind.item)
        animation.runImageAnimation(
        mySprite,
        [img`
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
            `],
        500,
        true
        )
    } else if (Math.percentChance(10)) {
        item = sprites.create(img`
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
            `, 0)
        animation.runImageAnimation(
        mySprite,
        [img`
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
            `],
        500,
        true
        )
    }
}
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (game.runtime() - last_pressed >= tear_rate * 20) {
        if (lastpos == 0) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, -75)
            timer.after(750, function () {
                sprites.destroy(projectile, effects.disintegrate, 100)
            })
        } else if (lastpos == 1) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 0, 75)
            timer.after(750, function () {
                sprites.destroy(projectile, effects.disintegrate, 100)
            })
        } else if (lastpos == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -75, 0)
            timer.after(750, function () {
                sprites.destroy(projectile, effects.disintegrate, 100)
            })
        } else if (lastpos == 3) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f 9 9 9 f . . . . . . 
                . . . . . f f f f f . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 75, 0)
            timer.after(750, function () {
                sprites.destroy(projectile, effects.disintegrate, 100)
            })
        }
        last_pressed = game.runtime()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cupidsarrow, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.headless, function (sprite, otherSprite) {
    sprites.destroy(headlessman, effects.disintegrate, 200)
    enemies = 0
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenNorth, function (sprite, location) {
    if (currentroom == 1) {
        timesenteredroom3 += 1
        if (timesenteredroom3 == 1) {
            mySprite.setPosition(85, 100)
            happymaninroom = 1
            enemies = 2
            currentroom = 3
            previousroom = 1
            tiles.setCurrentTilemap(tilemap`level27`)
            spritehappyman = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f . . . . . 
                . . . f d d d d d d d f . . . . 
                . . . f d d d d d d d f . . . . 
                . . . f d f d d d f d f . . . . 
                . . . f d 2 d d d 2 d f . . . . 
                . . . f d f 1 1 1 f d f . . . . 
                . . . f d 2 f f f 2 d f . . . . 
                . . . f d 2 d d d 2 d f . . . . 
                . . . . f f f f f f f . . . . . 
                . . f f d d d d d d d f f . . . 
                . . f d d d d d d d d d f . . . 
                . . . f f d d d d d f f . . . . 
                . . . . f d d d d d f . . . . . 
                . . . . f d d f d d f . . . . . 
                . . . . . f f . f f . . . . . . 
                `, SpriteKind.Enemy)
            statusbar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
            statusbar.max = 5
            statusbar.attachToSprite(spritehappyman)
            spritehappyman.setPosition(33, 33)
            spritehappyman.follow(mySprite, 20)
        } else if (timesenteredroom3 >= 2) {
            mySprite.setPosition(85, 100)
            currentroom = 3
            tiles.setCurrentTilemap(tilemap`level30`)
            enemies = 0
            previousroom = 1
        }
    } else if (currentroom == 3) {
        timesenteredroom4 += 1
        if (timesenteredroom4 == 1) {
            mySprite.setPosition(85, 100)
            tiles.setCurrentTilemap(tilemap`level33`)
            enemies = 3
            currentroom = 4
            previousroom = 3
            headspitter = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f . . . . . 
                . . . f d d d d d d d f . . . . 
                . . f d d d d d d d d d f . . . 
                . f d d d d d d d d d d d f . . 
                . f d f f f d d d f f f d f . . 
                . f d f f f d d d f f f d f . . 
                . f d f f f d d d f f f d f . . 
                . f d 2 2 2 d d d 2 2 2 d f . . 
                . f d d 2 d d d d d 2 d d f . . 
                . f d d d d f f f d d d d f . . 
                . . f d d d d d d d d d f . . . 
                . . . f d d d d d d d f . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Enemy)
            headspitter2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f . . . . . 
                . . . f d d d d d d d f . . . . 
                . . f d d d d d d d d d f . . . 
                . f d d d d d d d d d d d f . . 
                . f d f f f d d d f f f d f . . 
                . f d f f f d d d f f f d f . . 
                . f d f f f d d d f f f d f . . 
                . f d 2 2 2 d d d 2 2 2 d f . . 
                . f d d 2 d d d d d 2 d d f . . 
                . f d d d d f f f d d d d f . . 
                . . f d d d d d d d d d f . . . 
                . . . f d d d d d d d f . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.floaty)
            headspitter3 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f . . . . . 
                . . . f d d d d d d d f . . . . 
                . . f d d d d d d d d d f . . . 
                . f d d d d d d d d d d d f . . 
                . f d f f f d d d f f f d f . . 
                . f d f f f d d d f f f d f . . 
                . f d f f f d d d f f f d f . . 
                . f d 2 2 2 d d d 2 2 2 d f . . 
                . f d d 2 d d d d d 2 d d f . . 
                . f d d d d f f f d d d d f . . 
                . . f d d d d d d d d d f . . . 
                . . . f d d d d d d d f . . . . 
                . . . . f f f f f f f . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.floaty2)
            headspitstatus = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
            headspit2status = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
            headspit3status = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
            headspitstatus.max = 4
            headspit2status.max = 4
            headspit3status.max = 4
            headspitstatus.attachToSprite(headspitter)
            headspit2status.attachToSprite(headspitter2)
            headspit3status.attachToSprite(headspitter3)
            headspitter.setPosition(35, 23)
            headspitter2.setPosition(80, 23)
            headspitter3.setPosition(125, 23)
            headspitter.follow(mySprite, 10)
            headspitter2.follow(mySprite, 10)
            headspitter3.follow(mySprite, 10)
        } else if (timesenteredroom4 >= 2) {
            mySprite.setPosition(85, 100)
            tiles.setCurrentTilemap(tilemap`level34`)
            currentroom = 4
            enemies = 0
            previousroom = 3
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (game.runtime() - timesinceenemyhit >= timebetweenenemydmg) {
        if (hasCupidsArrow < 1) {
            sprites.destroy(projectile)
        }
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -1
        timesinceenemyhit = game.runtime()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (game.runtime() - lasthit >= timebetweenisiahdmg) {
        otherSprite.setStayInScreen(true)
        if (lastpos == 0) {
            otherSprite.setPosition(mySprite.x + 8, mySprite.y - 30)
        } else if (lastpos == 1) {
            otherSprite.setPosition(mySprite.x - 8, mySprite.y + 30)
        } else if (lastpos == 2) {
            otherSprite.setPosition(mySprite.x - 30, mySprite.y - 8)
        } else if (lastpos == 3) {
            otherSprite.setPosition(mySprite.x + 30, mySprite.y - 8)
        }
    }
    lasthit = game.runtime()
    statusbarisiah.value += -1
})
// home (probably wont be done by end of school year) = 0
// base = 1
// treasure room to right of baseroom = 2
// room above baseoom = 3
// 2 up = 4
let roomclear = 0
let actbar: Sprite = null
let moving = false
let headspit3status: StatusBarSprite = null
let headspit2status: StatusBarSprite = null
let headspitstatus: StatusBarSprite = null
let headspitter3: Sprite = null
let headspitter2: Sprite = null
let headspitter: Sprite = null
let timesenteredroom4 = 0
let happymaninroom = 0
let item: Sprite = null
let gameoverscreen = 0
let gameoverisiah: Sprite = null
let headlessstatus: StatusBarSprite = null
let spritehappyman: Sprite = null
let headlessman: Sprite = null
let timebetweenisiahdmg = 0
let lasthit = 0
let hasCupidsArrow = 0
let timebetweenenemydmg = 0
let timesinceenemyhit = 0
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let enemies = 0
let myEnemy: Sprite = null
let timesenteredroom2 = 0
let projectile2: Sprite = null
let chargeyuh = 0
let activebarcharge = 0
let timesenteredroom3 = 0
let lastpos = 0
let tear_delay = 0
let tear_rate = 0
let last_pressed = 0
let currentroom = 0
let previousroom = 0
let statusbarisiah: StatusBarSprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111f1111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111f1111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111f1111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111f1111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111f1111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111f1111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111f1111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111fffffff1111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111f1111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111f1111111111f11111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111f1111111111f11111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111f1111111111f11111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111fff11111f11111111111111111111111111
    111111111111111111111111f1111111111f1111111111111111ffff11111111111111111111111f111111111111111111111111111111111111111111111f11f1111fff111111111111111111111111
    111111111111111111111111f1111111111f111111111111111ff11ff1111111111111111111111fff11111fffffff11111111fff11111111111111111111f1111111111111111111111111111111111
    111111111111111111111111f1111111111f11111111111111ff11ff1111111111111111111111111ff111ff11111f1111111ff111111111111111111111f11111111111111111111111111111111111
    111111111111111111111111f1111111111f11ffff1111111fffff1111111111111111111111111111ff11ffffffff111111ff111111111111111111f111f11111111111111111111111111111111111
    111111111111111111111111f1111111111fff111ff111111fff1111111111111111111111111111111f11f1111111111111f1111111111ff111111f1111f11111111f11111111111111111111111111
    111111111111111111111111f111111111fff11111f111111f111111111111111111111111111111111f11f1111111111111f11111111111f111111f1111f11111111f11111fff1111111ff111111111
    111111111111111111111111f111111111ff111111f111111f111111111111111111111111111111111f11f1111111111111ff11111111111f11111f1111f11111111f1111f11ff11111ff11f1111111
    1111111111111111111111111111111111f1111111ff111111f111111111111111111111111111ff111f11f11111111111111ff11111111111f111ff1111111111111f111f1111ff1111f111f1111111
    1111111111111111111111111111111111111111111f111111ff111111111111111111111111111fffff111fff111111111111ffff111111111ffff1111111111111ff111f11111f1111fffff1111111
    1111111111111111111111111111111111111111111111111111ff11111111111111111111111111111111111fffff11111111111111111111111111111111111111f1111111111f11111111f1111111
    11111111111111111111111111111111111111111111111111111ffffff111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ff11111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffffff111111111
    11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111ff111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111111111111f1ff11111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111ff111f1111111111111111111111f1111111111111111ff11111111111111111f1111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111f111111111111111111111111111ff111111111111111ff11111111111111111f1111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111f1111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111f1111111111111111111111111111f1111111111111111111111111111111111111111111
    11111111111111111111111111111111111111fff1111111111f11111111111111111111111111111111111f1111111111111111111111111111f1111111111111111111111111111111111111111111
    1111111111111111111111111111111111111ff1ff111111111f1111111111111111111111111111111111f111111111111111111fff11111111f1111111111111111111111111111111111111111111
    111111111111111111111111111111111111f1111f111111111ffffff11111111111111111111111f11111f11111111111f11111ff11f1111111f1111111111111111111111111111111111111111111
    11111111111111111111111111111111111ff1111f111111111f1111111111111111111111111111f11111ff1111111111f1111ff111f1111111f1111111111111111111111111111111111111111111
    11111111111111111111111111111111111f111111f11111111f1111111111111111111111111111f111111ff111111111f111f1111f1f111111ffff1111111111111111111111111111111111111111
    1111111111111111111111111111111111111ff111f11111111f1111111111111111111111111111f11111111ff111111f111ff111ff1ff1111ff111f111111111111111111111111111111111111111
    11111111111111111111111111111111111111fffff11111111f1111111111111111111111111111f1111111111f11111f111f111ff111f1111f11111f11111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111f1111111111111111111111111111f11111111111f1111f1111ffff111111111111111f11111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111ff1111f111111111111111111111111f1111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111fffff11111f11111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f11111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111f111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111222222222222222222222222222222222222222222222222222211111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111
    11111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111
    1111111111111111111111111fffddddddddddddddddddddddddddddddddddddddddddddddddddddfff11111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111fffdddfffffffffffffffffffddddddddffffffffffffffffffddddfff11111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111fffdddffffff11ffffffffffffffffdddfffff1111ffffffffffffffffdddff111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111fffdddfff111ffffffffffffffffffdddfff11ffffffffffffffffffffdddff111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111fffdddfff111ffffffffffffffffffdddfff11ffffffffffffffffffffdddff111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111fffdddffffffffffffffffffffffffdddfffffffffffffffffffffffffdddff111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111fffdddffffffffffffffffffffffffdddfffffffffffffffffffffffffdddff111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111fffdddffffffffffffffffffffffffdddfffffffffffffffffffffffffdddff111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111fffdddffffffffffffffff111fffffdddffffffffffffffff111ffffffdddff111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111fffddddddfffffffffffffffffffddddddddffffffffffffffffffdddddddff111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111fffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111fffddddddddddddddddddddddddddddddddddddddddddddddddddddfff11111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111fffddddddddddddddddddddddddddddddddddddddddddddddddddddfff11111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111fffddddddddddddddddfffffffffffffddddddddddddddddffff11111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111fffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111
    1111111111111111111111111111111111ffdddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddffffffff111111111111111111111111111
    11111111111111111111111111111111111111111fffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffff111111111111111111111
    11111111111111111111111111111111111111111fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffff111111111111111111
    111111111111111111111111111111111111111ffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff111111111111111111
    111111111111111111111111111111111111111ffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff111111111111111111
    111111111111111111111111111111111111111ffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffff111111111111111
    111111111111111111111111111111111111111ffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff111111111111111
    111111111111111111111111111111111111111fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff111111111111111
    11111111111111111111111111111111111111111fffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff111111111111111
    11111111111111111111111111111111111111111fffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff111111111111111
    11111111111111111111111111111111111111111fffdddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffdddddddddddddddddddfff111111111111111
    11111111111111111111111111111111111111111fffddddddddddddddddddddfffffddddddddddddddddfff1111111111111fffddddddddddddddfffffdddddddddddddddddddfff111111111111111
    11111111111111111111111111111111111111111fffddddddddddddddddddddfffffddddddddddddddddfff1111111111111fffddddddddddddddfffffdddddddddddddddddddfff111111111111111
    11111111111111111111111111111111111111111fffddddddddddddddddddddfffffddddddddddddddddfff1111111111111fffddddddddddddddfffffffdddddddddddddddddfff111111111111111
    11111111111111111111111111111111111111111fffddddddddddddddddfffffffffffddddddddddddfffff1111111111111fffffddddddddddddff111ffffffdddddddddddddfff111111111111111
    11111111111111111111111111111111111111111fffddddddddddddddddffff11111ffddddddddddddff1111111111111111111ffdddddddddfffff11111ffffffddddddddffffff111111111111111
    11111111111111111111111111111111111111111ffffffddddddddfffff111111111fffffddddddfffff1111111111111111111ffffffffffffff1111111111111fffffffffff111111111111111111
    11111111111111111111111111111111111111111111ffffffffffffff1111111111111fffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
let silly = sprites.create(img`
    .................ffffffffffffffffffffffffffffffffffffffffffffffffffff................................................................
    .................ffffffffffffffffffffffffffffffffffffffffffffffffffff................................................................
    .................ffffffffffffffffffffffffffffffffffffffffffffffffffff................................................................
    .................ffffffffffffffffffffffffffffffffffffffffffffffffffff................................................................
    .................ffffffffffffffffffffffffffffffffffffffffffffffffffff................................................................
    .................ffffffffffffffffffffffffffffffffffffffffffffffffffff................................................................
    .................ffffffffffffffffffffffffffffffffffffffffffffffffffff................................................................
    .................ffffffffffffffffffffffffffffffffffffffffffffffffffff................................................................
    .................ffffffffffffffffffffffffffffffffffffffffffffffffffff................................................................
    .................2222222222222222222222222222222222222222222222222222................................................................
    .................ffffffffffffffffffffffffffffffffffffffffffffffffffff................................................................
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff........................................
    ..............fffddddddddddddddddddddddddddddddddddddddddddddddddddddfff.............................................................
    ..............fffdddfffffffffffffffffffddddddddffffffffffffffffffddddfff.............................................................
    ...........fffdddffffff11ffffffffffffffffdddfffff1111ffffffffffffffffdddff...........................................................
    ...........fffdddfff111ffffffffffffffffffdddfff11ffffffffffffffffffffdddff...........................................................
    ...........fffdddfff111ffffffffffffffffffdddfff11ffffffffffffffffffffdddff...........................................................
    ...........fffdddffffffffffffffffffffffffdddfffffffffffffffffffffffffdddff...........................................................
    ...........fffdddffffffffffffffffffffffffdddfffffffffffffffffffffffffdddff...........................................................
    ...........fffdddffffffffffffffffffffffffdddfffffffffffffffffffffffffdddff...........................................................
    ...........fffdddffffffffffffffff111fffffdddffffffffffffffff111ffffffdddff...........................................................
    ...........fffddddddfffffffffffffffffffddddddddffffffffffffffffffdddddddff...........................................................
    ...........fffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff...........................................................
    ..............fffddddddddddddddddddddddddddddddddddddddddddddddddddddfff.............................................................
    ..............fffddddddddddddddddddddddddddddddddddddddddddddddddddddfff.............................................................
    .................fffddddddddddddddddfffffffffffffddddddddddddddddffff................................................................
    ....................fffddddddddddddddddddddddddddddddddddddddddfffffffffffffffffffffffffffffffffffffffffffffffffffffff...............
    .......................ffdddddddddddddddddddddddddddddddddddfffdddddddddddddddddddddddddddddddddddddddddddddddddddffffffff...........
    ..............................fffffffffffffffffffffffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffffff.....
    ..............................fffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffff..
    ............................ffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff..
    ............................ffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfff..
    ............................ffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfffff
    ............................ffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    ............................fffffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    ..............................fffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    ..............................fffddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddff
    ..............................fffdddddddddddddddddddddddddddddddddddddddddffffffffffffffffffffffffffffffffffffffdddddddddddddddddddff
    ..............................fffddddddddddddddddddddfffffddddddddddddddddfff.............fffddddddddddddddfffffdddddddddddddddddddff
    ..............................fffddddddddddddddddddddfffffddddddddddddddddfff.............fffddddddddddddddfffffdddddddddddddddddddff
    ..............................fffddddddddddddddddddddfffffddddddddddddddddfff.............fffddddddddddddddfffffffdddddddddddddddddff
    ..............................fffddddddddddddddddfffffffffffddddddddddddfffff.............fffffddddddddddddff...ffffffdddddddddddddff
    ..............................fffddddddddddddddddffff.....ffddddddddddddff...................ffdddddddddfffff.....ffffffddddddddfffff
    ..............................ffffffddddddddfffff.........fffffddddddfffff...................ffffffffffffff.............fffffffffff..
    .................................ffffffffffffff.............fffffffff................................................................
    .....................................................................................................................................
    .....................................................................................................................................
    `, SpriteKind.menu)
silly.setPosition(78, 96)
silly.startEffect(effects.confetti, 4000)
pause(5000)
sprites.destroy(silly)
let glasscannon = sprites.create(img`
    ..............................
    ..............................
    ..............................
    .......ffffff.................
    .......ffffff.................
    .....ff.......................
    .....ff.......................
    .......ff.............ffff....
    .......ffffff.........ffff....
    .......ffffff...ffffff1111ff..
    .....ff111111fffffffff1111ff..
    .....ff111111fff111111bbbb11ff
    .....ffffffffbbb111111bbbb11ff
    .....ffffffffbbb111111bbbb11ff
    .....ffbbbbbb111111111cccc11ff
    .....ffbbbbbb111111111cccc11ff
    .....ffbbbbbb11111111111cc11ff
    .....ffbbbbbb11111111111cc11ff
    ...ff111111111111111111111ff..
    ...ff1111bbbb11111bbbb1111ff..
    .....ff11bbbb11111bbbb11ff....
    ...ffff111111bb1bbffffffff....
    ...ffff111111bb1bbffffffff....
    fffbbffff1111111ffbbbbbbff....
    fffbbffff1111111ffbbbbbbff....
    fffff..fffffffff..ffffff......
    fffff...ffffffff..ffffff......
    ..............................
    ..............................
    ..............................
    `, SpriteKind.active)
mySprite = sprites.create(img`
    . . . . f f f f f f f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . f f f f f f f f f f f f f . . 
    . . . f d d d d d d d f . . . . 
    . . . f d d d d d d d f . . . . 
    . . . f d f d d d f d f . . . . 
    . . . f d 9 d d d 9 d f . . . . 
    . . . f d 9 d d d 9 d f . . . . 
    . . . f d 9 f f f 9 d f . . . . 
    . . . f d 9 d d d 9 d f . . . . 
    . . . . f f f f f f f . . . . . 
    . . f f d d d d d d d f f . . . 
    . . f d d d d d d d d d f . . . 
    . . f f f d d d d d f f f . . . 
    . . . . f d d f d d f . . . . . 
    . . . . f f f . f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 40, 40)
statusbarisiah = statusbars.create(20, 4, StatusBarKind.Health)
statusbarisiah.max = 3
statusbarisiah.attachToSprite(mySprite)
previousroom = 0
currentroom = 1
tiles.setCurrentTilemap(tilemap`level1`)
last_pressed = 0
let T = 0
tear_rate = 30 / (tear_delay + 1)
if (T >= 0) {
    tear_delay = 16 - 6 * Math.sqrt(T * (1.3 + 1))
} else if (T < 0 && T > -0.77) {
    tear_delay = 16 - 6 * (Math.sqrt(T * (1.3 + 1)) - 6 * T)
} else if (T <= -0.77) {
    tear_delay = 16 - 6 * T
}
game.onUpdate(function () {
    moving = controller.left.isPressed() || (controller.right.isPressed() || (controller.up.isPressed() || controller.down.isPressed()))
    if (!(moving) && lastpos == 1) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f f f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . f f f f f f f f f f f f f . . 
            . . . f d d d d d d d f . . . . 
            . . . f d d d d d d d f . . . . 
            . . . f d f d d d f d f . . . . 
            . . . f d 9 d d d 9 d f . . . . 
            . . . f d 9 d d d 9 d f . . . . 
            . . . f d 9 f f f 9 d f . . . . 
            . . . f d 9 d d d 9 d f . . . . 
            . . . . f f f f f f f . . . . . 
            . . f f d d d d d d d f f . . . 
            . . f d d d d d d d d d f . . . 
            . . f f f d d d d d f f f . . . 
            . . . . f d d f d d f . . . . . 
            . . . . f f f . f f f . . . . . 
            `],
        500,
        true
        )
    } else if (!(moving) && lastpos == 0) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f f f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . f f f f f f f f f f f f f . . 
            . . . f d d d d d d d f . . . . 
            . . . f d d d d d d d f . . . . 
            . . . f d d d d d d d f . . . . 
            . . . f d d d d d d d f . . . . 
            . . . f d d d d d d d f . . . . 
            . . . f d d d d d d d f . . . . 
            . . . f d d d d d d d f . . . . 
            . . . . f f f f f f f . . . . . 
            . . f f d d d d d d d f f . . . 
            . . f d d d d d d d d d f . . . 
            . . f f f d d d d d f f f . . . 
            . . . . f d d f d d f . . . . . 
            . . . . f f f . f f f . . . . . 
            `],
        500,
        true
        )
    } else if (!(moving) && lastpos == 2) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f f f . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . 2 2 2 2 2 2 2 . . . . . 
            . f f f f f f f f f f f f f . . 
            . . . f d d d d d d d f . . . . 
            . . . f d d d d d d d f . . . . 
            . . . f d f d d d d d f . . . . 
            . . . f d 9 d d d d d f . . . . 
            . . . f d 9 d d d d d f . . . . 
            . . . f f 9 d d d d d f . . . . 
            . . . f d 9 d d d d d f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . f d d d f . . . . . . 
            . . . . . f d f d f . . . . . . 
            . . . . . f d d d f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . . . . . f . . . . . . . . 
            `],
        500,
        true
        )
    } else if (!(moving) && lastpos == 3) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . f f f f f f f . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . 2 2 2 2 2 2 2 . . . . 
            . . f f f f f f f f f f f f f . 
            . . . . f d d d d d d d f . . . 
            . . . . f d d d d d d d f . . . 
            . . . . f d d d d d f d f . . . 
            . . . . f d d d d d 9 d f . . . 
            . . . . f d d d d d 9 d f . . . 
            . . . . f d d d d d 9 f f . . . 
            . . . . f d d d d d 9 d f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . f d d d f . . . . . 
            . . . . . . f d f d f . . . . . 
            . . . . . . f d d d f . . . . . 
            . . . . . . f f f f f . . . . . 
            . . . . . . . . f . . . . . . . 
            `],
        500,
        true
        )
    }
})
forever(function () {
    if (activebarcharge == 0) {
        actbar = sprites.create(img`
            ................
            ................
            .....fffffff....
            .....fffffff....
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...fffffffffff..
            ...fffffffffff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...fffffffffff..
            ...fffffffffff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...fffffffffff..
            ...fffffffffff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            .....fffffff....
            .....fffffff....
            ................
            `, SpriteKind.activebar)
    } else if (activebarcharge == 1) {
        actbar = sprites.create(img`
            ................
            ................
            .....fffffff....
            .....fffffff....
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...fffffffffff..
            ...fffffffffff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...fffffffffff..
            ...fffffffffff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...fffffffffff..
            ...fffffffffff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            .....fffffff....
            .....fffffff....
            ................
            `, SpriteKind.activebar)
    } else if (activebarcharge == 2) {
        actbar = sprites.create(img`
            ................
            ................
            .....fffffff....
            .....fffffff....
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...fffffffffff..
            ...fffffffffff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...fffffffffff..
            ...fffffffffff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...fffffffffff..
            ...fffffffffff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            .....fffffff....
            .....fffffff....
            ................
            `, SpriteKind.activebar)
    } else if (activebarcharge == 3) {
        actbar = sprites.create(img`
            ................
            ................
            .....fffffff....
            .....fffffff....
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...ff2222222ff..
            ...fffffffffff..
            ...fffffffffff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...fffffffffff..
            ...fffffffffff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...fffffffffff..
            ...fffffffffff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            .....fffffff....
            .....fffffff....
            ................
            `, SpriteKind.activebar)
    } else if (activebarcharge == 4) {
        actbar = sprites.create(img`
            ................
            ................
            .....fffffff....
            .....fffffff....
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...fffffffffff..
            ...fffffffffff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...fffffffffff..
            ...fffffffffff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...fffffffffff..
            ...fffffffffff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            ...ff7777777ff..
            .....fffffff....
            .....fffffff....
            ................
            `, SpriteKind.activebar)
    }
    glasscannon.setPosition(37, 20)
    actbar.setPosition(42, 20)
    if (enemies == 0 && chargeyuh == 1) {
        chargeactive()
        if (enemies == 0) {
            for (let value of tiles.getTilesByType(assets.tile`myTile20`)) {
                tiles.setWallAt(value, false)
                tiles.setTileAt(value, assets.tile`myTile`)
            }
            for (let value of tiles.getTilesByType(assets.tile`myTile22`)) {
                tiles.setWallAt(value, false)
                tiles.setTileAt(value, sprites.dungeon.doorOpenSouth)
            }
            for (let value of tiles.getTilesByType(assets.tile`myTile16`)) {
                tiles.setWallAt(value, false)
                tiles.setTileAt(value, sprites.dungeon.doorOpenNorth)
            }
            for (let value of tiles.getTilesByType(sprites.dungeon.floorLight5)) {
                tiles.setWallAt(value, false)
                tiles.setTileAt(value, sprites.dungeon.floorLight5)
            }
            roomclear = 1
        } else if (enemies > 0) {
            chargeyuh = 1
            roomclear = 0
        }
    }
})
forever(function () {
    if (currentroom == 1) {
        enemies = 1
    }
})

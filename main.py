def on_overlap_tile(sprite, location):
    game.over(False, effects.melt)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile0
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite, location):
    game.over(True, effects.confetti)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
    """),
    on_overlap_tile2)

def on_up_pressed():
    if canavar.vy == 0:
        canavar.vy = -120
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

paraaaa: Sprite = None
canavar: Sprite = None
canavar = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(canavar, 100, 0)
scene.set_background_color(9)
tiles.set_tilemap(tilemap("""
    level3
"""))
scene.camera_follow_sprite(canavar)
canavar.ay = 200
canavar.say("I'm gonna WIN!", 5000)
for value in tiles.get_tiles_by_type(assets.tile("""
    myTile5
""")):
    paraaaa = sprites.create(img("""
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
        """),
        SpriteKind.player)
    tiles.place_on_tile(paraaaa, value)
    tiles.set_tile_at(value, assets.tile("""
        transparency16
    """))
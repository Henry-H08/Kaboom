const SPEED = 320

var shot = 0


const player = add([
	sprite("dinoo"),
	pos(center()),
	scale(SCALE/50 * 1.6),
	anchor('center'),
])


onKeyDown("a", () => {
	
	player.move(-SPEED, 0)
})

onKeyDown("d", () => {
	player.move(SPEED, 0)
})

onKeyDown("w", () => {
	player.move(0, -SPEED)
})

onKeyDown("s", () => {
	player.move(0, SPEED)
})




onMouseMove((pos) => {
	player.angle = pos.angle(player.pos) -180;

	
});


onKeyPress("space", () => {
	if (shot != 1) {
		const mb = add([
	        sprite("bal"),
	        pos(player.pos.x,player.pos.y),
	        area(),
		body(),
		anchor("center"),
		scale(SCALE/70 * 1.6),
		move(toWorld(mousePos()).sub(player.pos),1500),
	        offscreen({ destroy: true }),
	        "MyBullet",
	
    ])
		shot = 1
		wait(2, () => {
    shot = 0
})
	}
})


const enemy = add([
	sprite("dinoo"),
	pos(50, 50),
	area(),
	anchor('center'),
	scale(SCALE/50 * 1.6),
	body(),
	stay(),
	'enemy'
	
])

onCollide("bullet", "enemy", (b, e) => {
    destroy(e)
})


		
	


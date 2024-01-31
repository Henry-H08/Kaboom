// Input handling and basic player movement

// Start kaboom


// Load assets


// Define player movement speed (pixels per second)
const SPEED = 320

var shot = 0

// Add player game object
const player = add([
	sprite("dinoo"),
	// center() returns the center point vec2(width() / 2, height() / 2)
	pos(center()),
	scale(1.7),
	anchor('center'),
])

// onKeyDown() registers an event that runs every frame as long as user is holding a certain key
onKeyDown("a", () => {
	// .move() is provided by pos() component, move by pixels per second
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
	        sprite("apple"),
	        pos(player.pos.x,player.pos.y),
	        area(),
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
		
	


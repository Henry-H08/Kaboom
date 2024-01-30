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
	scale(1.75),
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


function spawnBullet(p) {
		add([
			rect(10, 10),
			area(),
			pos(player.pos),
			anchor("top"),
			color(BLACK),
			outline(4),
			move(0, 1500),
			offscreen({ destroy: true }),
			// strings here means a tag
			"bullet",
		])
	shot = 1
	wait(2, () => {
    shot = 0
})

	}

onKeyDown("space", () => {
	if (shot != 1) {
		spawnBullet(player.pos.add(0, 0))
	}
})

player.add([
			rect(20, 40),
			area(),
			pos(0,0),
			anchor('top'),
			
			
			
		])
	


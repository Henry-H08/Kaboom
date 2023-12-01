const apple = add([
	sprite("apple"),   
	pos(120, 80),           
	anchor("center"), 
  	area(),
])

var rah = 0;

apple.onClick(() => {
  add([
    pos(120, 80),
    rect(200, 200),
    outline(4),
    area(),
    anchor("center"),
    color(BLACK),
  ])
	rah = 1;
	debug.log(rah);
})

const bg = add([
	sprite("bg"),   // sprite() component makes it render as a sprite
	pos(200, 200),     // pos() component gives it position, also enables movement
	area(),        // rotate() component gives it rotation
	anchor("center"), // anchor() component defines the pivot point (defaults to "topleft")
])






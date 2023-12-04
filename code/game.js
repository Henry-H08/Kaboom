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



let background = add([
    sprite("bg"),
    // Make the background centered on the screen
    pos(width() / 2, height() / 2),
    origin("center"),
    // Allow the background to be scaled
    scale(5),
    // Keep the background position fixed even when the camera moves
    fixed()
  ]);
  // Scale the background to cover the screen
  background.scaleTo(Math.max(
    width() / bgImage.tex.width,
    height() / bgImage.tex.height
  ));






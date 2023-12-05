const apple = add([
	sprite("apple", {
		width: 150,
		height: 80,
	}),   
	pos(width()/2.3, height()-200),           
	anchor("center"), 
  	area(),
	
])

apple.onClick(() => {
  add([
    rect(width(), height()/2.5),
    pos(width()/2, height()),
    outline(4),
    area(),
    anchor("center"),
    color(BLACK),
  ])
    text("Its Locked...", {
        size: 48, // 48 pixels tall
        width: 320, // it'll wrap to next line when width exceeds this value
        font: "sans-serif", // specify any font you loaded or browser built-in
	color: hsl2rgb((time() * 0.2 + idx * 0.1) % 1, 0.7, 0.8),
    )	
		})
})







add([
    sprite("bg", {
         width: width(),
         height: height()
    }),
    fixed(),
    pos(0, 0)
])


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
		color(BLACK),
		pos(width()/6, height()-400),
		z(9999),
		text("Its Locked...", {
		size: 48, // 48 pixels tall
        	width: 320, // it'll wrap to next line when width exceeds this value
        	font: "sans-serif", // specify any font you loaded or browser built-in
	})
		
	])
	add([
    rect(width(), height()/2.5),
    pos(width()/2, height()),
    outline(4),
    area(),
    anchor("center"),
    color(WHITE),
  ])
    
})







add([
    sprite("bg", {
         width: width(),
         height: height()
    }),
    fixed(),
    pos(0, 0)
])


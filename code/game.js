const apple = add([
	sprite("apple", {
		width: 150,
		height: 80,
	}),   
	pos(width()/2.3, height()-200),           
	anchor("center"), 
  	area(),
	opacity(200),
	
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
	
})







add([
    sprite("bg", {
         width: width(),
         height: height()
    }),
    fixed(),
    pos(0, 0)
])


const apple = add([
	sprite("apple"),   
	pos(120, 80),           
	anchor("center"), 
  	area(),
])

var rah = 0;

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

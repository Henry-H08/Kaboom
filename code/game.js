const apple = add([
	sprite("apple"),   
	pos(120, 80),           
	anchor("center"), 
  	area(),
])

onClick(apple, () => {
  add([
    pos(80, 120),
    rect(20, 40),
    outline(4),
    area(),
    color(BLACK),
  ])
})




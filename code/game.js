const apple = add([
	sprite("apple"),   
	pos(120, 80),           
	anchor("center"), 
  	area(),
])

onHover(apple, () => {
  add([
    pos(120, 80),
    rect(200, 200),
    outline(4),
    area(),
    anchor("center"),
    color(BLACK),
  ])
})




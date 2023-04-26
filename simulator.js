const cards = []

for (let i = 0; i < 5; i++)
{
	const card = new Card()
	cards.push(card)
}

modi[0].layout(cards)

cards.forEach(card =>
{
	card.x += playArea.offsetWidth / 2
	card.y += playArea.offsetHeight / 2
})
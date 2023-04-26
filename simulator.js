const modus = modi[0]

/**
 * @type {Card[]}
 */
const cards = []

for (let i = 0; i < 5; i++)
{
	const card = new Card()
	modus.flushCard(cards, card)
	card.colors = modus.colors
}

modus.layout(cards)

cards.forEach(card =>
{
	card.x += playArea.offsetWidth / 2
	card.y += playArea.offsetHeight / 2
})
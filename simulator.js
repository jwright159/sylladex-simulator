const modus = modi[0]

/**
 * @type {Card[]}
 */
const cards = []


function flushCard()
{
	const card = new Card()
	modus.flushCard(cards, card)
	card.colors = modus.colors
}

const itemPrefab = document.getElementById('item-prefab')
itemPrefab.removeAttribute('id')
itemPrefab.remove()
function captchaItem()
{
	const item = itemPrefab.cloneNode(true)
	item.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16)
	modus.captchaItem(cards, item)
}

/**
 * @param {HTMLElement} cardElement
 */
function fetchItem(cardElement)
{
	const card = cards.find(card => card.hasElement(cardElement))
	if (!modus.canFetchCard(cards, card)) return
	modus.fetchItem(cards, card)
}


const INITIAL_CARD_COUNT = 5
for (let i = 0; i < INITIAL_CARD_COUNT; i++)
	flushCard()


function loop(time)
{
	modus.layout(cards)

	cards.forEach(card =>
	{
		card.fetchable = modus.canFetchCard(cards, card)
		card.x += playArea.offsetWidth / 2
		card.y += playArea.offsetHeight / 2
	})

	window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop)
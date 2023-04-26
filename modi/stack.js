class StackModus extends Modus
{
	/**
	 * @param {Card[]} cards
	 */
	layout(cards)
	{
		const spacing = 10
		const width = cards.reduce((current, card) => current + card.width + spacing, 0) - spacing
		
		let x = -width/2
		
		cards.forEach((card) => {
			x += card.width / 2

			card.x = x
			card.y = 0

			x += card.width / 2 + spacing
		});
	}

	/**
	 * @param {Card[]} cards
	 * @param {Card} card
	 */
	canFetchCard(cards, card)
	{
		return cards[0] === card
	}

	/**
	 * @param {Card[]} cards
	 * @param {HTMLElement} item
	 */
	captchaItem(cards, item)
	{
		const card = cards.pop()
		cards.unshift(card)
		card.captchaItem(item)
	}

	/**
	 * @param {Card[]} cards
	 * @param {HTMLElement} item
	 */
	fetchItem(cards, item)
	{
		const card = cards.shift()
		cards.push(card)
		card.fetchItem(item)
	}

	/**
	 * @param {Card[]} cards
	 * @param {Card} card
	 */
	flushCard(cards, card)
	{
		cards.push(card)
	}

	/**
	 * @type {string[]}
	 */
	get colors()
	{
		return ['deeppink']
	}
}

modi.push(new StackModus())
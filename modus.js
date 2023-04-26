/**
 * @type {Modus[]}
 */
const modi = []

class Modus
{
	/**
	 * @param {Card[]} cards
	 */
	layout(cards) { throw new Error('Abstract method: layout') }

	/**
	 * @param {Card[]} cards
	 * @param {HTMLElement} item
	 */
	captchaItem(cards, item) { throw new Error('Abstract method: flushCard') }

	/**
	 * @param {Card[]} cards
	 * @param {Card} card
	 */
	flushCard(cards, card) { throw new Error('Abstract method: flushCard') }

	/**
	 * @type {string[]}
	 */
	get colors()
	{
		return ['red']
	}
}
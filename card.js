const playArea = document.getElementById("play-area")

const cardPrefab = document.getElementById("card-prefab")
cardPrefab.removeAttribute('id')
cardPrefab.remove()

class Card
{
	constructor()
	{
		/**
		 * @type {HTMLElement}
		 */
		this.element = cardPrefab.cloneNode(true)
		playArea.appendChild(this.element)
	}

	/**
	 * @type {number}
	 */
	get x()
	{
		return this.element.offsetLeft + this.element.offsetWidth / 2
	}

	/**
	 * @param {number} x
	 */
	set x(x)
	{
		this.element.style.left = (x - this.element.offsetWidth / 2) + 'px'
	}

	/**
	 * @type {number}
	 */
	get y()
	{
		return playArea.offsetHeight - (this.element.offsetTop + this.element.offsetHeight / 2)
	}

	/**
	 * @param {number} y
	 */
	set y(y)
	{
		this.element.style.bottom = (y - this.element.offsetHeight / 2) + 'px'
	}

	/**
	 * @type {number}
	 */
	get width()
	{
		return this.element.offsetWidth
	}

	/**
	 * @type {number}
	 */
	get height()
	{
		return this.element.offsetHeight
	}

	/**
	 * @param {string[]} colors
	 */
	set colors(colors)
	{
		this.element.style.background = colors.length > 1 ? `linear-gradient(${colors.join(', ')})` : colors[0]
	}
}
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

		/**
		 * @type {HTMLElement}
		 */
		this.face = this.element.getElementsByClassName('face')[0]

		/**
		 * @type {HTMLElement}
		 */
		this.item = null
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

	/**
	 * @param {HTMLElement} item
	 */
	captchaItem(item)
	{
		if (this.item) this.fetchItem()

		this.item = item
		this.face.appendChild(item)
	}

	/**
	 * @type {HTMLElement}
	 */
	fetchItem()
	{
		if (!this.item) return null

		const item = this.item
		this.item = null
		item.remove()
		return item
	}

	/**
	 * @param {boolean} fetchable
	 */
	set fetchable(fetchable)
	{
		if (fetchable && !this.element.classList.contains('fetchable'))
			this.element.classList.add('fetchable')
		else if (!fetchable && this.element.classList.contains('fetchable'))
			this.element.classList.remove('fetchable')
	}
}
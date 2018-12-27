import * as _ from 'lodash';
export default class ViewComponent {
	constructor() {
		this.menu = document.getElementById('menu');
		this.closeMenuBtn = document.getElementById('close');
		this.menuToggler = document.getElementById('toggler');
		this.menuToggler.addEventListener('click', this.displayMenu.bind(this));
		this.closeMenuBtn.addEventListener('click', e => this.menu.classList.remove('show'));
	}

	displayMenu() {
		this.menu.classList.add('show');
	}
}
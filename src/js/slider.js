import * as _ from 'lodash';
import ViewComponent from './mainView';

export default class SliderComponent {
	constructor() {
		this.slides = document.querySelectorAll('.slide');
		this.canMove = true;
		this.view = new ViewComponent();
		this.controls = document.querySelectorAll('.dot');
		this.controls[0].classList.add('active');
	}
	next() {
		if(this.canMove) {
			this.canMove = false;
			const current = _.filter(this.slides, (e) => e.classList.contains('active'));
			const next = _.filter(this.slides, (e) => !e.classList.contains('active') && !e.classList.contains('hide')).slice(0, 2);
			if (next.length === 0) {
				this.view.displayMenu();
				this.canMove = true;
				return;
			}
			const nextId = next[0].getAttribute('data-slide');
			this.activateControl(nextId);
			_.forEach(current, (e) => {
				e.classList.remove('active')
				e.classList.add('hide');
			});
			const logo = current[0].children[0];
			const slogan = current[1].children[0];
			slogan.classList.add('fadeOutUp');
			logo.classList.add('fadeOutDown');
			setTimeout(() => {
				this.canMove = true;
				_.forEach(next, (e) => e.classList.add('active'));
				slogan.classList.remove('fadeOutUp');
				logo.classList.remove('fadeOutDown');
			}, 1000);
		}
	}

	prev() {
		if(this.canMove) {
			this.canMove = false;
			const current = _.filter(this.slides, (e) => e.classList.contains('active'));
			const prev = _.filter(this.slides, (e) => e.classList.contains('hide')).reverse().slice(0, 2);
			if (prev.length === 0) {
				this.view.displayMenu();
				this.canMove = true;
				return;
			}
			const prevId = prev[0].getAttribute('data-slide');
			this.activateControl(prevId);
			_.forEach(current, (e) => {
				e.classList.remove('active');
			});
			const logo = current[0].children[0];
			const slogan = current[1].children[0];
			slogan.classList.add('fadeOutUp');
			logo.classList.add('fadeOutDown');
			setTimeout(() => {
				this.canMove = true;
				_.forEach(prev, (e) => {
					e.classList.add('active')
					e.classList.remove('hide');
				});
				slogan.classList.remove('fadeOutUp');
				logo.classList.remove('fadeOutDown');
			}, 1000);
		}
	}
	activateControl(id) {
		const currentDot = _.find(this.controls, (e) => e.classList.contains('active'));
		if (currentDot) {
			currentDot.classList.remove('active');
		}
		const nextDot = _.find(this.controls, (e) => e.getAttribute('id') === `control-${id}`);
		nextDot.classList.add('active');
	}
}
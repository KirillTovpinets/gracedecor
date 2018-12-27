import * as _ from 'lodash';

export default class SliderComponent {
	constructor() {
		this.slides = document.querySelectorAll('.slide');
		this.canMove = true;
	}
	next() {
		if(this.canMove) {
			this.canMove = false;
			const current = _.filter(this.slides, (e) => e.classList.contains('active'));
			const next = _.filter(this.slides, (e) => !e.classList.contains('active') && !e.classList.contains('hide')).slice(0, 2);

			_.forEach(current, (e) => {
				e.classList.remove('active')
				e.classList.add('hide');
			});
			setTimeout(() => {
				this.canMove = true;
				_.forEach(next, (e) => e.classList.add('active'));
			}, 1000);
		}
	}

	prev() {
		if(this.canMove) {
			this.canMove = false;
			const current = _.filter(this.slides, (e) => e.classList.contains('active'));
			const prev = _.filter(this.slides, (e) => e.classList.contains('hide')).reverse().slice(0, 2);

			_.forEach(current, (e) => {
				e.classList.remove('active')
			});
			setTimeout(() => {
				this.canMove = true;
				_.forEach(prev, (e) => {
					e.classList.add('active')
					e.classList.remove('hide');
				});
			}, 1000);
		}
	}
}
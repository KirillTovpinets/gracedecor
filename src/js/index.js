import SliderComponent from './slider';

const path = require('path');
const slider = new SliderComponent();

window.addEventListener('mousewheel', (e) => {
	e.preventDefault();
	if (e.deltaY > 0 && slider.canMove) {
		slider.next();
	} else {
		slider.prev();
	}
})
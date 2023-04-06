import m from 'mithril';
import {getNextStep} from './store.js';

console.timeEnd('load');

let items = getNextStep();

//console.log(items);

async function updateNext () {
	const nextStep = getNextStep();

	if (nextStep){
		items = nextStep;
		m.redraw();
		window.requestAnimationFrame(updateNext);
	}
}

window.requestAnimationFrame(updateNext);

function onClick () {}

const app = {
	view() {
		return items.map((item) => {
			if (item.isButton) return m('button', {key:item.id, onclick: onClick}, item.text);
			return m('span', {key:item.id}, item.text);
		})
	}
};

m.mount(document.getElementById('app'), app);
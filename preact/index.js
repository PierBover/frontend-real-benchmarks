import {h, render} from 'preact';
import {signal} from "@preact/signals";
import {getNextStep} from './store.js';

console.timeEnd('load');

const items = signal(getNextStep());

function onClick () {}

async function updateNext () {
    const nextStep = getNextStep();

    if (nextStep){
        items.value = nextStep;
        window.requestAnimationFrame(updateNext);
    }
}

window.requestAnimationFrame(updateNext);

function App () {
	return items.value.map((item) => {
		return this.state.items.map((item) => {
			if (item.isButton) return h('button', {key:item.id, onclick: onClick}, item.text);
			return h('span', {key:item.id}, item.text);
		});
	});
}

render(h(App), document.getElementById('app'));
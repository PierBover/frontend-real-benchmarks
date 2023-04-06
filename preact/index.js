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
		return h('div', {key:item.id}, [
			h('h2', null, item.id),
			h('h3', null, 'Lorem ipsum'),
			h('h4', null, 'Lorem ipsum'),
			h('h5', null, 'Lorem ipsum'),
			h('div', null, [
				h('div', null, [
					h('div', null, [
						h('div', null, [
							h('p', null, [
								h('button', {onclick: onClick}, 'Lorem ipsum'),
								h('button', {onclick: onClick}, 'Lorem ipsum'),
								h('button', {onclick: onClick}, 'Lorem ipsum'),
								h('button', {onclick: onClick}, 'Lorem ipsum'),
								h('button', {onclick: onClick}, 'Lorem ipsum'),
								h('span', null, 'Lorem ipsum'),
								h('span', null, 'Lorem ipsum'),
								h('span', null, 'Lorem ipsum'),
								h('span', null, 'Lorem ipsum'),
								h('span', null, 'Lorem ipsum'),
								h('span', null, 'Lorem ipsum'),
								h('span', null, 'Lorem ipsum'),
								h('span', null, 'Lorem ipsum'),
								h('span', null, 'Lorem ipsum'),
								h('span', null, 'Lorem ipsum'),
								h('span', null, 'Lorem ipsum'),
								h('span', null, 'Lorem ipsum'),
								h('span', null, 'Lorem ipsum'),
								h('span', null, 'Lorem ipsum'),
								h('span', null, 'Lorem ipsum'),
								h('span', null, 'Lorem ipsum')
							]),
							h('div', null, [
								h('h2', null, item.id),
								h('h3', null, 'Lorem ipsum'),
								h('h4', null, 'Lorem ipsum'),
								h('h5', null, 'Lorem ipsum'),
								h('div', null, [
									h('div', null, [
										h('div', null, [
											h('div', null, [
												h('p', null, [
													h('button', {onclick: onClick}, 'Lorem ipsum'),
													h('button', {onclick: onClick}, 'Lorem ipsum'),
													h('button', {onclick: onClick}, 'Lorem ipsum'),
													h('button', {onclick: onClick}, 'Lorem ipsum'),
													h('button', {onclick: onClick}, 'Lorem ipsum'),
													h('span', null, 'Lorem ipsum'),
													h('span', null, 'Lorem ipsum'),
													h('span', null, 'Lorem ipsum'),
													h('span', null, 'Lorem ipsum'),
													h('span', null, 'Lorem ipsum'),
													h('span', null, 'Lorem ipsum'),
													h('span', null, 'Lorem ipsum'),
													h('span', null, 'Lorem ipsum'),
													h('span', null, 'Lorem ipsum'),
													h('span', null, 'Lorem ipsum'),
													h('span', null, 'Lorem ipsum'),
													h('span', null, 'Lorem ipsum'),
													h('span', null, 'Lorem ipsum'),
													h('span', null, 'Lorem ipsum'),
													h('span', null, 'Lorem ipsum'),
													h('span', null, 'Lorem ipsum')
												]),
												h('div', null, [
													h('h2', null, item.id),
													h('h3', null, 'Lorem ipsum'),
													h('h4', null, 'Lorem ipsum'),
													h('h5', null, 'Lorem ipsum'),
													h('div', null, [
														h('div', null, [
															h('div', null, [
																h('div', null, [
																	h('p', null, [
																		h('button', {onclick: onClick}, 'Lorem ipsum'),
																		h('button', {onclick: onClick}, 'Lorem ipsum'),
																		h('button', {onclick: onClick}, 'Lorem ipsum'),
																		h('button', {onclick: onClick}, 'Lorem ipsum'),
																		h('button', {onclick: onClick}, 'Lorem ipsum'),
																		h('span', null, 'Lorem ipsum'),
																		h('span', null, 'Lorem ipsum'),
																		h('span', null, 'Lorem ipsum'),
																		h('span', null, 'Lorem ipsum'),
																		h('span', null, 'Lorem ipsum'),
																		h('span', null, 'Lorem ipsum'),
																		h('span', null, 'Lorem ipsum'),
																		h('span', null, 'Lorem ipsum'),
																		h('span', null, 'Lorem ipsum'),
																		h('span', null, 'Lorem ipsum'),
																		h('span', null, 'Lorem ipsum'),
																		h('span', null, 'Lorem ipsum'),
																		h('span', null, 'Lorem ipsum'),
																		h('span', null, 'Lorem ipsum'),
																		h('span', null, 'Lorem ipsum'),
																		h('span', null, 'Lorem ipsum')
																	])
																])
															])
														])
													])
												])
											])
										])
									])
								])
							])
						])
					])
				])
			])
		])
	});
}

render(h(App), document.getElementById('app'));
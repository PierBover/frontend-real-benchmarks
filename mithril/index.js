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
			return (
				m('div', {key:item.id}, [
					m('h2', null, item.id),
					m('h3', null, 'Lorem ipsum'),
					m('h4', null, 'Lorem ipsum'),
					m('h5', null, 'Lorem ipsum'),
					m('div', null, [
						m('div', null, [
							m('div', null, [
								m('div', null, [
									m('p', null, [
										m('button', {onclick: onClick}, 'Lorem ipsum'),
										m('button', {onclick: onClick}, 'Lorem ipsum'),
										m('button', {onclick: onClick}, 'Lorem ipsum'),
										m('button', {onclick: onClick}, 'Lorem ipsum'),
										m('button', {onclick: onClick}, 'Lorem ipsum'),
										m('span', null, 'Lorem ipsum'),
										m('span', null, 'Lorem ipsum'),
										m('span', null, 'Lorem ipsum'),
										m('span', null, 'Lorem ipsum'),
										m('span', null, 'Lorem ipsum'),
										m('span', null, 'Lorem ipsum'),
										m('span', null, 'Lorem ipsum'),
										m('span', null, 'Lorem ipsum'),
										m('span', null, 'Lorem ipsum'),
										m('span', null, 'Lorem ipsum'),
										m('span', null, 'Lorem ipsum'),
										m('span', null, 'Lorem ipsum'),
										m('span', null, 'Lorem ipsum'),
										m('span', null, 'Lorem ipsum'),
										m('span', null, 'Lorem ipsum'),
										m('span', null, 'Lorem ipsum')
									]),
									m('div', null, [
										m('h2', null, item.id),
										m('h3', null, 'Lorem ipsum'),
										m('h4', null, 'Lorem ipsum'),
										m('h5', null, 'Lorem ipsum'),
										m('div', null, [
											m('div', null, [
												m('div', null, [
													m('div', null, [
														m('p', null, [
															m('button', {onclick: onClick}, 'Lorem ipsum'),
															m('button', {onclick: onClick}, 'Lorem ipsum'),
															m('button', {onclick: onClick}, 'Lorem ipsum'),
															m('button', {onclick: onClick}, 'Lorem ipsum'),
															m('button', {onclick: onClick}, 'Lorem ipsum'),
															m('span', null, 'Lorem ipsum'),
															m('span', null, 'Lorem ipsum'),
															m('span', null, 'Lorem ipsum'),
															m('span', null, 'Lorem ipsum'),
															m('span', null, 'Lorem ipsum'),
															m('span', null, 'Lorem ipsum'),
															m('span', null, 'Lorem ipsum'),
															m('span', null, 'Lorem ipsum'),
															m('span', null, 'Lorem ipsum'),
															m('span', null, 'Lorem ipsum'),
															m('span', null, 'Lorem ipsum'),
															m('span', null, 'Lorem ipsum'),
															m('span', null, 'Lorem ipsum'),
															m('span', null, 'Lorem ipsum'),
															m('span', null, 'Lorem ipsum'),
															m('span', null, 'Lorem ipsum')
														]),
														m('div', null, [
															m('h2', null, item.id),
															m('h3', null, 'Lorem ipsum'),
															m('h4', null, 'Lorem ipsum'),
															m('h5', null, 'Lorem ipsum'),
															m('div', null, [
																m('div', null, [
																	m('div', null, [
																		m('div', null, [
																			m('p', null, [
																				m('button', {onclick: onClick}, 'Lorem ipsum'),
																				m('button', {onclick: onClick}, 'Lorem ipsum'),
																				m('button', {onclick: onClick}, 'Lorem ipsum'),
																				m('button', {onclick: onClick}, 'Lorem ipsum'),
																				m('button', {onclick: onClick}, 'Lorem ipsum'),
																				m('span', null, 'Lorem ipsum'),
																				m('span', null, 'Lorem ipsum'),
																				m('span', null, 'Lorem ipsum'),
																				m('span', null, 'Lorem ipsum'),
																				m('span', null, 'Lorem ipsum'),
																				m('span', null, 'Lorem ipsum'),
																				m('span', null, 'Lorem ipsum'),
																				m('span', null, 'Lorem ipsum'),
																				m('span', null, 'Lorem ipsum'),
																				m('span', null, 'Lorem ipsum'),
																				m('span', null, 'Lorem ipsum'),
																				m('span', null, 'Lorem ipsum'),
																				m('span', null, 'Lorem ipsum'),
																				m('span', null, 'Lorem ipsum'),
																				m('span', null, 'Lorem ipsum'),
																				m('span', null, 'Lorem ipsum')
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
			);
		})
	}
};

m.mount(document.getElementById('app'), app);
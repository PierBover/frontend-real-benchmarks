import {Component, render} from 'inferno';
import {createElement} from 'inferno-create-element';
import {getNextStep} from './store.js';

console.timeEnd('load');

function onClick () {}

const h = createElement;

class App extends Component {
	constructor() {
		super ();

		this.state = {
			items: getNextStep()
		};
	}

	updateNext () {
		const items = getNextStep();

		if (items){
			this.setState({items});
			window.requestAnimationFrame(this.updateNext.bind(this));
		}
	}

	componentDidMount () {
		window.requestAnimationFrame(this.updateNext.bind(this));
	}

	render () {
		return this.state.items.map((item) => {
			return (
				h('div', {key:item.id}, [
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
			);
		});
	}
}

render(h(App), document.getElementById('app'));
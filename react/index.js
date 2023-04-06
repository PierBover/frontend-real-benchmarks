import {createRoot} from 'react-dom/client';
import {createElement, Component} from 'react';
import {getNextStep} from './store.js';

console.timeEnd('load');

function onClick () {}

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
			this.setState({items}, () => {
				window.requestAnimationFrame(this.updateNext.bind(this));
			});
		}
	}

	componentDidMount () {
		window.requestAnimationFrame(this.updateNext.bind(this));
	}

	render () {
		return this.state.items.map((item) => {
			return createElement('div', {key:item.id}, [
				createElement('h2', {key: 'h2'}, item.id),
				createElement('h3', {key: 'h3'}, 'Lorem ipsum'),
				createElement('h4', {key: 'h4'}, 'Lorem ipsum'),
				createElement('h5', {key: 'h5'}, 'Lorem ipsum'),
				createElement('div', {key: 'div'}, [
					createElement('div', {key: 'div'}, [
						createElement('div', {key: 'div'}, [
							createElement('div', {key: 'div'}, [
								createElement('p', {key: 'p'}, [
									createElement('button', {onClick: onClick, key: 'button-1'}, 'Lorem ipsum'),
									createElement('button', {onClick: onClick, key: 'button-2'}, 'Lorem ipsum'),
									createElement('button', {onClick: onClick, key: 'button-3'}, 'Lorem ipsum'),
									createElement('button', {onClick: onClick, key: 'button-4'}, 'Lorem ipsum'),
									createElement('button', {onClick: onClick, key: 'button-5'}, 'Lorem ipsum'),
									createElement('span', {key: 'span-1'}, 'Lorem ipsum'),
									createElement('span', {key: 'span-2'}, 'Lorem ipsum'),
									createElement('span', {key: 'span-3'}, 'Lorem ipsum'),
									createElement('span', {key: 'span-4'}, 'Lorem ipsum'),
									createElement('span', {key: 'span-5'}, 'Lorem ipsum'),
									createElement('span', {key: 'span-6'}, 'Lorem ipsum'),
									createElement('span', {key: 'span-7'}, 'Lorem ipsum'),
									createElement('span', {key: 'span-8'}, 'Lorem ipsum'),
									createElement('span', {key: 'span-9'}, 'Lorem ipsum'),
									createElement('span', {key: 'span-10'}, 'Lorem ipsum'),
									createElement('span', {key: 'span-11'}, 'Lorem ipsum'),
									createElement('span', {key: 'span-12'}, 'Lorem ipsum'),
									createElement('span', {key: 'span-13'}, 'Lorem ipsum'),
									createElement('span', {key: 'span-14'}, 'Lorem ipsum'),
									createElement('span', {key: 'span-15'}, 'Lorem ipsum'),
									createElement('span', {key: 'span-16'}, 'Lorem ipsum')
								]),
								createElement('div', {key:'div'}, [
									createElement('h2', {key: 'h2'}, item.id),
									createElement('h3', {key: 'h3'}, 'Lorem ipsum'),
									createElement('h4', {key: 'h4'}, 'Lorem ipsum'),
									createElement('h5', {key: 'h5'}, 'Lorem ipsum'),
									createElement('div', {key: 'div'}, [
										createElement('div', {key: 'div'}, [
											createElement('div', {key: 'div'}, [
												createElement('div', {key: 'div'}, [
													createElement('p', {key: 'p'}, [
														createElement('button', {onClick: onClick, key: 'button-1'}, 'Lorem ipsum'),
														createElement('button', {onClick: onClick, key: 'button-2'}, 'Lorem ipsum'),
														createElement('button', {onClick: onClick, key: 'button-3'}, 'Lorem ipsum'),
														createElement('button', {onClick: onClick, key: 'button-4'}, 'Lorem ipsum'),
														createElement('button', {onClick: onClick, key: 'button-5'}, 'Lorem ipsum'),
														createElement('span', {key: 'span-1'}, 'Lorem ipsum'),
														createElement('span', {key: 'span-2'}, 'Lorem ipsum'),
														createElement('span', {key: 'span-3'}, 'Lorem ipsum'),
														createElement('span', {key: 'span-4'}, 'Lorem ipsum'),
														createElement('span', {key: 'span-5'}, 'Lorem ipsum'),
														createElement('span', {key: 'span-6'}, 'Lorem ipsum'),
														createElement('span', {key: 'span-7'}, 'Lorem ipsum'),
														createElement('span', {key: 'span-8'}, 'Lorem ipsum'),
														createElement('span', {key: 'span-9'}, 'Lorem ipsum'),
														createElement('span', {key: 'span-10'}, 'Lorem ipsum'),
														createElement('span', {key: 'span-11'}, 'Lorem ipsum'),
														createElement('span', {key: 'span-12'}, 'Lorem ipsum'),
														createElement('span', {key: 'span-13'}, 'Lorem ipsum'),
														createElement('span', {key: 'span-14'}, 'Lorem ipsum'),
														createElement('span', {key: 'span-15'}, 'Lorem ipsum'),
														createElement('span', {key: 'span-16'}, 'Lorem ipsum')
													]),
													createElement('div', {key:'div'}, [
														createElement('h2', {key: 'h2'}, item.id),
														createElement('h3', {key: 'h3'}, 'Lorem ipsum'),
														createElement('h4', {key: 'h4'}, 'Lorem ipsum'),
														createElement('h5', {key: 'h5'}, 'Lorem ipsum'),
														createElement('div', {key: 'div'}, [
															createElement('div', {key: 'div'}, [
																createElement('div', {key: 'div'}, [
																	createElement('div', {key: 'div'}, [
																		createElement('p', {key: 'p'}, [
																			createElement('button', {onClick: onClick, key: 'button-1'}, 'Lorem ipsum'),
																			createElement('button', {onClick: onClick, key: 'button-2'}, 'Lorem ipsum'),
																			createElement('button', {onClick: onClick, key: 'button-3'}, 'Lorem ipsum'),
																			createElement('button', {onClick: onClick, key: 'button-4'}, 'Lorem ipsum'),
																			createElement('button', {onClick: onClick, key: 'button-5'}, 'Lorem ipsum'),
																			createElement('span', {key: 'span-1'}, 'Lorem ipsum'),
																			createElement('span', {key: 'span-2'}, 'Lorem ipsum'),
																			createElement('span', {key: 'span-3'}, 'Lorem ipsum'),
																			createElement('span', {key: 'span-4'}, 'Lorem ipsum'),
																			createElement('span', {key: 'span-5'}, 'Lorem ipsum'),
																			createElement('span', {key: 'span-6'}, 'Lorem ipsum'),
																			createElement('span', {key: 'span-7'}, 'Lorem ipsum'),
																			createElement('span', {key: 'span-8'}, 'Lorem ipsum'),
																			createElement('span', {key: 'span-9'}, 'Lorem ipsum'),
																			createElement('span', {key: 'span-10'}, 'Lorem ipsum'),
																			createElement('span', {key: 'span-11'}, 'Lorem ipsum'),
																			createElement('span', {key: 'span-12'}, 'Lorem ipsum'),
																			createElement('span', {key: 'span-13'}, 'Lorem ipsum'),
																			createElement('span', {key: 'span-14'}, 'Lorem ipsum'),
																			createElement('span', {key: 'span-15'}, 'Lorem ipsum'),
																			createElement('span', {key: 'span-16'}, 'Lorem ipsum')
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
}

const root = createRoot(document.getElementById('app'));

root.render(createElement(App));
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
			this.setState({items});
			window.requestAnimationFrame(this.updateNext.bind(this));
		}
	}

	componentDidMount () {
		window.requestAnimationFrame(this.updateNext.bind(this));
	}

	render () {
		return this.state.items.map((item) => {
			if (item.isButton) return createElement('button', {key:item.id, onClick: onClick}, item.text);
			return createElement('span', {key:item.id}, item.text);
		});
	}
}

const root = createRoot(document.getElementById('app'));

root.render(createElement(App));
import {Component, render} from 'inferno';
import {createElement} from 'inferno-create-element';
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
			if (item.isButton) return createElement('button', {key:item.id, onclick: onClick}, item.text);
			return createElement('span', {key:item.id}, item.text);
		});
	}
}

render(createElement(App), document.getElementById('app'));
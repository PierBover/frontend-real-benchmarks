import App from './App.svelte';

console.timeEnd('load');

new App({
	target: document.getElementById('app'),
	props: {}
});
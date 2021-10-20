import POS from './pos.svelte';

const pos = new POS({
	target: document.body,
	props: {
		name: 'pos'
	}
});

export default pos;
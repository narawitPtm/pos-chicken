import Calculate from './calculate.svelte';

const calculate = new Calculate({
	target: document.body,
	props: {
		name: 'calculate'
	}
});

export default calculate;
import Layout from './layout.svelte';

const layout = new Layout({
	target: document.body,
	props: {
		name: 'layout'
	}
});

export default layout;
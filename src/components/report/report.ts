import Report from './report.svelte';

const report = new Report({
	target: document.body,
	props: {
		name: 'report'
	}
});

export default report;
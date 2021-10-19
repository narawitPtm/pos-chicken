import OrderStatus from './orderStatus.svelte';

const orderStatus = new OrderStatus({
	target: document.body,
	props: {
		name: 'layout'
	}
});

export default orderStatus;
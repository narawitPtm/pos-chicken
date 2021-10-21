<script lang="ts">
	import SelectedOrder from '../seletected-order/seleted-order.svelte'    
    let src = '/picture/chicken.jpg';
	let typeChicken: {name:string, isActive:boolean, path:string}[] = [
		{ name: 'ทั้งหมด',  isActive: true, path:""},
		{ name: 'โปรโมชั่น', isActive: false, path:"" },
		{ name: 'ไก่ทอด', isActive: false, path:"" },
		{ name: 'ข้าวเหนียว', isActive: false, path:"" },
		{ name: 'หอมเจียว', isActive: false, path:"" }
	];

	let menuChickens: {name:string, quantity:number, img:string}[] = [
		{name: 'น่องไก่ติดสะโพก', quantity: 0, img: ''},
		{name: 'ปีกไก่อบชานอ้อย', quantity: 0, img: ''},
		{name: 'ปีกไก่อบชานอ้อย', quantity: 0, img: ''},
		{name: 'ปีกไก่อบชานอ้อย', quantity: 0, img: ''},
		{name: 'ปีกไก่อบชานอ้อย', quantity: 0, img: ''},
		{name: 'ปีกไก่อบชานอ้อย', quantity: 0, img: ''},
		{name: 'ปีกไก่อบชานอ้อย', quantity: 0, img: ''},
		{name: 'ปีกไก่อบชานอ้อย', quantity: 0, img: ''},
		{name: 'ปีกไก่อบชานอ้อย', quantity: 0, img: ''},
		{name: 'ปีกไก่อบชานอ้อย', quantity: 0, img: ''},
		{name: 'ปีกไก่อบชานอ้อย', quantity: 0, img: ''},
		{name: 'ปีกไก่อบชานอ้อย', quantity: 0, img: ''},
		{name: 'ปีกไก่อบชานอ้อย', quantity: 0, img: ''},
		{name: 'ปีกไก่อบชานอ้อย', quantity: 0, img: ''},
		{name: 'ปีกไก่อบชานอ้อย', quantity: 0, img: ''}
		
	]
	function submenu(index: number) {
		typeChicken.forEach((item, indexs) => {
			if(index === indexs) {
				item.isActive = true
			}
			else {
				item.isActive = false
			}
		})
		typeChicken = typeChicken
	}

</script>
<div id="posMain">
		<div class="filter-btn-box">
			<!-- btn -->
		</div>
	<!-- picture -->
	<!-- <div id="nongkaiBox">
		<div id="nongKai">
			{#each menuChickens as menuChicken}		
			<div class="card-menu">
				<img class = "chicken-img" src="{src}" alt="">
				<div class="card-footer">
					<div class="chicken-text">
						{menuChicken.name}
					</div>
					<div class="Two">{menuChicken.quantity}</div>
				</div>
			</div>
			{/each}
		</div>
	</div>
	<SelectedOrder/> -->
</div>

<style lang="scss">
@import './pos.scss';
</style>
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

	let menuChickens: {id:number, name:string, quantity:number, img:string, type:number, price:number}[] = [
		{id: 1, name: 'น่องติดสะโพก', quantity: 0, img: '', type: 2, price: 35},
		{id: 2, name: 'อกไก่', quantity: 0, img: '', type: 2, price: 35},
		{id: 3, name: 'ปีกไก่ทอด', quantity: 0, img: '', type: 2, price: 15},
		{id: 4, name: 'หมูสามชั้นทอด', quantity: 0, img: '', type: 2, price: 40},
		{id: 5, name: 'โครงไก่ทอด', quantity: 0, img: '', type: 2, price: 45},
		{id: 6, name: 'ปลายปีก', quantity: 0, img: '', type: 2, price: 20},
		{id: 7, name: 'น่องไก่', quantity: 0, img: '', type: 2, price: 20},
		{id: 8, name: 'หอมเจียว', quantity: 0, img: '', type: 4, price: 10},
		{id: 9, name: 'หนังติดมัน', quantity: 0, img: '', type: 2, price: 20},
		{id: 10, name: 'ข้าวเหนียวดำ', quantity: 0, img: '', type: 3, price: 10},
		{id: 11, name: 'ข้าวเหนียวขาว', quantity: 0, img: '', type: 3, price: 10},
		{id: 12, name: 'ไก่ทั้งตัว', quantity: 0, img: '', type: 2, price: 200},
		{id: 13, name: 'หอมเจียวใหญ่', quantity: 0, img: '', type: 4, price: 20},
		{id: 14, name: 'ชุดสุดคุ้ม', quantity: 0, img: '', type: 1, price: 150},
		{id: 15, name: 'ชุดจุใจใช่เลย', quantity: 0, img: '', type: 1, price: 165},
		{id: 16, name: 'ชุดครอบครัวสุขสันต์', quantity: 0, img: '', type: 1, price: 125},	
	]

  let TotalCost: number

  function calcost(id:number) {
    menuChickens.forEach((item) => {
    if (id === item.id) {
      TotalCost += item.price
    }
    })
    TotalCost = TotalCost
  }

	let typeMenu: number = 0;
	function submenu(index: number) {
		typeChicken.forEach((item, indexs) => {
			if(index === indexs) {
				item.isActive = true
				typeMenu = index
			}
			else {
				item.isActive = false
			}
		})
		typeChicken = typeChicken
	}

	function plusOrder(menuId:number) {
		menuChickens.forEach((item) => {
			if (menuId === item.id) {
				item.quantity = item.quantity + 1
        calcost(item.id)
			}
		})
		menuChickens = menuChickens
	}

</script>
<div id="posMain">
		<div class="filter-btn-box">
			{#each typeChicken as typeKen, index  }
				<button class={`filter-button ${typeKen.isActive ? 'active' : '' }`}  on:click={()=>submenu(index)}>{typeKen.name}</button>
			{/each}
		</div>
	<!-- picture -->
	<div id="nongkaiBox">
		<div id="nongKai">
			{#if typeMenu !== 0}
				{#each menuChickens.filter(a => a.type === typeMenu) as menuChicken}		
				<div class="card-menu" on:click={()=> plusOrder(menuChicken.id)}>
					<img class = "chicken-img" src="{src}" alt="">
					<div class="card-footer">
						<div class="chicken-text">
							{menuChicken.name}
						</div>
						<div class = {`nothing ${menuChicken.quantity > 0 ? 'selected' : '' }` }>{menuChicken.quantity}</div>
					</div>
				</div>
				{/each}
				{:else}
				{#each menuChickens as menuChicken}		
				<div class="card-menu" on:click={()=> plusOrder(menuChicken.id)}>
					<img class = "chicken-img" src="{src}" alt="">
					<div class="card-footer">
						<div class="chicken-text">
							{menuChicken.name}
						</div>
						<div class= {`nothing ${menuChicken.quantity > 0 ? 'selected' : '' }`}>{menuChicken.quantity}</div>
					</div>
				</div>
				{/each}
			{/if}
		</div>
	</div>
	<SelectedOrder bind:menuChickens bind:TotalCost/>
</div>

<style lang="scss">
@import './pos.scss';
</style>
<script lang="ts">
    let src = '/picture/chicken.jpg';
	let menuchicken: {name:string,isActive:boolean, path:string}[] = [
		{ name: 'ทั้งหมด',  isActive: true, path:""},
		{ name: 'โปรโมชั่น', isActive: false, path:"" },
		{ name: 'ไก่ทอด', isActive: false, path:"" },
		{ name: 'ข้าวเหนียว', isActive: false, path:"" },
		{ name: 'หอมเจียว', isActive: false, path:"" }
	];

	function submenu(index: number) {
		menuchicken.forEach((item, indexs) => {
			if(index === indexs) {
				item.isActive = true
			}
			else {
				item.isActive = false
			}
		})
		menuchicken = menuchicken
	}

</script>
	<main>
		<div class="filter-btn-box">
			{#each menuchicken as menu, index }	
		  		<button class = {`filter-button ${menu.isActive ? 'active' : ''}`} on:click={() => submenu(index)}> {menu.name} </button>
			{/each}
		</div>
	</main>

<!-- picture -->
<div id="nongKai">
	<div class="card-menu">
		<img class = "chicken-img" src="{src}" alt="">
		<div class="card-footer">
			<div class="chicken-text">
				น่องไก่ติดสะโพก
			</div>
			<div class="Two">0</div>
		</div>
	</div>
</div>	

<style lang="scss">
   @import './pos.scss';
</style>
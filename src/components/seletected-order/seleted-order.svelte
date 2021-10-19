<script lang="ts">
	import { push } from 'svelte-spa-router'
   let orderlistsPrepare: {name:string, quantity:number, cost:number}[] = [
		{ name: 'อกไก่', quantity:2, cost: 45},
      { name: 'สะโพก', quantity:1, cost: 45},
      { name: 'สะโพกติดน่อง', quantity:2, cost: 45},
      { name: 'ข้าวเหนียว', quantity:2, cost: 45},
      { name: 'หอมเจียว', quantity:2, cost: 45}
	];
</script>

<div id="main">
   <div id="headerOrder">
   รายการสั่งซื้อ
   </div>
   <div id="menuListPrepare">
   <!-- loop-order -->
   {#each orderlistsPrepare as orderlistPrepare}
      <div class="menuPrepare">
         <i class="fas fa-times delete"></i>
         <div class="menu-detail">
            <div class="name-menu">
               {orderlistPrepare.name}
            </div>
            <div class="cost-menu">
               ฿ {orderlistPrepare.cost*orderlistPrepare.quantity}
            </div>
         </div>
      </div>
   {/each}
   <!-- loop-order -->
   </div>
</div>

<style lang="scss">
@import './seleted-order.scss';
</style>
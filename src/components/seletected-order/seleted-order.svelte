<script lang="ts">
	import { push } from 'svelte-spa-router'
   let orderlistsPrepare: {name:string, quantity:number, cost:number}[] = [
		{ name: 'อกไก่', quantity:1, cost: 45},
      { name: 'สะโพก', quantity:1, cost: 45},
      { name: 'สะโพกติดน่อง', quantity:2, cost: 45},
      { name: 'ข้าวเหนียว', quantity:2, cost: 45},
      { name: 'หอมเจียว', quantity:2, cost: 45},
      { name: 'หนังไก่', quantity:1, cost: 20},
      { name: 'ปีกไก่', quantity:2, cost: 45},
      { name: 'น่องไก่', quantity:2, cost: 45}
	];
</script>

<div id="ordering">
   <div id="headerOrder">
   รายการสั่งซื้อ
   </div>
   <div id="menuListPrepare">
   <!-- loop-order -->
   {#each orderlistsPrepare as orderlistPrepare}
      <div class="menuPrepare">
         <div class="menuPrepareLeft">
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
         <div class="btn-volume">
            <div class="minus-vol">-</div>
            <div class="volume-num">{orderlistPrepare.quantity}</div>
            <div class="plus-vol">+</div>
         </div>
      </div>
   {/each}
   <!-- loop-order -->
   </div>
   <div id="promotion">
      <div id="text-promotion">โปรโมชั่น</div>
      <div id="name-promotion">ส่วนลด</div>
      <div id="cost-promotion"> ฿ 5 </div>
   </div>
   <div id="conclution-order">
      <div id="cost-tap">
         <div id="text-total">รวมราคาทั้งหมด</div>
         <div id="number-total"> ฿ 125 </div>
      </div>
      <div id="btn-submit-order">
         <label>ยืนยันการสั่งซื้อ</label>
      </div>
   </div>
</div>

<style lang="scss">
@import './seleted-order.scss';
</style>
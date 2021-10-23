<script lang="ts">
  let orderlistsPrepare: { name: string; quantity: number; cost: number }[] = [
    { name: "อกไก่", quantity: 1, cost: 45 },
  ]

  type order = {
    id: number;
    name: string;
  }

  type menuLists = {
    id: number;
    menu: string;
    orders: order[];
  }

  export let menuChickens: {
    id: number;
    name: string;
    quantity: number;
    img: string;
    type: number;
    price: number;
  }[]

  export let TotalCost: number =  0


  function minusOrder(id:number) {
    menuChickens.forEach((item) => {
      if (item.id === id) {
        item.quantity = item.quantity - 1
        TotalCost -= item.price
      }
    })
    menuChickens = menuChickens
    TotalCost = TotalCost
    
  }

  function deleteOrder(id:number) {
    menuChickens.forEach((item) => {
      if (item.id === id) {
        TotalCost -= item.price * item.quantity
        item.quantity = 0
      }
    })
    menuChickens = menuChickens
    TotalCost = TotalCost
    
  }

  function plusOrder(id:number) {
    menuChickens.forEach((item) => {
      if (item.id === id) {
        item.quantity = item.quantity + 1
        TotalCost += item.price
      }
    })
    menuChickens = menuChickens
    TotalCost = TotalCost
  }
</script>

<div id="ordering">
  <div id="headerOrder">รายการสั่งซื้อ</div>
  <div id="menuListPrepare">
    <!-- loop-order -->
    {#each menuChickens as orderlistPrepare}
      {#if orderlistPrepare.quantity > 0}
        <div class="menuPrepare">
          <div class="menuPrepareLeft">
            <i class="fas fa-times delete" on:click={() => deleteOrder(orderlistPrepare.id)}/>
            <div class="menu-detail">
              <div class="name-menu">
                {orderlistPrepare.name}
              </div>
              <div class="cost-menu">
                ฿ {orderlistPrepare.price * orderlistPrepare.quantity}
              </div>
            </div>
          </div>
          <div class="btn-volume">
            <div class="minus-vol" on:click={() => minusOrder(orderlistPrepare.id)}>-</div>
            <div class="volume-num">{orderlistPrepare.quantity}</div>
            <div class="plus-vol" on:click={() => plusOrder(orderlistPrepare.id)}>+</div>
          </div>
        </div>
      {/if}
    {/each}
    <!-- loop-order -->
  </div>
  <div id="promotion">
    <div id="text-promotion">โปรโมชั่น</div>
    <div id="name-promotion">ส่วนลด</div>
    <div id="cost-promotion">฿ 0</div>
  </div>
  <div id="conclution-order">
    <div id="cost-tap">
      <div id="text-total">รวมราคาทั้งหมด</div>
      <div id="number-total">฿ {TotalCost}</div>
    </div>
    <div id="btn-submit-order">
      <div>ยืนยันการสั่งซื้อ</div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "./seleted-order.scss";
</style>

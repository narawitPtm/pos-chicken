<script lang="ts">
  import Calculate from '../calculate/calculate.svelte'
  import type GetModel from "../../Model/GetModel"

  let modalShow:boolean = false

  export let menuPos: Array<GetModel>;

  export let TotalCost: number =  0


  function minusOrder(id:number) {
    menuPos.forEach((item) => {
      if (item.id === id) {
        item.quantity = item.quantity - 1
        TotalCost -= item.stockunitPrice
      }
    })
    menuPos = menuPos
    TotalCost = TotalCost
  }

  function deleteOrder(id:number) {
    menuPos.forEach((item) => {
      if (item.id === id) {
        TotalCost -= item.stockunitPrice * item.quantity
        item.quantity = 0
      }
    })
    menuPos = menuPos
    TotalCost = TotalCost
    
  }

  function plusOrder(id:number) {
    menuPos.forEach((item) => {
      if (item.id === id) {
        item.quantity = item.quantity + 1
        TotalCost += item.stockunitPrice
      }
    })
    menuPos = menuPos
    TotalCost = TotalCost
  }

  function showModal() {
    modalShow = true
    modalShow = modalShow  
  }

  function closeModal() {
    modalShow = false
    modalShow = modalShow  
  }

</script>

<div id="ordering">
  {#if modalShow === true}
  <div id="modal" >
    <div id="box-modal">
      <Calculate bind:menuPos bind:TotalCost bind:modalShow/>
    </div>
    <div id="dummy" on:click={closeModal}>
    </div>
  </div>
  {/if}
  <div id="headerOrder">รายการสั่งซื้อ</div>
  <div id="menuListPrepare">
    <!-- loop-order -->
    {#each menuPos as orderlistPrepare}
      {#if orderlistPrepare.quantity > 0}
        <div class="menuPrepare">
          <div class="menuPrepareLeft">
            <i class="fas fa-times delete" on:click={() => deleteOrder(orderlistPrepare.id)}/>
            <div class="menu-detail">
              <div class="name-menu">
                {orderlistPrepare.stockName}
              </div>
              <div class="cost-menu">
                ฿ {orderlistPrepare.stockunitPrice * orderlistPrepare.quantity}
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
    <div id="btn-submit-order" on:click={showModal}>
      <div>ยืนยันการสั่งซื้อ</div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "./seleted-order.scss";
</style>

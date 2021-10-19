<script lang="ts">
    let src = '/picture/chicken.jpg';
    
  
</script>
<!-- <button> -->
<div>
	<button class = 'Allbutton' on:click> ทั้งหมด </button>
	<button class = 'promotionbutton' on:click> โปรโมชั่น </button>
	<button class = 'chickenbutton' on:click> ไก่ทอด </button>
	<button class = 'Kaobutton' on:click> ข้าวเหนียว </button>
	<button class = 'hombutton' on:click> หอมเจียว </button>
</div>

<!-- picture -->
<div id="nongKai">
	<div class="card"><img class = "pchicken"{src} alt="">
		<div class="card-footer">
			<div class="nongKaitidsapork"><label >น่องไก่ติดสะโพก</label></div>
			<div class="Two">0</div>
		</div>
	</div>
</div>	




<style lang="scss">
   @import './pos.scss';
</style>
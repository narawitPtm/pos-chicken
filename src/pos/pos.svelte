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
	<div class="card-menu">
		<img class = "pchicken" src="{src}" alt="">
		<div class="card-footer">
			<div class="nongKaitidsapork">
				น่องไก่ติดสะโพก
			</div>
			<div class="Two">0</div>
		</div>
	</div>
</div>	




<style lang="scss">
   @import './pos.scss';
</style>
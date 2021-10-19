<script lang = 'ts'>
    let src = '/picture/chicken.jpg';
    let menu: {name:string, logo:string}[] = [
		{ name: 'เมนู', logo: '' },
		{ name: 'ออเดอร์ที่เปิดอยู่', logo: '' },
		{ name: 'สินค้าคงคลัง', logo: '' },
		{ name: 'รายงาน', logo: '' },
	];
  
</script>
<!-- <button> -->
<button class = 'Allbutton' on:click> ทั้งหมด </button>
<button class = 'promotionbutton' on:click> โปรโมชั่น </button>
<button class = 'chickenbutton' on:click> ไก่ทอด </button>
<button class = 'Kaobutton' on:click> ข้าวเหนียว </button>
<button class = 'hombutton' on:click> หอมเจียว </button>
<!-- picture -->
<img class = "pchicken1"{src} alt="">
<img class = "pchicken2"{src} alt="">
<img class = "pchicken3"{src} alt="">
<img class = "pchicken4"{src} alt="">
<img class = "pchicken5"{src} alt="">
<!-- text -->
<div class="Nong">
<div>น่องติดสะโพก</div>

</div>

<style lang="scss">
   @import './pos.scss';
</style>
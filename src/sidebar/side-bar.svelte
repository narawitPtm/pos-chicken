<script lang="ts">
	let menulists: {name:string, logo:string}[] = [
		{ name: 'เมนู', logo: '' },
		{ name: 'ออเดอร์ที่เปิดอยู่', logo: '' },
		{ name: 'สินค้าคงคลัง', logo: '' },
		{ name: 'รายงาน', logo: '' },
	];
</script>

<div id="sideBar">
    <div id="top">
        <div id="logo"></div>
		<div id="top-border-bottom"></div>
    </div>
    <div id="menuBar">
		{#each menulists as menulist}
			<div id="posMenuList" class="menu-select">
				<div id="logoMenuList">{menulist.logo}</div>
				<div id="textMenuList">{menulist.name}</div>
			</div>
		{/each}
		<!-- <div class="menu-active">
			<div id="logoMenuList">{menulist.logo}</div>
			<div id="textMenuList">{menulist.name}</div>
		</div> -->
    </div>
</div>

<style lang="scss">
@import './side-bar.scss';
</style>
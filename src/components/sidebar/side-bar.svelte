<script lang="ts">
	import { push } from 'svelte-spa-router'
	let menulists: {name:string, logo:string, isActive:boolean, path:string}[] = [
		{ name: 'เมนู', logo: 'fas fa-book', isActive: true, path:"/pos"},
		{ name: 'ออเดอร์ที่เปิดอยู่', logo: 'fas fa-envelope-open-text', isActive: false, path:"/order" },
		{ name: 'สินค้าคงคลัง', logo: 'fas fa-cubes', isActive: false, path:"/stock" },
		{ name: 'รายงาน', logo: 'fas fa-file-alt', isActive: false, path:"" }
	];

	function goto(index: number) {
		menulists.forEach((item, indexs) => {
			if(index === indexs) {
				item.isActive = true
			}
			else {
				item.isActive = false
			}
		})
		menulists = menulists
	}
</script>

<div id="sideBar">
    <div id="top">
        <div id="logo" on:click={() => push('/pos}')}><i class="fas fa-drumstick-bite" aria-hidden="true"></i></div>
		<div id="top-border-bottom"></div>
    </div>
    <div id="menuBar">
		{#each menulists as menulist, index}
		{#if menulist.isActive}
		<div class="menu-active">
			<div id="boxLogoActive">
				<div id="logoMenuListActive"><i class={menulist.logo} aria-hidden="true"></i></div>
				<div id="textMenuListActive">{menulist.name}</div>
			</div>
			<div id="activeLineActive"></div>
		</div>
		{:else}
		<div id="posMenuList" class="menu-select" on:click={()=>(goto(index), push(menulist.path))}>
			<div id="boxLogo">
				<div id="logoMenuList"> <i class={menulist.logo} aria-hidden="true"></i> </div>
				<div id="textMenuList">{menulist.name}</div>
			</div>
			<div id="activeLine"></div>
		</div>
		{/if}
		{/each}
    </div>
</div>

<style lang="scss">
@import './side-bar.scss';
</style>
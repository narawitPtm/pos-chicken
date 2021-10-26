<script lang="ts">
	import SelectedOrder from "../seletected-order/seleted-order.svelte"
	import Loading from "../loading/loading.svelte"
	import { onMount } from "svelte"
	import { get, post } from "../store/apipos"
	// import  PostModel from '../../Model/PostModel'
	import type GetModel from "../../Model/GetModel"
	// import PostModelResponse from '../../Model/PostModelResponse'

	let loading: boolean = true
	let typeChicken: { name: string, isActive: boolean, path: string }[] = [
		{ name: "ทั้งหมด", isActive: true, path: "" },
		{ name: "โปรโมชั่น", isActive: false, path: "" },
		{ name: "ไก่ทอด", isActive: false, path: "" },
		{ name: "ข้าวเหนียว", isActive: false, path: "" },
		{ name: "หอมเจียว", isActive: false, path: "" },
	]

	let TotalCost: number

	function calcost(id: number) {
		menuPos.forEach((item) => {
			if (id === item.id) {
				TotalCost += item.stockunitPrice
			}
		})
		TotalCost = TotalCost
	}

	let typeMenu: number = 0
	function submenu(index: number) {
		typeChicken.forEach((item, indexs) => {
			if (index === indexs) {
				item.isActive = true
				typeMenu = index
			} else {
				item.isActive = false
			}
		})
		typeChicken = typeChicken
	}

	function plusOrder(menuId: number) {
		menuPos.forEach((item) => {
			if (menuId === item.id) {
				item.quantity = (item.quantity ?? 0) + 1
				calcost(item.id)
			}
		})
		menuPos = menuPos
	}

	onMount(async () => {
		setTimeout(() => {
			console.log("delayed!")
			loading = false
			getStock()
		}, 1000)
	})
	let menuPos: Array<GetModel> = []
	async function getStock(): Promise<void> {
		try {
			menuPos = await get("/stock")
		} catch (error) {
			console.error(error)
		}
	}

</script>

{#if loading}
	<Loading />
{:else}
	<div id="posMain">
		<div class="filter-btn-box">
			{#each typeChicken as typeKen, index}
				<button
					class={`filter-button ${typeKen.isActive ? "active" : ""}`}
					on:click={() => submenu(index)}>{typeKen.name}</button
				>
			{/each}
		</div>
		<!-- picture -->
		<div id="nongkaiBox">
			<div id="nongKai">
				{#if typeMenu !== 0}
					{#each menuPos.filter((a) => a.typeMenu === typeMenu) as menuChicken}
						<div
							class="card-menu"
							on:click={() => plusOrder(menuChicken.id)}
						>
							<img class="chicken-img" src={menuChicken.pathUrl} alt="" />
							<div class="card-footer">
								<div class="chicken-text">
									{menuChicken.stockName}
								</div>
								<div
									class={`nothing ${
										menuChicken.quantity > 0
											? "selected"
											: ""
									}`}
								>
									{menuChicken.quantity ?? 0} 
								</div>
							</div>
						</div>
					{/each}
				{:else}
					{#each menuPos as menuChicken}
						<div
							class="card-menu"
							on:click={() => plusOrder(menuChicken.id)}
						>
							<img class="chicken-img" src={menuChicken.pathUrl} alt="" />
							<div class="card-footer">
								<div class="chicken-text">
									{menuChicken.stockName}
								</div>
								<div
									class={`nothing ${
										menuChicken.quantity > 0
											? "selected"
											: ""
									}`}
								>
									{menuChicken.quantity ?? 0}
								</div>
							</div>
						</div>
					{/each}
				{/if}
			</div>
		</div>
		<SelectedOrder bind:menuPos bind:TotalCost />
		<!-- <SelectedOrder bind:TotalCost /> -->
	</div>
{/if}

<style lang="scss">
	@import "./pos.scss"
</style>

<script lang="ts">
	import SelectedOrder from "../seletected-order/seleted-order.svelte"
	import Loading from "../loading/loading.svelte"
	import { onMount } from "svelte"
	import { get } from "../store/apipos"
	import type GetMenu from "../../Model/GetModel"

	let menuPos: Array<GetMenu> = []
	let loading: boolean = true
	let TotalCost: number
	let typeMenu: number = 0

	let typeChicken: { name: string, isActive: boolean, path: string }[] = [
		{ name: "ทั้งหมด", isActive: true, path: "" },
		{ name: "โปรโมชั่น", isActive: false, path: "" },
		{ name: "ไก่ทอด", isActive: false, path: "" },
		{ name: "ข้าวเหนียว", isActive: false, path: "" },
		{ name: "หอมเจียว", isActive: false, path: "" },
	]

	onMount(async () => {
    await getStock()
		setTimeout(() => {
			console.log("delayed!")
			loading = false
		}, 1000)
	})


	function calcost(id: number) {
		menuPos.forEach((item) => {
			if (id === item.id) {
				TotalCost += item.stockunitPrice
			}
		})
		TotalCost = TotalCost
	}

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
    console.log(typeMenu)
    menuPos = menuPos
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

	async function getStock(): Promise<void> {
		try {
			loading = true
			menuPos = await get("/stock")
		} catch (error) {
			console.error(error)
		}
		finally {
			loading = false
		}
	}

function mapDataToCard() {
	return menuPos.filter((a) => typeMenu ? a.typeMenuN === typeMenu : a.typeMenuN )
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
		<div id="nongkaiBox">
			<div id="nongKai">
					{#each menuPos.filter((a) => typeMenu ? a.typeMenuN === typeMenu : a.typeMenuN ) as menuChicken}
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
			</div>
		</div>
		<SelectedOrder bind:menuPos bind:TotalCost bind:loading/>
	</div>
{/if}

<style lang="scss">
	@import "./pos.scss"
</style>

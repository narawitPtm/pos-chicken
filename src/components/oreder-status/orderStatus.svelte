<script lang="ts">
    import Select from "svelte-select";
    import { onMount } from "svelte";
    import Loading from "../loading/loading.svelte";
    import type GetOrder from "../../Model/GetOrder";
    import { get, patch } from "../store/apipos";
    import type patchStateRequest from "../../Model/PatchRequest";
    import type SelectModel from "../../Model/SelectModel";

    let selectedId;
    let statusLabal: Array<SelectModel> = [
        { id: 1, text: 'รออาหาร' },
        { id: 2, text: "รอลูกค้า" },
        { id: 3, text: "ส่งสำเร็จ" },
    ];

    let loading: boolean = true;
    onMount(async () => {
        await getOrders();
        loading = false
        // setTimeout(() => {
        //     console.log("delayed!");
        //     loading = false;
        //     getOrders();
        // }, 1000);
    });

    let orderList: Array<GetOrder> = []
	async function getOrders(): Promise<void> {
		try {
			const response: Array<GetOrder> = await get("/order")
             orderList = response
             let newOrder: Array<GetOrder> = [...orderList]
            newOrder.forEach(item => item.selectState = {id: 0, text: ''})
            newOrder.forEach((item: GetOrder) => {
                 console.log('ok')
                //  item.selectState.id = item.state.id
                item.selectState = [...statusLabal].filter(x => x.id === item.state.id)[0]
                //  item.selectState.text = item.state.stateOrder
                 console.log('okokok')
             })
             orderList = newOrder
             console.log(orderList[0].selectState === statusLabal[0])
            console.log(orderList)
		} catch (error) {
			console.error(error)
		}
	}
    
    let patchState: Array<patchStateRequest> = []
    async function patchOrder(index: number): Promise<void> {
		try {
            const request: patchStateRequest = {
                queueOrder: orderList[index].queue,
                stateId: orderList[index].selectState.id
            }
			patchState = await patch("/Order/state", request)
            console.log(orderList)
		} catch (error) {
			console.error(error)
		}
	}

</script>

{#if loading}
    <Loading />
{:else}
    <div id="orderStatus">
        <div id="topic">
            <p class="topic-text">ออเดอร์ที่เปิดอยู่</p>
        </div>
        <div id="order">
            {#each orderList as order, index}
                <div class="order-card">
                    <div class="details">
                        <div class="no-text"># {order.queue}</div>
                        <div class="menu-scrollbar">
                            {#each order.products as menu}
                                <div class="menu-item">
                                    <p class="menu">{menu.stockName}</p>
                                    <p class="price">{menu.quantity}</p>
                                </div>
                            {/each}
                        </div>
                    </div>
                    <div class="bottom">
                        <!-- on:change={() => {patchOrder(order.queue, selectedId)}} -->
                        <!-- filter(item => item.id === order.state.id -->
                        <select
                            bind:value={orderList[index].selectState}
                            name="status"
                            id="status"
                            on:change={() => patchOrder(index)}
                            class={`status-select ${order.state.id === 1 ? "yellow" : order.state.id === 2 ? "red" : order.state.id === 3 ? "green" : "" }`}
                        >
                            {#each statusLabal as id}
                                <option
                                    selected={id.id === order.state.id}
                                    class={`option ${id.id === 1 ? "yellow" : id.id === 2 ? "red" : id.id === 3 ? "green" : "" }`}
                                    value={id}
                                >
                                    {id.text}
                                </option>
                            {/each}
                        </select>
                    </div>
                </div>
            {/each}
        </div>
    </div>
{/if}

<style lang="scss">
    @import "./orderStatus.scss";
</style>

<script lang="ts">
    import Select from "svelte-select";
    import { onMount } from "svelte";
    import Loading from "../loading/loading.svelte";

    type menuList = {
        name: string;
        quantity: number;
    };

    type statusList = {
        id: number;
        name: string;
    };

    type orderList = {
        no: number;
        menuList: menuList[];
        status: number;
    };

    let orders: orderList[] = [
        {
            no: 1,
            menuList: [
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
            ],
            status: 2,
        },
        {
            no: 2,
            menuList: [
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
            ],
            status: 2,
        },
        {
            no: 3,
            menuList: [
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
            ],
            status: 2,
        },
        {
            no: 4,
            menuList: [
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
            ],
            status: 1,
        },
        {
            no: 5,
            menuList: [
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
            ],
            status: 1,
        },
        {
            no: 6,
            menuList: [
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
            ],
            status: 1,
        },
        {
            no: 7,
            menuList: [
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
                {
                    name: "ไก่ทอด",
                    quantity: 5,
                },
            ],
            status: 3,
        },
    ];

    let selectedId;
    let statusLabal = [
        { id: 1, text: "รอ" },
        { id: 2, text: "กำลังทำ" },
        { id: 3, text: "ทำเสร็จแล้ว" },
    ];

    let loading: boolean = true;
    onMount(async () => {
        setTimeout(() => {
            loading = false;
        }, 1000);
    });
</script>

{#if loading}
    <Loading />
{:else}
    <div id="orderStatus">
        <div id="topic">
            <p class="topic-text">ออเดอร์ที่เปิดอยู่</p>
        </div>
        <div id="order">
            {#each orders as order, index}
                <div class="order-card">
                    <div class="details">
                        <div class="no-text"># {order.no}</div>
                        <div class="menu-scrollbar">
                            {#each order.menuList as menu}
                                <div class="menu-item">
                                    <p class="menu">{menu.name}</p>
                                    <p class="price">{menu.quantity}</p>
                                </div>
                            {/each}
                        </div>
                    </div>
                    <div class="bottom">
                        <select
                            name="status"
                            id="status"
                            class={`status-select ${
                                order.status === 1
                                    ? "yellow"
                                    : order.status === 2
                                    ? "red"
                                    : order.status === 3
                                    ? "green"
                                    : ""
                            }`}
                        >
                            {#each statusLabal as id}
                                <option
                                    selected={id.id === order.status}
                                    class={`option ${
                                        id.id === 1
                                            ? "yellow"
                                            : id.id === 2
                                            ? "red"
                                            : id.id === 3
                                            ? "green"
                                            : ""
                                    }`}
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

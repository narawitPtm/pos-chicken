<script lang="ts">
    import Select from "svelte-select"
    import type GetReport from "../../Model/GetReport"
    import { get } from "../store/apipos"
    import { onMount } from "svelte"
    import Loading from "../loading/loading.svelte"

    let total: { menu: string, quantity: number, price: number }[] = [
        {
            menu: "น่องติดสะโพก",
            quantity: 1210,
            price: 54450,
        },
        {
            menu: "อกไก่",
            quantity: 1210,
            price: 54450,
        },
        {
            menu: "ปิ้กไก่ทอด",
            quantity: 1210,
            price: 54450,
        },
        {
            menu: "หมูสามชั้นทอด",
            quantity: 1210,
            price: 54450,
        },
        {
            menu: "น่องไก่",
            quantity: 1210,
            price: 54450,
        },
        {
            menu: "หอมเจียว",
            quantity: 1210,
            price: 54450,
        },
        {
            menu: "หนังติดมัน",
            quantity: 1210,
            price: 54450,
        },
        {
            menu: "ข้าวเหนียวดำ",
            quantity: 1210,
            price: 54450,
        },
        {
            menu: "ไก่ทั้งตัว",
            quantity: 1210,
            price: 54450,
        },
        {
            menu: "หอมเจียวใหญ่",
            quantity: 1210,
            price: 54450,
        },
        {
            menu: "ชุดสุดคุ้ม",
            quantity: 1210,
            price: 54450,
        },
        {
            menu: "ชุดจุใจใช่เลย",
            quantity: 1210,
            price: 54450,
        },
        {
            menu: "ชุดครอบครัวสุขสันต์",
            quantity: 1210,
            price: 54450,
        },
    ]

    let items: { value: number; label: string }[] = [
        { value: 1, label: "วัน" },
        { value: 2, label: "สัปดาห์" },
        { value: 3, label: "เดือน" },
        { value: 4, label: "ปี" },
    ];

    let loading: boolean = true;
    onMount(async () => {
        setTimeout(() => {
            console.log("delayed!");
            loading = false;
            getReport()
        }, 1000);
        
    });
    let value = { value: 1, label: "วัน" };
    let responseReport: Array<GetReport> = [];
    let totalSum: number = 0;
    async function getReport(): Promise<void> {
        try {
            const response: Array<GetReport> = await get("/Order/report");
            responseReport = response;
            sumTotal();
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    }

    function sumTotal() {
        totalSum = responseReport
            .map((item) => item.totalPrice)
            .reduce((a, b) => a + b, 0);
    }
</script>

{#if loading}
    <Loading />
{:else}
    <div id="report">
        <div id="topic">
            <p class="topic-text">รายงานสรุปยอดขาย</p>
        </div>
        <div id="detail">
            <div id="duration">
                <div class="duration-div">
                    <p class="text">รายงานประจำ</p>
                </div>
                <div class="select">
                    <Select {items} {value} on:select={() => {}} />
                </div>
            </div>
            <div id="total">
                <div class="total-div">
                    <p class="total-text">ยอดขายรวม</p>
                    <p class="total-text">
                        {new Intl.NumberFormat("th-TH").format(totalSum)}
                    </p>
                    <p class="total-text">บาท</p>
                </div>
            </div>
            <div id="report-menu">
                {#each responseReport as item}
                    <div class="menu">
                        <p class="name">{item.stokcName}</p>
                        <p class="quantity">
                            {new Intl.NumberFormat("th-TH").format(
                                item.totalUnit
                            )}
                        </p>
                        <p class="piece">ชิ้น</p>
                        <p class="price">
                            {new Intl.NumberFormat("th-TH").format(
                                item.totalPrice
                            )}
                        </p>
                        <p class="bath">บาท</p>
                    </div>
                {/each}
            </div>
        </div>
    </div>
{/if}

<style lang="scss">
    @import "./report.scss";
    :root {
        --border: 3px solid #ffa14a;
        --borderHoverColor: #b2b8bf;
        --borderFocusColor: #ffa14a;
        --borderRadius: 20px;
        --height: 52px;
        --padding: 0 20px;
        --background: #fff;
        --inputColor: #3f4f5f;
        --inputFontSize: 14px;
        --inputLetterSpacing: -0.08px;
        --placeholderColor: #78848f;
        --disabledBackground: #ebedef;
        --disabledBorderColor: #ebedef;
        --disabledColor: #c1c6cc;
        --disabledPlaceholderColor: #c1c6cc;
        --selectedItemPadding: 0 20px 0 0;
        --clearSelectRight: 10px;
        --clearSelectTop: 11px;
        --clearSelectBottom: 11px;
        --clearSelectWidth: 20px;
        --clearSelectColor: #c5cacf;
        --clearSelectHoverColor: #ffa14a;
        --clearSelectFocusColor: #3f4f5f;
        --indicatorRight: 10px;
        --indicatorTop: 11px;
        --indicatorWidth: 20px;
        --indicatorHeight: 20px;
        --indicatorColor: #c5cacf;
        --indicatorFill: currentcolor;
        --indicatorStroke: currentcolor;
        --spinnerRight: 10px;
        --spinnerLeft: 11px;
        --spinnerWidth: 20px;
        --spinnerHeight: 20px;
        --spinnerColor: #51ce6c;
        --spinnerAnimation: rotate 0.75s linear infinite;
        --multiSelectPadding: 0 35px 0 16px;
        --multiSelectInputPadding: 0;
        --multiSelectInputMargin: 0;
        --errorBorder: 1px solid #ff2d55;
        --listShadow: 0 2px 3px 0 rgba(44, 62, 80, 0.24);
        --listBorderRadius: 4px;
        --listMaxHeight: 250px;
        --listBackground: #fff;
        --virtualListHeight: 200px;
        --groupTitleColor: #8f8f8f;
        --groupTitleFontSize: 12px;
        --groupTitlePadding: 0 20px;
        --groupTitleTextTransform: uppercase;
        --listEmptyTextAlign: center;
        --listEmptyPadding: 20px 0;
        --listEmptyColor: #78848f;
        --itemPadding: 0 20px;
        --itemActiveBg: #b9daff;
        --itemIsActiveBG: #ffa14a;
        --itemIsActiveColor: #fff;
        --itemFirstBorderRadius: 4px 4px 0 0;
        --itemHoverBG: #e7f2ff;
        --multiItemBG: #ebedef;
        --multiItemMargin: 5px 5px 0 0;
        --multiItemBorderRadius: 16px;
        --multiItemHeight: 32px;
        --multiItemPadding: 0 10px 0 15px;
        --multiLabelMargin: 0 5px 0 0;
        --multiItemActiveBG: #006fff;
        --multiItemActiveColor: #fff;
        --multiItemDisabledHoverBg: #ebedef;
        --multiItemDisabledHoverColor: #c1c6cc;
        --multiClearRadius: 50%;
        --multiClearBG: 50%;
        --multiClearWidth: #52616f;
        --multiClearHeight: 16px;
        --multiClearTop: 8px;
        --multiClearTextAlign: center;
        --multiClearPadding: 1px;
        --multiClearHoverBG: #fff;
        --multiClearHoverFill: #006fff;
        --multiClearFill: #ebedef;
    }
</style>

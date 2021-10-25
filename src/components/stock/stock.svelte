<script lang="ts">
  import type GetStock from "../../Model/GetStock";
  import { get } from "../store/apipos";
  import { onMount } from "svelte";
  import Loading from "../loading/loading.svelte";

  type stockType = {
    stockId: number;
    stockName: string;
    stockTotal: number;
    stockUnitPrice: number;
    totalStockPrice: number;
    pointToBuy: number;
    additionalUnit: string;
  };

  let loading: boolean = true;

  onMount(async () => {
    setTimeout(() => {
      console.log("delayed!");
      loading = false;
    }, 1000);

    // getStock();
  });

  let responseStock: Array<GetStock> = [];

  async function getStock(): Promise<void> {
    try {
      const res: Array<GetStock> = await get("/stock");
      responseStock = res;
      console.log(responseStock);
    } catch (error) {
      console.error(error);
    }
  }

  let listStock: stockType[] = [
    {
      stockId: 1,
      stockName: "ไก่ทั้งตัว",
      stockTotal: 5,
      stockUnitPrice: 70,
      totalStockPrice: 350,
      pointToBuy: 10,
      additionalUnit: "ซื้อ",
    },
    {
      stockId: 2,
      stockName: "น่องไก่",
      stockTotal: 25,
      stockUnitPrice: 40,
      totalStockPrice: 1000,
      pointToBuy: 15,
      additionalUnit: "ไม่ซื้อ",
    },
    {
      stockId: 2,
      stockName: "น่องไก่",
      stockTotal: 25,
      stockUnitPrice: 40,
      totalStockPrice: 1000,
      pointToBuy: 15,
      additionalUnit: "ไม่ซื้อ",
    },
    {
      stockId: 2,
      stockName: "น่องไก่",
      stockTotal: 25,
      stockUnitPrice: 40,
      totalStockPrice: 1000,
      pointToBuy: 15,
      additionalUnit: "ไม่ซื้อ",
    },
  ];
</script>

{#if loading}
  <Loading />
{:else}
  <div id="table" class="table-box">
    <div id="header"><p class="header-text">สินค้าคงคลัง</p></div>
    <div class="custom-table">
      <table>
        <thead class="header-table">
          <tr class="row-header-box">
            <th class="column-header-box">
              <div class="topic-column no">ลำดับ</div>
            </th>
            <th class="column-header-box">
              <div class="topic-column name">ชื่อวัตถุดิบ</div>
            </th>
            <th class="column-header-box">
              <div class="topic-column stockRemain">เหลืออยู่</div>
            </th>
            <th class="column-header-box">
              <div class="topic-column priceUnit">ราคาต่อหน่วย</div>
            </th>
            <th class="column-header-box">
              <div class="topic-column totalPrice">มูลค่าที่เหลือ</div>
            </th>
            <th class="column-header-box">
              <div class="topic-column pointToBuy">จุดที่ต้องซื้อ</div>
            </th>
            <th class="column-header-box">
              <div class="topic-column restock">ต้องซื้อเพิ่ม</div>
            </th>
          </tr>
        </thead>
      </table>
    </div>
    <div class="data-table">
      <table id="bodyTable">
        <tbody id="dataBody" class="body-table">
          {#each responseStock as row, index}
            <tr class="row-data-column">
              <td class="data-column">
                <div class="data stockId">{index + 1}</div>
              </td>
              <td class="data-column">
                <div class="data stockName">{row.stockName}</div>
              </td>
              <td class="data-column">
                <div class="data stockTotal">{row.stockTotal}</div>
              </td>
              <td class="data-column">
                <div class="data stockUnitPrice">{row.stockunitPrice}</div>
              </td>
              <td class="data-column">
                <div class="data totalStockPrice">
                  {row.stockunitPrice * row.stockTotal}
                </div>
              </td>
              <td class="data-column">
                <div class="data pointToBuy">{row.pointtoBuy}</div>
              </td>
              <td class="data-column">
                <div
                  class="data additionalUnit"
                  style="color: {row.stockTotal > row.pointtoBuy
                    ? 'red'
                    : 'green'}"
                >
                  {row.stockTotal > row.pointtoBuy ? "ไม่ซื้อ" : "ซื้อ"}
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
{/if}

<style lang="scss">
  @import "./stock.scss";
</style>

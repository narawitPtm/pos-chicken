<script lang="ts">
  import Select from "svelte-select"
  import type GetReport from "../../Model/GetReport"
  import { get } from "../store/apipos"
  import { onMount } from "svelte"
  import Loading from "../loading/loading.svelte"

  let items: { value: number; label: string }[] = [
      { value: 1, label: "วัน" },
      { value: 2, label: "สัปดาห์" },
      { value: 3, label: "เดือน" },
      { value: 4, label: "ปี" },
  ];

  let loading: boolean = true;
  onMount(async () => {
      setTimeout(() => {
          loading = false;
          getReport(new Date())
      }, 1000);
      
  });
  let value = { value: 1, label: "วัน" };
  let responseReport: Array<GetReport> = [];
  let totalSum: number = 0;
  async function getReport(datetime: Date): Promise<void> {
      try {
          loading = true
          const response: Array<GetReport> = await get(`/Order/report/?scope=${datetime.toISOString()}`);
          responseReport = response;
          sumTotal();
      } catch (error) {
          console.error(error);
      }
      finally {
          setTimeout(() => {
          loading = false;
      }, 1000);
      }
  }

  function handleSelect(select) {
      getByDate(select.detail.value)
  }

  function getByDate(start: number) {
      let date = new Date()
      switch (start) {
          case 1: 
              getReport(date)
              break;
          case 2:
              let week = new Date(date.setDate(date.getDate() - date.getDay()))
              getReport(week)
              break;
          case 3:
              let firstday = new Date(date.getFullYear(), date.getMonth(), 1)
              getReport(firstday)
              break;
          case 4:
              let year = new Date(date.getFullYear(), 1, 1)
              getReport(year)
              break;
          default:
              break;
      }
      let day: number = date.getDay()
      date.setDate(date.getDate() - start)
  }

  function sumTotal() {
      totalSum = responseReport
          .map((item) => item.totalPrice)
          .reduce((a, b) => a + b, 0);
  }
</script>

{#if loading}
  <Loading />
{/if}
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
                  <Select {items} {value} on:select={ handleSelect } />
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

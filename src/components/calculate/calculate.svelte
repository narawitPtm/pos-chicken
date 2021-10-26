<script lang="ts">
    export let TotalCost: number
    let cash: number = 0
</script>

<div id="calculate-card">
    <div id="topic">
        <p class="topic-text">คำนวณราคาสินค้า</p>
    </div>
    <div id="detail">
        <div class="detail-item">
            <p class="label">รวมราคาทั้งหมด</p>
            <p class="price">{TotalCost}</p>
            <p class="bath">บาท</p>
        </div>
        <div class="detail-item">
            <p class="label">ส่วนลด</p>
            <p class="price">0</p>
            <p class="bath">บาท</p>
        </div>
        <div class="detail-item">
            <p class="label">รับมา</p>
            <div class="price-input">
                <input class="input" type="number" placeholder="" bind:value={cash}/>
            </div>
            <p class="bath">บาท</p>
        </div>
        <hr style="margin: 10px 0 10px 0;">
        <div class="detail-item">
            <p class="label">เงินทอน</p>
            <p class="price">{cash - TotalCost}</p>
            <p class="bath">บาท</p>
        </div>
    </div>
    <div id="bottom">
        <button class="cash-button">ชำระเงิน</button>
    </div>
</div>

<style lang="scss">
    @import "./calculate.scss";
</style>

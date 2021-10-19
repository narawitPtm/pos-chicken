<script lang="ts">
    type stockType = {
        stockId: number;
        stockName: string;
        stockTotal: number;
        stockUnitPrice: number;
        totalStockPrice: number;
        pointToBuy: number;
        additionalUnit: string;
    }
    
    type groupStockType = {
        [key:string]: stockType;
    }
    
    var listStock: stockType[] = [
        {
        "stockId": 1,
        "stockName": "ไก่ทั้งตัว",
        "stockTotal": 5,
        "stockUnitPrice": 70,
        "totalStockPrice": 350,
        "pointToBuy": 10,
        "additionalUnit": "ซื้อ"
        },
        {
        "stockId": 2,
        "stockName": "น่องไก่",
        "stockTotal": 25,
        "stockUnitPrice": 40,
        "totalStockPrice": 1000,
        "pointToBuy": 15,
        "additionalUnit": "ไม่ซื้อ"
        }
    ];
    </script>
    
    <div id="table" class="table-box">
        <table id="customTable">
            <thead id="customHeader" class="header-table">
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
            <tbody class='body-table'>
                {#each listStock as row}
                <tr class="row-data-column" >
                    <td class="data-column">{row.stockId}</td>
                    <td class="data-column">{row.stockName}</td>
                    <td class="data-column">{row.stockTotal}</td>
                    <td class="data-column">{row.stockUnitPrice}</td>
                    <td class="data-column">{row.totalStockPrice}</td>
                    <td class="data-column">{row.pointToBuy}</td>
                    <td class="data-column" style="color: {row.stockTotal > row.pointToBuy ? 'red' : 'green'}">{row.additionalUnit}</td>
                </tr>
                {/each}
            </tbody>
        </table>
    </div>
    
    <style lang="scss">
        @import './stock.scss';
    </style>
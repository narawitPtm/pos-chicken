<script lang="ts">
import type GetModel from "../../Model/GetModel";
import { post } from "../store/apipos"
import type PostModelRequest from "../../Model/PostModel"

export let TotalCost: number
let cash: number = 0
export let menuPos: GetModel[];
export let modalShow: boolean
export let loading: boolean

function mapBodyBill(): PostModelRequest[] {
    let newRequests: PostModelRequest[] = []
    menuPos.forEach((menu)=> {
        if (menu.quantity>0) {
            let newRequest: PostModelRequest = {
                stockId: menu.id,
                totalPromotion: 0,
                quantityOrder: menu.quantity,
                typeMenu: menu.typeMenuN
            }
            newRequests.push(newRequest)
        }
    })
    return newRequests
}

async function postBill(): Promise<void> {
		try {
            loading = true
			const newRequest: PostModelRequest[] = mapBodyBill()
            const responseBill: any = await post('/Order/buy', newRequest)
            setZero()
		} catch (error) {
			console.error(error)
		}
        finally {
            modalShow = false
            setTimeout(() => {
                //location.reload()
                loading = false
		}, 500)
        }
	}

function setZero() {
    menuPos.map( x => x.quantity = 0)
    TotalCost = 0
    menuPos = menuPos
}

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
        {#if cash >= TotalCost && TotalCost !== 0}
        <button class="cash-button" on:click={postBill}>ชำระเงิน</button>
        {:else}
        <button class="cash-button-dis">ชำระเงิน</button>
        {/if}
    </div>
</div>

<style lang="scss">
    @import "./calculate.scss";
</style>

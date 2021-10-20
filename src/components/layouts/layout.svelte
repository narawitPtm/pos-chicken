<script lang="ts">
    import OrderStatus from '../oreder-status/orderStatus.svelte';
    import SideBar from '../sidebar/side-bar.svelte';
    import Router from 'svelte-spa-router';
    import  POS from '../pos/pos.svelte'
    import Stock from '../stock/stock.svelte';
    const routes = {
    '/pos': POS,
    '/stock': Stock,
    '/order': OrderStatus,
    '*': POS,
}
</script>

<div id="layout">
    <div id="sideBarBox">
        <SideBar/>
    </div>
    <div id="bodyBox">
        <div id="mainBox">
            <!-- body -->
            <Router {routes}/>
            <!-- body -->
        </div>
    </div>
</div>

<style lang="scss">
#layout {
    $side-width: 100px;
    display: flex;
    #sideBarBox {
        position: fixed;
        width: $side-width;
        height: 100vh;
    }
    #bodyBox {
        width: calc(100% - #{$side-width});
        height: 100%;
        margin-left: $side-width;
        #mainBox {
        height: 100%;
        padding: 50px 40px;
        }
    }
}


</style>
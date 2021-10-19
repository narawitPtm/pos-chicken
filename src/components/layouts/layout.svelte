<script lang="ts">
    import SideBar from '../sidebar/side-bar.svelte';
    import SelectedOrder from '../seletected-order/seleted-order.svelte'    
//     const routes = {
//     '/': Home,
//     '/product/:id': ProductDetails,
//     '/login': isLogin ? Home : Login,
//     '*': Home,
//   }
</script>

<div id="layout">
    <div id="sideBarBox">
        <SideBar/>
    </div>
    <div id="bodyBox">
        <div id="mainBox">
            <SelectedOrder/>
        </div>
    </div>
</div>

<style lang="scss">
    #layout {
    $side-width: 120px;
    display: flex;
    #sideBarBox {
        position: fixed;
        width: $side-width;
        height: 100vh;
    }
    #bodyBox {
        width: 100%;
        height: 100%;
        margin-left: $side-width;
        #mainBox {
        height: 100%;
        padding: 50px 40px;
        }
    }
    }
</style>
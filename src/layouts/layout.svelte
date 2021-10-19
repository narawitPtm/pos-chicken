<script lang="ts">
    import  POS from '../pos/pos.svelte'
    import SideBar from '../sidebar/side-bar.svelte';
</script>

<div id="layout">
    <div id="sideBarBox">
        <SideBar/>
    </div>
    <div id="bodyBox">
        <div id="mainBox">
            <!-- body -->
            <POS/>
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
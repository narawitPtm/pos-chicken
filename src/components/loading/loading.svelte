<script>
    import { LottiePlayer } from "@lottiefiles/svelte-lottie-player";

    let controlsLayout = [];
</script>

<div id="loading">
    <LottiePlayer
        src="https://assets4.lottiefiles.com/private_files/lf30_ansmdrzi.json"
        autoplay={true}
        loop={true}
        controls={false}
        renderer="svg"
        background="transparent"
        height={250}
        width={250}
        {controlsLayout}
    />
</div>

<style lang="scss">
    @import "./loading.scss";
</style>

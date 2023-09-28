<script lang="ts">
    export let tab = 'DC';
    export let onTabChange = () => {};

</script>

<div class = "w-[20vw] rounded-[5px] bg-black  px-[2vh] text-white" on:click={()=>{onTabChange()}}>
    <div class = 'bg-lg-s h-[3vh] text-[1.8vh] font-bold uppercase font flex items-center tracking-[1px]'>{tab}</div>
</div>

<style>
    .bg-lg-s {
        background: linear-gradient(to bottom, #ffffff, rgb(204, 204, 204), rgba(255, 255, 255, 0.808));
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
    }
</style>
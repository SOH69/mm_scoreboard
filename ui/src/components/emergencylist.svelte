<script lang="ts">
    import { ROBBERY } from "@store/stores"
    import img from '../public/background.png'
</script>
<div class = "w-full max-h-[70.7vh] overflow-scroll no-scrollbar flex flex-col gap-[2px] items-center pb-1 pt-3">
    {#each $ROBBERY.services as service}
        <div style = 'background: url({img})' class = "w-[20vw] rounded-[5px] px-[2vh] text-white hover:scale-105 transition ease-in-out opacity-90">
            <div style = 'color: {service.color}' class = 'h-[3.5vh] text-[1.8vh] font-medium uppercase font flex items-center justify-between'>
                <span>{service.name}</span>
                <span>{service.amount}</span>
            </div>
        </div>
    {/each}
</div>

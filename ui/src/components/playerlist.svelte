<script>
	import Players from "./players.svelte"
    import { PLAYERS } from "@store/stores"
</script>
<div class = "w-full max-h-[70.7vh] overflow-scroll no-scrollbar flex flex-col gap-[2px] items-center pb-1 pt-3">
    {#if $PLAYERS != undefined && $PLAYERS.players.length != 0} 
        {#each $PLAYERS.players as player}
            <Players player={player} type = 'player'/>
        {/each}
    {/if}
</div>
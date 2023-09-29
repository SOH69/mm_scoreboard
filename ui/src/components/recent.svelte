<script>
	import Players from "./players.svelte"
    import { PLAYERS } from "@store/stores"
</script>

<div class = "w-full max-h-[70.7vh] overflow-scroll no-scrollbar flex flex-col gap-[2px] items-center py-1">
    {#if $PLAYERS != undefined && $PLAYERS.recent != undefined && $PLAYERS.recent.length != 0}
        {#each $PLAYERS.recent as player}
            <Players player={player} type = 'recent'/>
        {/each}
    {/if}
</div>
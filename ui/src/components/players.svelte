<script lang="ts">
    import { ReceiveNUI } from '../utils/ReceiveNUI'
    import img from '../public/background.png'
    import { IDENTIFIER } from '@store/stores';
    export let player = {
		id: 1,
		steam2: 'steam2',
		name: 'name',
		steam3: 'steam3',
		discord: 'discord',
		license: 'license',
        color: [255, 255, 255]
	};

    let label = {
        steam2: 'STEAM ID',
		name: 'NAME',
		steam3: 'COMMUNITY ID',
		discord: 'DISCORD',
		license: 'R* LICENSE',
    }

    let selected = false

    ReceiveNUI<boolean>('mouseleft', () => {
        selected = false
	})

    function onCopy(event: any) {
        let output = event.target.innerText.toLowerCase();
        const el = document.createElement('textarea');
        el.value = output;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    }
    function onSelect() {
        selected = true
    }

    function resetSelect() {
        selected = false
    }

    function componentToHex(c: number) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r: number, g: number, b: number) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
</script>

{#if !selected}
    <div style = 'background: url({img})' class = "w-[20vw] rounded-[8px] px-[2vh] text-white hover:scale-105 transition ease-in-out opacity-90" on:click={()=>{onSelect()}} on:mouseleave={()=>{resetSelect()}}>
        <div style = 'color: {rgbToHex(player.color[0], player.color[1], player.color[2])}' class = 'h-[3.5vh] text-[1.5vh] font-medium uppercase font flex items-center'>[{player.id}]&nbsp&nbsp{player[$IDENTIFIER.player.header]}</div>
    </div>
{:else}
    <div style = 'background: url({img}); background-size:cover;' class = "w-[20vw] rounded-[10px] px-[2vh] text-white hover:scale-105 transition ease-in-out opacity-100" on:click={()=>{onSelect()}} on:mouseleave={()=>{resetSelect()}}>
        <div class = "max-h-[15vh] py-3">
            <div style = 'color: {rgbToHex(player.color[0], player.color[1], player.color[2])}' class = 'text-[1.5vh] font-medium uppercase font flex items-center'>[{player.id}]&nbsp&nbsp{player[$IDENTIFIER.player.header]}</div>
            {#if $IDENTIFIER.player.list[0]}
            <div style = 'color: {rgbToHex(player.color[0], player.color[1], player.color[2])}' class = 'text-[1.5vh] font-medium uppercase font flex items-center' on:click={(e)=>{onCopy(e)}}>{label[$IDENTIFIER.player.list[0]]}:&nbsp&nbsp<span>{player[$IDENTIFIER.player.list[0]]}</span></div>
            {/if}
            {#if $IDENTIFIER.player.list[1]}
            <div style = 'color: {rgbToHex(player.color[0], player.color[1], player.color[2])}' class = 'text-[1.5vh] font-medium uppercase font flex items-center' on:click={(e)=>{onCopy(e)}}>{label[$IDENTIFIER.player.list[1]]}:&nbsp&nbsp<span>{player[$IDENTIFIER.player.list[1]]}</span></div>
            {/if}
            {#if $IDENTIFIER.player.list[2]}
            <div style = 'color: {rgbToHex(player.color[0], player.color[1], player.color[2])}' class = 'text-[1.5vh] font-medium uppercase font flex items-center' on:click={(e)=>{onCopy(e)}}>{label[$IDENTIFIER.player.list[2]]}:&nbsp&nbsp<span>{player[$IDENTIFIER.player.list[2]]}</span></div>
            {/if}
            {#if $IDENTIFIER.player.list[3]}
                <div style = 'color: {rgbToHex(player.color[0], player.color[1], player.color[2])}' class = 'text-[1.5vh] font-medium uppercase font flex items-center' on:click={(e)=>{onCopy(e)}}>{label[$IDENTIFIER.player.list[3]]}:&nbsp&nbsp<span>{player[$IDENTIFIER.player.list[3]]}</span></div>
            {/if}
        </div>
    </div>
{/if}
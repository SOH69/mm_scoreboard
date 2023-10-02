<script lang="ts">
    import { ReceiveNUI } from '../utils/ReceiveNUI'
    import img from '../public/background.png'
    import { IDENTIFIER } from '@store/stores';
    import '@fortawesome/fontawesome-free/css/all.min.css'

    export let player = {
		id: 1,
		steam2: 'steam2',
		name: 'name',
		steam3: 'steam3',
		discord: 'discord',
		license: 'license',
        fivem: 'fivem',
        color: [255, 255, 255],
        icon: undefined
	};
    export let type = 'player'

    let label = {
        steam2: 'STEAM ID',
		name: 'NAME',
		steam3: 'COMMUNITY ID',
		discord: 'DISCORD',
		license: 'R* LICENSE',
        fivem: 'FIVEM'
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
    <div class = "w-[20vw] rounded-[8px] px-[2vh] text-white hover:scale-105 transition ease-in-out opacity-90 flex items-center justify-between" style = 'background: url({img}); color: {rgbToHex(player.color[0], player.color[1], player.color[2])};' on:click={()=>{onSelect()}} on:mouseleave={()=>{resetSelect()}}>
        <div class = 'h-[3.5vh] text-[1.5vh] font-medium uppercase font flex items-center'>[{player.id}]&nbsp&nbsp{player[$IDENTIFIER[type].header]}</div>
        {#if player.icon != undefined}
            <i class = {player.icon}> </i>
        {/if}
    </div>
{:else}
    <div class = "w-[20vw] rounded-[10px] px-[2vh] text-white hover:scale-105 transition ease-in-out opacity-100" style = 'background: url({img}); background-size:cover; color: {rgbToHex(player.color[0], player.color[1], player.color[2])}' on:click={()=>{onSelect()}} on:mouseleave={()=>{resetSelect()}} >
        <div class = "max-h-[15vh] py-3">
            <div class = 'text-[1.5vh] font-medium uppercase font flex items-center'>[{player.id}]&nbsp&nbsp{player[$IDENTIFIER[type].header]}</div>
            {#if $IDENTIFIER[type].list[0]}
                <div class = 'text-[1.5vh] font-medium uppercase font flex items-center' on:click={(e)=>{onCopy(e)}}>{label[$IDENTIFIER[type].list[0]]}:&nbsp&nbsp<span>{player[$IDENTIFIER[type].list[0]]}</span></div>
            {/if}
            {#if $IDENTIFIER[type].list[1]}
                <div class = 'text-[1.5vh] font-medium uppercase font flex items-center' on:click={(e)=>{onCopy(e)}}>{label[$IDENTIFIER[type].list[1]]}:&nbsp&nbsp<span>{player[$IDENTIFIER[type].list[1]]}</span></div>
            {/if}
            {#if $IDENTIFIER[type].list[2]}
                <div class = 'text-[1.5vh] font-medium uppercase font flex items-center' on:click={(e)=>{onCopy(e)}}>{label[$IDENTIFIER[type].list[2]]}:&nbsp&nbsp<span>{player[$IDENTIFIER[type].list[2]]}</span></div>
            {/if}
            {#if $IDENTIFIER[type].list[3]}
                <div class = 'text-[1.5vh] font-medium uppercase font flex items-center' on:click={(e)=>{onCopy(e)}}>{label[$IDENTIFIER[type].list[3]]}:&nbsp&nbsp<span>{player[$IDENTIFIER[type].list[3]]}</span></div>
            {/if}
        </div>
    </div>
{/if}
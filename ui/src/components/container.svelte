<script lang='ts'>
	import Footer from "./footer.svelte"
    import Header from "./header.svelte"
	import Playerlist from "./playerlist.svelte"
	import Recent from "./recent.svelte"
    import Robberylist from "./robberylist.svelte"
    import Emergencylist from "./emergencylist.svelte"
    import { RobberyVisible, PlayerVisible } from '@store/stores'

    let tabs = ['RECENT DISCONNECTS', 'PLAYER LIST'];
    if ($RobberyVisible)
        tabs = ['EMERGENCY SERVICES', 'ROBBERY STATUS'];
    let nowTab = tabs[0];

    export function onTabChange() {
        nowTab = nowTab==tabs[0]? tabs[1]:tabs[0];
    }
</script>

<div class = "absolute flex flex-col gap-[5px] top-[7.5vh] right-[2vw] justify-center items-center w-[23vw]">
    <Header title={$RobberyVisible? 'ROBBERY STATUS':'PLAYER LIST'}/>
    {#if nowTab == 'PLAYER LIST' && $PlayerVisible}
        <Recent />
    {:else if nowTab == 'RECENT DISCONNECTS' && $PlayerVisible}
        <Playerlist />
    {:else if nowTab == 'ROBBERY STATUS' && $RobberyVisible}
        <Emergencylist />
    {:else if nowTab == 'EMERGENCY SERVICES' && $RobberyVisible}
        <Robberylist />
    {/if}
    <Footer tab={nowTab} onTabChange={onTabChange}/>
</div>
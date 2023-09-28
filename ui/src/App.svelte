<script lang="ts">
	import VisibilityProvider from '@providers/VisibilityProvider.svelte'
	import { BROWSER_MODE, RESOURCE_NAME, RobberyVisible, PlayerVisible } from '@store/stores'
	import DebugBrowser from '@providers/DebugBrowser.svelte'
	import AlwaysListener from '@providers/AlwaysListener.svelte'
	import Container from '@components/container.svelte'

	$RESOURCE_NAME = 'mm_scoreboard' // Change this to your resource name (case sensitive)
</script>

<VisibilityProvider>
	{#if $RobberyVisible || $PlayerVisible}
		<Container />
	{/if}
</VisibilityProvider>


<AlwaysListener />
{#if $BROWSER_MODE}
	<DebugBrowser />
	<div class="absolute w-screen h-screen top-0 left-0 dev-image" />
{/if}


<style>
	.dev-image {
		background-image: url('https://cdn.discordapp.com/attachments/1068663854143389788/1074878298498281554/HUD_-_Target_Menu.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
</style>
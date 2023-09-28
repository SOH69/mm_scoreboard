<script lang="ts">
	import { ReceiveNUI } from '../utils/ReceiveNUI'
	import { SendNUI } from '../utils/SendNUI'
	import { onMount } from 'svelte'
	import { BROWSER_MODE, VISIBILITY, PLAYERS, ROBBERY, RobberyVisible, PlayerVisible, COOLDOWN, IDENTIFIER } from '../store/stores'
	import BackdropFix from './BackdropFix.svelte'

	let isVisible: boolean
	let isBrowser: boolean

	BROWSER_MODE.subscribe((browser: boolean) => {
		isBrowser = browser
	})

	VISIBILITY.subscribe((visible: boolean) => {
		isVisible = visible
	})

	ReceiveNUI<boolean>('setVisible', (visible: boolean) => {
		VISIBILITY.set(visible)
		PlayerVisible.set(false)
		RobberyVisible.set(false)
	})

	ReceiveNUI<any>('setPlayerVisible', (data: any) => {
		VISIBILITY.set(data.show)
		PlayerVisible.set(data.show)
		RobberyVisible.set(false)
		if (data.show) {
			IDENTIFIER.set(data.config)
			PLAYERS.set(data.data)
		}
	})

	ReceiveNUI<any>('setRobberyVisible', (data: any) => {
		VISIBILITY.set(data.show)
		RobberyVisible.set(data.show)
		PlayerVisible.set(false)
		if (data.show) {
			COOLDOWN.set(data.data.cooldown)
			ROBBERY.set(data.data)
		}
	})

	ReceiveNUI('setBrowserMode', (data: boolean) => {
		BROWSER_MODE.set(data)
		console.log('browser mode enabled')
	})

	onMount(() => {
		const keyHandler = (e: KeyboardEvent) => {
			if (isVisible && ['Escape'].includes(e.code)) {
				SendNUI('hideUI')
				VISIBILITY.set(false)
				PlayerVisible.set(false)
				RobberyVisible.set(false)
			}
			if (
				!isVisible &&
				['Escape'].includes(e.code) &&
				isBrowser === true
			) {
				VISIBILITY.set(true)
			}
		}

		window.addEventListener('keydown', keyHandler)

		return () => window.removeEventListener('keydown', keyHandler)
	})
</script>

{#if isVisible}
	<main>
		<slot />
	</main>
	<!-- <BackdropFix /> -->
{/if}

<style>
	main {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 100;
		user-select: none;
		box-sizing: border-box;
		padding: 0;
		margin: 0;
		height: 100vh;
		width: 100vw;
	}
</style>

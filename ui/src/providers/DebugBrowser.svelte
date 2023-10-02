<script>
    import { debugData } from '../utils/debugData';

	let show = false;

	let playerlist = [];
	let recent = []
	for (let i = 1; i <= 30; i++) {
		let player = {
			id: i,
			steam2: `STEAM_0:${i % 2}:556300038`,
			name: `player${i}`,
			steam3: `11000014250ee${i}`,
			discord: `${i}26987939540893705`,
			license: `ef42b10d5f159589df750d4eecaeb55${i}925687e6`,
			fivem: `11087${i}`,
			color: i%5==0? [255, 69, 58]:[255, 255, 255],
			icon: i%10==0? 'fa-solid fa-person-military-rifle':undefined
		};
		playerlist.push(player);
	}
	for (let i = 1; i <= 5; i++) {
		let player = {
			id: i+10,
			steam2: `STEAM_0:${i % 2}:556300038`,
			name: `player${i+10}`,
			steam3: `11000014250ee${i+10}`,
			discord: `${i+10}26987939540893705`,
			license: `ef42b10d5f159589df750d4eecaeb55${i+10}925687e6`,
			fivem: `11087${i}`,
			color: i%5==0? [255, 69, 58]:[255, 255, 255]
		};
		recent.push(player);
	}

	let options = [
		{
			component: 'Show',
			actions : [
				{
					name: "show",
					action: "setVisible",
					data: true,
				},
				{
					name: "hide",
					action: "setVisible",
					data: false,
				},
			]
		},
		{
			component: 'Player List',
			actions : [
				{
					name: "show",
					action: "setPlayerVisible",
					data: {
						show: true,
						config: {
							player: {
								header: 'license',
								list: [
									'name',
									'steam3',
									'license',
									'discord',
								]
							},
							recent: {
								header: 'steam3',
								list: [
									'name',
									'steam3',
									'license',
									'discord',
								]
							}
						},
						data : {
							players: playerlist,
							recent: recent,
						}
					},
				},
				{
					name: "hide",
					action: "setPlayerVisible",
					data: {
						show: false
					},
				},
			]
		},
		{
			component: 'Robbery Status',
			actions : [
				{
					name: "show",
					action: "setRobberyVisible",
					data: {
						show: true,
						data : {
							robbery: [
								{
									name: 'FLEECA BANK ROBBERY',
									status: false
								},
								{
									name: 'STORE ROBBERY',
									status: true
								},
								{
									name: 'PACIFIC BANK ROBBERY',
									status: false
								},
							],
							services: [
								{
									color: [0, 0, 255],
									name: 'Police',
									amount: 5
								},
								{
									color: [255, 0, 0],
									name: 'Ambulance',
									amount: 5
								},
								{
									color: [255, 255, 255],
									name: 'Mechanic',
									amount: 5
								},
							],
						}
					},
				},
				{
					name: "hide",
					action: "setRobberyVisible",
					data: {
						show: false
					},
				},
			]
		}
	]
</script>


<div class="absolute top-0 left-1/2 z-[1000]">
	<button class="bg-red-500 text-white p-2"
		on:click={() => {
			show = !show;
		}}
	>
	Show
	</button>
	{#if show}
	<div class="w-fit h-fit bg-gray-600 p-2 ">
		{#each options as option}
		<div class="flex flex-row gap-2 items-center m-1">
			<p class="text-white">{option.component}</p>
			{#each option.actions as action}
			<button class="bg-blue-500 text-white p-2"
				on:click={() => {

					if (action.custom == true) {
						action.customFunction();
						return
					}
					debugData([
						{
							action: action.action,
							data: action.data,
						},
					])
				}}
			>
			{action.name}
			</button>
			{/each}
		</div>
		{/each}
	</div>
	{/if}
</div>
<script lang="ts">
	import Tag from '$lib/tag.svelte';
	import { TextMode, type Row } from '$lib/types';
	import { onMount } from 'svelte';

	let rows = $state(['row1', 'row2', 'row3']);
	//let rows = $state([]);
	let showRowSelect = $state(false);
	let selectedRow: number = $state(-1);
	let recentInput = $state('');

	let txtBox: HTMLElement | null = null;
	let inputBox: HTMLElement | null = null;
	let selectBox: HTMLElement | null = null;

	let table: Row[] = $state([]);

	let error = $state({
		isError: false,
		message: ''
	});

	let inputMode = $state(TextMode.COLUMN);
	onMount(() => {
		txtBox = document.getElementById('txtBox');
		inputBox = document.getElementById('inputCont');
		selectBox = document.getElementById('rowSelect');
		for (let i = 0; i < rows.length; i++) {
			let row: Row = {
				id: table.length,
				column: rows[table.length],
				value: null
			};
			table.push(row);
		}

		table.forEach((r) => {});
	});

	function checkRow() {
		if (txtBox == null) {
			return;
		}
		if (recentInput[recentInput.length - 1] == '/') {
            if(table.length == 0) {
                error.isError = true;
                error.message ='Their is no row currently'
                recentInput=""
                return
            }
			inputMode = TextMode.COLUMN;
			showRowSelect = true;
			selectBox?.focus();
		}
		if (recentInput[recentInput.length - 1] == ',' && inputMode == TextMode.VALUE) {
			inputMode = TextMode.COLUMN;
			addTag(recentInput.replace(',', ''));
			showRowSelect = false;
		}
	}
	function addRow() {
		inputMode = TextMode.VALUE;
		recentInput = '';
		inputBox?.focus();
	}

	function addTag(value: string) {
		if (selectedRow < 0 || selectedRow >= rows.length) {
			return;
		}

		table[selectedRow].value = value;
		showRowSelect = false;
		recentInput = '';
		selectedRow = -1;
		inputMode = TextMode.COLUMN;
	}
</script>

<main class="h-full w-full p-8 flex flex-col justify-start items-center">
	{#if selectedRow != -1 && inputMode == TextMode.VALUE}
		<h1>Enter value for: {rows[selectedRow]}</h1>
		<h3 class="text-sm">Enter comma after writing row value to confirm your input</h3>
	{/if}
	{#if error.isError}
		<h1 class="font-extrabold text-red-500">{error.message}</h1>
	{/if}
	<div
		id="inputCont"
		class="w-fit h-fit flex flex-col justify-start items-center border border-black rounded-lg"
	>
		<article class="tags flex flex-row justify-start items-center">
			<input
				type="text"
				name="txtBox"
				id="txtBox"
				class="w-fit h-10 rounded-lg border-none"
				oninput={checkRow}
				bind:value={recentInput}
			/>
			{#each table as row, i}
				{#if row.value != null}
					<Tag bind:row={table[i]} />
				{/if}
			{/each}
		</article>

		{#if showRowSelect}
			<select
				name="rows"
				id="rowSelect"
				class="mt-4 w-48 h-10 cursor-pointer"
				bind:value={selectedRow}
				onchange={addRow}
			>
				{#each table as row}
					<option value={row.id}>
						{row.column}
					</option>
				{/each}
			</select>
		{/if}
	</div>
</main>

<style>
	:global(.tag) {
		padding: 2px 8px;
		cursor: pointer;
		margin-left: 0.5rem;
		margin-right: 2px;
		border: 0.5 solid gray;
		border-radius: 5rem;
		font-size: 12px;
		text-align: center;
		background-color: gray;
		color: white;
		z-index: 100;
	}
	main {
		height: 100vh;
		/* background-color: #131313; */
	}
</style>

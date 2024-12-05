<script lang="ts">
	import type { Row } from "./types";

    let {row = $bindable() }:{row:Row} = $props()

</script>

<div id="row{row.id}" class="flex flex-row justify-center items-center h-fit w-fit px-2 py-1 cursor-pointer ml-2 mr-0.5 border border-gray-400 rounded-2xl text-xs text-center bg-gray-500 text-white" >
    {row.value}
    <button 
    class="h-5 w-5 text-center text-red-500 hover:bg-red-500 hover:text-white duration-300 rounded-full flex justify-center items-center "
    onclick={()=>row.value=null}
    >x</button>
</div>
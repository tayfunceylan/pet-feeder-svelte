<script lang="ts">
  import Spinner from '../spinner/spinner.svelte';
  import type { State } from '../spinner/spinner.svelte';
  let { state = 'loading' } = $props<{ state: State }>();
</script>

<div class="flex items-center space-x-3 rtl:space-x-reverse">
  <Spinner {state} />
  <span class="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
    >Pet Feeder</span
  >
</div>

<script context="module" lang="ts">
  export type State = 'empty' | 'loading' | 'loaded';
</script>

<script lang="ts">
  let { state } = $props<{ state: State }>();
</script>

<div
  class="inline-block h-7 w-7 rounded-full border-4 border-solid align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
  class:animate-spin={state === 'loading'}
  class:border-r-transparent={state === 'loading'}
  class:border-current={['loading', 'loaded'].includes(state)}
></div>

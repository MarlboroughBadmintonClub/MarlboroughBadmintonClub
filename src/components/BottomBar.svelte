<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="relative flex items-center justify-center h-full space-x-8 z-30">
  {@render children?.()}
</div>

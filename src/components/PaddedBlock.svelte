<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="p-4 space-y-2">
  {@render children?.()}
</div>

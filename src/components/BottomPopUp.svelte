<script lang="ts">
  import { fly } from 'svelte/transition';

  interface Props {
    open: boolean;
    children?: import('svelte').Snippet;
  }

  let { open = $bindable(), children }: Props = $props();

  const toggleOpen = () => {
    open = !open;
  };
</script>

{#if open}
  <div class="fixed inset-0 bg-inactive z-10" onclick={toggleOpen} aria-hidden="true"></div>

  <div
    class="fixed bottom-0 left-0 right-0 bg-active shadow-lg z-20 p-4 pb-24 transform"
    in:fly={{ y: 300, duration: 300 }}
    out:fly={{ y: 300, duration: 300 }}
    onclick={toggleOpen}
    role="none"
  >
    <div>
      {@render children?.()}
    </div>
  </div>
{/if}

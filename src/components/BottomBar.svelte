<script lang="ts">
  import { fly } from 'svelte/transition';
  import { Menu, CircleX } from 'lucide-svelte';

  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  let isOpen = $state(false);

  export const toggleOpen = () => {
    isOpen = !isOpen;
  };
</script>

<div class="relative flex items-center justify-center h-full z-30">
  <button class="p-2" onclick={toggleOpen}>
    {#if isOpen}
      <CircleX size="50" aria-label="Close menu" />
    {:else}
      <Menu size="50" aria-label="Open menu" />
    {/if}
  </button>
</div>

{#if isOpen}
  <div class="fixed inset-0 bg-inactive z-10" onclick={toggleOpen} aria-hidden="true"></div>

  <div
    class="fixed bottom-0 left-0 right-0 bg-active shadow-lg z-20 p-4 pb-20 transform"
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

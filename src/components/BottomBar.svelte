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
      <CircleX class="w-12 h-12" aria-label="Close menu" />
    {:else}
      <Menu class="w-12 h-12" aria-label="Open menu" />
    {/if}
  </button>
</div>

{#if isOpen}
  <div class="fixed inset-0 bg-gray-50 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 z-10" onclick={toggleOpen} aria-hidden="true"></div>

  <div
    class="fixed bottom-0 left-0 right-0 bg-gray-100 dark:bg-gray-800 shadow-lg z-20 p-4 pb-20 transform"
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

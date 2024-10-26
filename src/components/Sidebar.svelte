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

<button class="md:hidden fixed left-2 top-2 p-3 z-30" onclick={toggleOpen}>
  {#if isOpen}
    <CircleX class="w-10 h-10" aria-label="Close menu" />
  {:else}
    <Menu class="w-10 h-10" aria-label="Open menu" />
  {/if}
</button>

{#if isOpen}
  <div class="fixed inset-0 bg-gray-50 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 z-10" onclick={toggleOpen} aria-hidden="true"></div>

  <div
    class="fixed top-0 left-0 w-64 bg-gray-100 dark:bg-gray-800 h-full shadow-lg z-20 p-6 transform"
    in:fly={{ x: -300, duration: 300 }}
    out:fly={{ x: -300, duration: 300 }}
    onclick={toggleOpen}
    role="none"
  >
    <div class="pt-16">
      {@render children?.()}
    </div>
  </div>
{/if}

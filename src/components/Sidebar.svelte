<script lang="ts">
  import { fly } from 'svelte/transition';
  import { Menu, CircleX } from 'lucide-svelte';

  let isOpen = false;

  export const toggleOpen = () => {
    isOpen = !isOpen;
  };
</script>

<button class="md:hidden fixed left-2 top-2 p-3 z-30" on:click={toggleOpen}>
  {#if isOpen}
    <CircleX class="w-10 h-10" aria-label="Close menu" />
  {:else}
    <Menu class="w-10 h-10" aria-label="Open menu" />
  {/if}
</button>

{#if isOpen}
  <div class="fixed inset-0 bg-gray-50 bg-opacity-50 dark:bg-gray-900 dark:bg-opacity-50 z-10" on:click={toggleOpen} aria-hidden="true" />

  <div
    class="fixed top-0 left-0 w-64 bg-gray-100 dark:bg-gray-800 h-full shadow-lg z-20 p-6 transform"
    in:fly={{ x: -300, duration: 300 }}
    out:fly={{ x: -300, duration: 300 }}
    on:click={toggleOpen}
    role="none"
  >
    <div class="pt-16">
      <slot></slot>
    </div>
  </div>
{/if}

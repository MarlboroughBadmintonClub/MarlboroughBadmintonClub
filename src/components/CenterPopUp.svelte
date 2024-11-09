<script lang="ts">
  import { fade } from 'svelte/transition';
  import { SquareX } from 'lucide-svelte';

  interface Props {
    open: boolean;
    closeOnClick?: boolean;
    children?: import('svelte').Snippet;
  }

  let { open = $bindable(), closeOnClick = false, children }: Props = $props();

  const close = () => {
    open = false;
  };
</script>

{#if open}
  <div class="fixed inset-0 bg-inactive z-10" onclick={close} aria-hidden="true"></div>

  <div
    class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-active z-20 p-6 rounded-md w-[90%] max-w-xl"
    in:fade={{ duration: 300 }}
    out:fade={{ duration: 300 }}
    onclick={() => {
      if (closeOnClick) close();
    }}
    role="none"
  >
    <button class="fixed top-4 right-4" onclick={close}>
      <SquareX size={44} />
    </button>

    <div>
      {@render children?.()}
    </div>
  </div>
{/if}

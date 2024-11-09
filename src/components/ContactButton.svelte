<script lang="ts">
  import { MailPlus } from 'lucide-svelte';

  interface Props {
    onclick?: () => void;
  }

  let { onclick }: Props = $props();

  const clicked = () => {
    if (onclick) {
      onclick();
    }
  };
</script>

<button class="p-2 rounded-md bg-blue-600 text-gray-50 mt-8" onclick={clicked}>
  <span class="flex items-center justify-center gap-2 px-2">
    <MailPlus size={32} />
    Contact Us
  </span>
</button>

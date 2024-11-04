<script lang="ts">
  import { Icon } from 'lucide-svelte';

  interface Props {
    toggled: boolean;
    onclick?: (toggled: boolean) => void;
    icon: typeof Icon;
    size?: number;
  }

  let { toggled = $bindable(), onclick, icon, size = 50 }: Props = $props();

  const IconComponent = $derived(icon);

  let background = $derived(toggled ? 'bg-gray-300 dark:bg-gray-700' : '');

  const clicked = () => {
    toggled = !toggled;
    if (onclick) {
      onclick(toggled);
    }
  };
</script>

<div class="flex items-center justify-center h-full">
  <button class={`p-2 rounded-md ${background}`} onclick={clicked}>
    <IconComponent {size} />
  </button>
</div>

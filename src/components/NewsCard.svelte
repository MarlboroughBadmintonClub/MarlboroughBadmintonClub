<script lang="ts">
  import { base } from '$app/paths';
  import type { NewsItem } from '../interfaces/NewsItem';

  interface Props {
    item: NewsItem;
  }

  let { item }: Props = $props();

  let date = $derived(new Date(item.date));
</script>

<div class="border border-gray-500 rounded-md p-4">
  <p class="text-sm">{date.toLocaleDateString()}</p>
  <h2 class="pt-2">{item.title}</h2>
  {#if item.imagePath}
    <img src={base + item.imagePath} alt={item.title} class="pt-4 w-full" />
  {/if}
</div>

<script lang="ts">
  import type { NewsItem } from '../../interfaces/NewsItem';
  import NewsCard from '../../components/NewsCard.svelte';
  import PaddedBlock from '../../components/PaddedBlock.svelte';

  let newsItems: NewsItem[] = [
    {
      date: '2025-01-09',
      title: 'First club night of 2025'
    },
    {
      date: '2024-12-19',
      title: 'Last club night of 2024',
      link: 'https://flic.kr/s/aHBqjBVZsD',
      linkText: 'Photos'
    },
    {
      date: '2024-12-14',
      title: 'Christmas meal'
    }
  ];
</script>

<h1>News</h1>

<PaddedBlock>
  {#each newsItems as item}
    <NewsCard {item} />
  {/each}
</PaddedBlock>

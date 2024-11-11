<script lang="ts">
  import type { NewsItem } from '../../interfaces/NewsItem';
  import NewsCard from '../../components/NewsCard.svelte';
  import PaddedBlock from '../../components/PaddedBlock.svelte';

  let newsItems: NewsItem[] = [
    {
      date: '2024-11-11',
      title: 'Marlborough badminton club has a new website',
      imagePath: '/images/website.jpg'
    },
    {
      date: '2024-11-01',
      title: '2023 insurance cover expires'
    }
  ];
</script>

<h1>News</h1>

<PaddedBlock>
  {#each newsItems as item}
    <NewsCard {item} />
  {/each}
</PaddedBlock>

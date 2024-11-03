<script lang="ts">
  import type { MenuItem } from '../types';
  import { base } from '$app/paths';

  interface Props {
    menuItems?: MenuItem[];
  }

  let { menuItems = [] }: Props = $props();
</script>

<nav>
  <ul class="space-y-4">
    {#each menuItems as item}
      <li class="flex items-center h-full justify-center md:justify-normal min-h-12">
        <a class="flex items-center" href={base + item.route}>
          <span>{item.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<script lang="ts">
  import type { MenuItem } from '../types';
  import { base } from '$app/paths';
  export let menuItems: MenuItem[] = [];
  export let toggleSidebar: (() => void) | undefined = undefined;
</script>

<ul>
  {#each menuItems as item}
    <li>
      <a class="flex items-center p-2" href={base + item.route} on:click={() => toggleSidebar?.()}>
        <span>{item.name}</span>
      </a>
    </li>
  {/each}
</ul>

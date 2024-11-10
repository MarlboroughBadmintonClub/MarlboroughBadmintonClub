<script lang="ts">
  import { base } from '$app/paths';

  interface MenuItem {
    name: string;
    route: string;
  }

  const menuItems: MenuItem[] = [
    {
      name: 'About',
      route: '/about'
    },
    {
      name: 'Committee',
      route: '/committee'
    },
    {
      name: 'History',
      route: '/history'
    },
    {
      name: 'Membership',
      route: '/membership'
    },
    {
      name: 'News',
      route: '/news'
    }
  ];
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

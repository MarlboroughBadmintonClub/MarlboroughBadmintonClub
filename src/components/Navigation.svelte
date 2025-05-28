<script lang="ts">
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
      name: 'FAQ',
      route: '/faq'
    },
    {
      name: 'History',
      route: '/history'
    },
    {
      name: 'Membership',
      route: '/membership'
    }
  ];
</script>

<nav>
  <ul class="space-y-4">
    {#each menuItems as item}
      <li class="flex items-center h-full justify-center md:justify-normal min-h-12">
        <a class="flex items-center" href={item.route}>
          <span>{item.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</nav>

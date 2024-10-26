<script lang="ts">
  import '../app.postcss';

  import Logo from '../components/Logo.svelte';
  import Navigation from '../components/Navigation.svelte';
  import Sidebar from '../components/Sidebar.svelte';

  import type { MenuItem } from '../types';

  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

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
      name: 'Membership',
      route: '/membership'
    },
    {
      name: 'History',
      route: '/history'
    }
  ];
</script>

<div class="flex flex-col px-4 lg:max-w-7xl lg:mx-auto">
  <header>
    <div class="relative flex justify-center p-2">
      <Logo />
    </div>
  </header>

  <div class="flex p-2">
    <aside>
      <div class="hidden md:block w-64">
        <Navigation {menuItems} />
      </div>
      <div class="md:hidden">
        <Sidebar>
          <Navigation {menuItems} />
        </Sidebar>
      </div>
    </aside>

    <main>
      <div class="space-y-4">
        {@render children?.()}
      </div>
    </main>
  </div>
</div>

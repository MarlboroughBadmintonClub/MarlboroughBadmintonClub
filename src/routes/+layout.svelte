<script lang="ts">
  import '../app.postcss';

  // Floating UI for Popups
  import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
  import { storePopup } from '@skeletonlabs/skeleton';

  import Logo from '../components/Logo.svelte';
  import Navigation from '../components/Navigation.svelte';
  import Sidebar from '../components/Sidebar.svelte';

  import type { MenuItem } from '../types';

  storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

  const menuItems: MenuItem[] = [
    {
      name: 'Club',
      route: '/club'
    },
    {
      name: 'Committee',
      route: '/committee'
    }
  ];
</script>

<div class="m-4">
  <header>
    <div class="relative flex justify-center pt-1 pb-1">
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
      <div class="p-2 max-w-7xl space-y-4">
        <slot />
      </div>
    </main>
  </div>
</div>

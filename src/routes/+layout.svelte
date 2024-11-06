<script lang="ts">
  import '../app.postcss';

  import { Menu } from 'lucide-svelte';

  import BottomBar from '../components/BottomBar.svelte';
  import BottomPopUp from '../components/BottomPopUp.svelte';
  import Logo from '../components/Logo.svelte';
  import Navigation from '../components/Navigation.svelte';
  import ToggleButton from '../components/ToggleButton.svelte';

  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  let bottomNavOpen = $state(false);
</script>

<div class="flex flex-col p-6 max-w-screen-2xl mx-auto">
  <header>
    <div class="flex justify-center">
      <Logo />
    </div>
  </header>

  <div class="flex pt-4 pb-20">
    <aside>
      <div class="w-64 hidden md:block">
        <Navigation />
      </div>
    </aside>

    <main>
      <div class="space-y-4">
        {@render children?.()}
      </div>
    </main>
  </div>

  <footer class="bg-default fixed bottom-0 left-0 right-0 h-20 max-w-screen-2xl mx-auto md:hidden">
    <BottomBar>
      <ToggleButton bind:toggled={bottomNavOpen} icon={Menu} />
    </BottomBar>

    <BottomPopUp bind:open={bottomNavOpen}>
      <Navigation />
    </BottomPopUp>
  </footer>
</div>

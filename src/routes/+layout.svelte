<script lang="ts">
  import '../app.postcss';

  import { MailPlus, Menu } from 'lucide-svelte';

  import BottomBar from '../components/BottomBar.svelte';
  import BottomPopUp from '../components/BottomPopUp.svelte';
  import ContactForm from '../components/ContactForm.svelte';
  import Logo from '../components/Logo.svelte';
  import Navigation from '../components/Navigation.svelte';
  import ToggleButton from '../components/ToggleButton.svelte';
  import ContactButton from '../components/ContactButton.svelte';
  import CenterPopUp from '../components/CenterPopUp.svelte';

  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  let bottomNavOpen = $state(false);
  let bottomContactFormOpen = $state(false);
  let centerContactFormOpen = $state(false);

  let showContactFormButton = process.env.NODE_ENV === 'development';
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
        <ContactButton onclick={() => (centerContactFormOpen = true)} />
      </div>

      {#if showContactFormButton}
        <CenterPopUp bind:open={centerContactFormOpen}>
          <ContactForm />
        </CenterPopUp>
      {/if}
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
      {#if showContactFormButton}
        <ToggleButton bind:toggled={bottomContactFormOpen} icon={MailPlus} size={44} />
      {/if}
    </BottomBar>

    <BottomPopUp bind:open={bottomNavOpen} closeOnClick>
      <Navigation />
    </BottomPopUp>

    <BottomPopUp bind:open={bottomContactFormOpen}>
      <ContactForm />
    </BottomPopUp>
  </footer>
</div>

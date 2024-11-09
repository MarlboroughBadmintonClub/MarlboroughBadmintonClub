<script lang="ts">
  import TextEntry from './TextEntry.svelte';

  let name = $state('');
  let email = $state('');
  let message = $state('');

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(name, email, message);
  };

  let sendDisabled = $derived(!name || !email || !message);
  let sendColor = $derived(sendDisabled ? 'bg-gray-300 dark:bg-gray-600' : 'bg-blue-500 text-gray-50');
</script>

<h1 class="pb-4">Contact Us</h1>

<form class="w-full space-y-4" onsubmit={handleSubmit}>
  <TextEntry name="Name" bind:value={name} />
  <TextEntry name="Email" bind:value={email} type="email" />
  <TextEntry name="Message" bind:value={message} type="textarea" />

  <button type="submit" class="w-full {sendColor} py-4 rounded-md" disabled={sendDisabled}>Send</button>
</form>

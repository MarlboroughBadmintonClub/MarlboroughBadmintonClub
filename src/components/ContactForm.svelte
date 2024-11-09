<script lang="ts">
  import TextEntry from './TextEntry.svelte';
  import emailjs from '@emailjs/browser';

  interface Props {
    close: () => void;
  }

  let { close }: Props = $props();

  let name = $state('');
  let email = $state('');
  let message = $state('');

  const handleSubmit = async () => {
    let response = await emailjs.send(
      'service_qxasqjr',
      'template_nnvomi6',
      {
        name: name,
        email: email,
        message: message
      },
      {
        publicKey: 'SzandpaXuCqX0VxaE'
      }
    );

    if (response.status == 200) {
      name = '';
      email = '';
      message = '';
      alert('Email sent successfully');
    } else {
      alert('Failed to send email');
      console.error('Failed to send email', response.text);
    }

    close();
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

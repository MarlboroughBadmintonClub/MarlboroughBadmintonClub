<script lang="ts">
  import TextEntry from './TextEntry.svelte';
  import emailjs from '@emailjs/browser';
  import { EmailJSResponseStatus } from '@emailjs/browser';

  type FlowState = 'User' | 'Sending' | 'Success' | 'Error';

  let flowState: FlowState = $state('User');

  let name = $state('');
  let email = $state('');
  let message = $state('');

  let sendDisabled = $derived(!name || !email || !message);
  let sendColor = $derived(sendDisabled ? 'bg-gray-300 dark:bg-gray-600' : 'bg-blue-500 text-gray-50');

  const handleSubmit = async () => {
    flowState = 'Sending';
    let response = await sendUsingEmailJs();

    if (response.status == 200) {
      flowState = 'Success';
    } else {
      flowState = 'Error';
      console.error('Failed to send email', response.text);
    }
  };

  const sendUsingEmailJs = async (): Promise<EmailJSResponseStatus> => {
    return emailjs.send(
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
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const sendFakeDelay = async (): Promise<EmailJSResponseStatus> => {
    return new Promise<EmailJSResponseStatus>((resolve) => {
      setTimeout(() => {
        resolve({ status: 200, text: 'OK' });
      }, 2000);
    });
  };
</script>

<h1 class="pb-4">Contact Us</h1>

<form class="w-full space-y-4" onsubmit={handleSubmit}>
  {#if flowState === 'User'}
    <TextEntry name="Name" bind:value={name} />
    <TextEntry name="Email" bind:value={email} type="email" />
    <TextEntry name="Message" bind:value={message} type="textarea" />
    <button type="submit" class="w-full {sendColor} py-4 rounded-md">Send</button>
  {:else if flowState === 'Sending'}
    <p>Sending...</p>
  {:else if flowState === 'Success'}
    <p>Message sent successfully</p>
  {:else if flowState === 'Error'}
    <p>Failed to send message. Please email <a class="text-blue-500" href="mailto:info@marlboroughbc.org.uk">info@marlboroughbc.org.uk</a>.</p>
  {/if}
</form>

<script lang="ts">
  let name = '';
  let email = '';
  let message = '';

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log(name, email, message);
  };
</script>

<h1>Contact Us</h1>

<form onsubmit={handleSubmit}>
  <div>
    <label for="name" class="block text-sm font-medium">Name</label>
    <input type="text" id="name" bind:value={name} class="mt-1 block w-full border border-gray-300 p-2 rounded-md" required />
  </div>

  <div>
    <label for="email" class="block text-sm font-medium">Email</label>
    <input type="email" id="email" bind:value={email} class="mt-1 block w-full border border-gray-300 p-2 rounded-md" required />
  </div>

  <div>
    <label for="message" class="block text-sm font-medium">Message</label>
    <textarea id="message" bind:value={message} class="mt-1 block w-full border border-gray-300 p-2 rounded-md" rows="4" required></textarea>
  </div>

  <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md"> Submit </button>
</form>

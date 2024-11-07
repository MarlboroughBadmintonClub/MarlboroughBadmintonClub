<script lang="ts">
  interface Props {
    name: string;
    value: string;
    type?: string;
  }

  let { name, value = $bindable(), type = 'text' }: Props = $props();
</script>

<div class="space-y-1">
  <label for={name.toLowerCase()}>{name}</label>
  {#if type === 'textarea'}
    <textarea id={name.toLowerCase()} bind:value class="w-full rounded-md bg-gray-200 text-gray-900" rows="4" required></textarea>
  {:else}
    <input {type} id={name.toLowerCase()} bind:value class="w-full rounded-md bg-gray-200 text-gray-900" required />
  {/if}
</div>

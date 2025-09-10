<script>
  import TextBlock from '../../components/PaddedBlock.svelte';
</script>

<h1>League</h1>

<TextBlock>
  <p>Marlborough Badminton Club has 4 teams in the Banbury Town Badminton League.</p>
</TextBlock>

<TextBlock>
  <h2>Match Calendar</h2>

  <iframe
    title="Embedded match calendar"
    src="https://teamup.com/kst51nuiptpcuykch7?view=m&tz=Calendar%20default&showHeader=0&showLogo=0&showSearch=1&showProfileAndInfo=0&showSidepanel=0&showViewSelector=1&showMenu=1&showViewHeader=1&showAgendaDetails=0&showDateControls=1&showDateRange=1"
    style="width: 100%; height: 600px;"
    loading="lazy"
  ></iframe>
</TextBlock>

<TextBlock>
  <h2>Feeds</h2>

  <p>
    If you would like fixtures to be shown in your calendar application you can follow these <a
      href="https://calendar.teamup.com/kb/subscribe-to-teamup-icalendar-feeds"
      target="_blank"
      rel="noopener noreferrer"
      class="text-blue-500 hover:underline"
      >instructions for subscribing to a feed
    </a>. The feeds are listed below.
  </p>

  <ul class="list-disc p-4 space-y-2">
    <li>
      <a href="https://ics.teamup.com/feed/ks4qcrz3yyjh5zb3d4/14761902.ics" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
        Mixed
      </a>
    </li>
    <li>
      <a href="https://ics.teamup.com/feed/ks4qcrz3yyjh5zb3d4/14761867.ics" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
        Open A
      </a>
    </li>
    <li>
      <a href="https://ics.teamup.com/feed/ks4qcrz3yyjh5zb3d4/14761820.ics" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
        Open B
      </a>
    </li>
    <li>
      <a href="https://ics.teamup.com/feed/ks4qcrz3yyjh5zb3d4/14761870.ics" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline">
        Open C
      </a>
    </li>
    <li>
      <a href="https://ics.teamup.com/feed/ks4qcrz3yyjh5zb3d4/0.ics" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:underline"> All </a>
    </li>
  </ul>
</TextBlock>

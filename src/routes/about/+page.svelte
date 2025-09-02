<script lang="ts">
  import PaddedBlock from '../../components/PaddedBlock.svelte';
</script>

<h1>About</h1>

<PaddedBlock>
  <div class="flex pb-4 items-center justify-center">
    <img src={'/images/courts_1_2.jpg'} alt="Courts 1 and 2 at Marlborough Badminton Club" />
  </div>

  <p>
    We are a competitive and social badminton club in Banbury, Oxfordshire. Our players have a wide range of abilities including beginners. We mix up playing
    partners to ensure enjoyable and balanced games for all.
  </p>

  <div class="flex pt-4 items-center justify-center">
    <img src={'/images/courts_3_4.jpg'} alt="Courts 3 and 4 at Marlborough Badminton Club" />
  </div>
</PaddedBlock>

<PaddedBlock>
  <h2>Time</h2>
  <p>Thursday from 19:30 to 22:00</p>
</PaddedBlock>

<PaddedBlock>
  <h2>Venue</h2>

  <p>
    We play on four courts at the Blessed George Napier School.
    <a href="https://maps.app.goo.gl/87FBb3coXKZ2Q1tz9" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline hover:text-blue-700"
      >Blessed George Napier School on Google Maps
    </a>
  </p>

  <p>
    The school operates a one way traffic system in the evenings and the entrance is on Springfield Road.
    <a href="https://maps.app.goo.gl/5pxMr3SYz7yG4E2v7" target="_blank" rel="noopener noreferrer" class="text-blue-500 underline hover:text-blue-700"
      >Entrance on Springfield Road on Google Maps
    </a>
  </p>
</PaddedBlock>

<PaddedBlock>
  <h2>League</h2>
  <p>The club has several teams in the Banbury Town Badminton League. League participation is optional.</p>
</PaddedBlock>

<PaddedBlock>
  <h2>Club Shirts</h2>
  <p>
    We have provisioned club shirts. Please order directly from the <a
      href="https://pbteamwear.co.uk/collections/marlborough-bc"
      target="_blank"
      rel="noopener noreferrer"
      class="text-blue-500 underline hover:text-blue-700"
      >supplier
    </a>.
  </p>
</PaddedBlock>

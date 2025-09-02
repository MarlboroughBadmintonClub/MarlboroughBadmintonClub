<script lang="ts">
  import { type CommitteeMember, CommitteeRole } from './CommitteeMember';
  import CommitteeListItem from './CommitteeListItem.svelte';
  import PaddedBlock from '../../components/PaddedBlock.svelte';

  const committeeMembers: CommitteeMember[] = [
    {
      name: 'Raymond Chan',
      role: CommitteeRole.Chair
    },
    {
      name: 'Nick Darlow',
      role: CommitteeRole.Secretary,
      portrait: 'nick_400.jpg'
    },
    {
      name: 'Arrash Farahani',
      role: CommitteeRole.Treasurer
    },
    {
      name: 'Simon Mills',
      role: CommitteeRole.MatchSecretary
    },
    {
      name: 'Dilushi Jayasingha (DJ)',
      role: CommitteeRole.WelfareOfficer,
      portrait: 'dj_400.jpg'
    },
    {
      name: 'Hung Tran',
      role: CommitteeRole.SocialSecretary
    }
  ];
</script>

<h1>Committee</h1>

<PaddedBlock>
  <p>
    The committee ensures the smooth operation and management of the club. It is responsible for the administration, organisation, finances and policies of the
    club.
  </p>

  <h2 class="py-4">Committee members</h2>

  {#each committeeMembers as member (member.name)}
    <CommitteeListItem {member} />
  {/each}
</PaddedBlock>

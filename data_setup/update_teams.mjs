import PocketBase from 'pocketbase';
import teams from './data/teams.json' with { type: 'json' };

const pb = new PocketBase('http://127.0.0.1:8090');
await pb.admins.authWithPassword('geordi.dosher@gmail.com', 'testing1234');

teams.forEach(async (team) => {
  await pb.collection('teams').create(team, {
    requestKey: team.abbr
  });
})


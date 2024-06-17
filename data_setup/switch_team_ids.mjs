import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
await pb.admins.authWithPassword('geordi.dosher@gmail.com', 'testing1234');

const allTeams = await pb.collection('teams').getFullList();
const picks = await pb.collection('picks').getFullList();
const protections = await pb.collection('protections').getFullList();
const swaps = await pb.collection('swaps').getFullList();

let key = 0;
const getKey = () => {
  key++;
  return `request-${key}`;
}

allTeams.forEach(async (team) => {
  const newId = `${team.abbr}xxxxxxxxxxxx`;

  // Create a new team with a better id:
  await pb.collection('teams').create({
    id: newId,
    location: team.location,
    name: team.name,
    fullName: team.fullName,
    abbr: team.abbr,
  }, { requestKey: getKey() });

  picks.filter(x => x.originator === team.id)
    .forEach(async (x) => {
      await pb.collection('picks').update(x.id, {
        originator: newId,
      }, { requestKey: getKey() })
    });
  
  picks.filter(x => x.toTeam === team.abbr)
    .forEach(async (x) => {
      await pb.collection('picks').update(x.id, {
        toTeam: newId,
      }, { requestKey: getKey() }) 
    });
  
  protections.filter(x => x.toTeam === team.abbr)
    .forEach(async (x) => {
      await pb.collection('protections').update(x.id, {
        toTeam: newId,
      }, { requestKey: getKey() }) 
    });
  
  swaps.filter(x => x.bestTo === team.abbr)
    .forEach(async (x) => {
      await pb.collection('swaps').update(x.id, {
        bestTo: newId,
      }, { requestKey: getKey() }) 
    });
  
  swaps.filter(x => x.worstTo === team.abbr)
    .forEach(async (x) => {
      await pb.collection('swaps').update(x.id, {
        worstTo: newId,
      }, { requestKey: getKey() }) 
    });
  
  await pb.collection('teams').delete(team.id, { requestKey: getKey() });
})
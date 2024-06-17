import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
await pb.admins.authWithPassword('geordi.dosher@gmail.com', 'testing1234');

const allTeams = await pb.collection('teams').getFullList();

let key = 0;
const getKey = () => {
  key++;
  return `another-request-${key}`;
}

const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, ms);
  })
}

for (let year = 2024; year <= 2030; year++) {
  for (let round = 1; round <= 2; round++) {
    allTeams.forEach(async (team) => {
      await pb.collection('picks').create({
        id: `${year}x${round}x${team.abbr}xxxxx`,
        originator: team.id,
        round,
        year,
      }, {
        requestKey: null
      })
    });
    
    await wait(250);
  }
}

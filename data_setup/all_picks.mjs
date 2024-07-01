import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');
await pb.admins.authWithPassword('geordi.dosher@gmail.com', 'testing1234');

import teams from './data/teams.json' with { type: 'json' };
import fs from 'node:fs';

// const allTeams = await pb.collection('teams').getFullList();

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

const output = [];

for (let year = 2025; year <= 2031; year++) {
  for (let round = 1; round <= 2; round++) {
    teams.forEach(async (team) => {
      output.push({
        id: `pick_${year}_${round}_${team.abbr}`,
        originator: team.abbr,
        year,
        round,
      })
      // await pb.collection('picks').create({
      //   id: `${year}x${round}x${team.abbr}xxxxx`,
      //   originator: team.id,
      //   round,
      //   year,
      // }, {
      //   requestKey: null
      // })
    });
    
    // await wait(250);
  }
}

fs.writeFileSync('./output/picks.json', JSON.stringify(output));

import teams from './data/teams.json' with { type: 'json' };
import fs from 'node:fs';

const output = teams.map(x => ({
  ...x,
  _id: x.abbr,
}));

fs.writeFileSync('./output/teams.json', JSON.stringify(output));
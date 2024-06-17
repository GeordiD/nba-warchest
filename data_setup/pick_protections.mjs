import PocketBase from 'pocketbase';
import picks1 from './data/easy_picks_1.json' with { type: 'json' };
import picks2 from './data/easy_picks_2.json' with { type: 'json' };
import util from "util";

function deepLog(stuff) {
  return util.inspect(stuff, { showHidden: false, depth: null, colors: true });
}

const pb = new PocketBase('http://127.0.0.1:8090');
await pb.admins.authWithPassword('geordi.dosher@gmail.com', 'testing1234');
pb.autoCancellation(false);

let count = 0;

const doIt = async (picks, round) => {
  const picksByYear = picks.flatMap(x => x.years)
    .reduce((prev, curr) => {
      const out = { ...prev };
      
      if (!out[curr.year]) {
        out[curr.year] = [];
      }

      out[curr.year] = [
        ...out[curr.year],
        ...curr.picks,
      ]
      
      return out;
    }, {})

  const allTeams = await pb.collection('teams').getFullList();

  const dataAbbrs = {
    ATL: 'ATL',
    BOS: 'BOS',
    BRK: 'BKN',
    CHA: 'CHA',
    CHI: 'CHI',
    CLE: 'CLE',
    DAL: 'DAL',
    DEN: 'DEN',
    DET: 'DET',
    GOS: 'GSW',
    HOU: 'HOU',
    IND: 'IND',
    LAC: 'LAC',
    LAL: 'LAL',
    MEM: 'MEM',
    MIA: 'MIA',
    MIL: 'MIL',
    MIN: 'MIN',
    NOP: 'NOP',
    NYK: 'NYK',
    OKC: 'OKC',
    ORL: 'ORL',
    PHL: 'PHI',
    PHX: 'PHX',
    POR: 'POR',
    SAC: 'SAC',
    SAN: 'SAS',
    TOR: 'TOR',
    UTH: 'UTA',
    WAS: 'WAS',
  }

  const getPickId = (year, round, abbr) => {
    return `${year}x${round}x${abbr}xxxxx`
  }

  const getTeamId = (abbr, pick) => {
    const betterAbbr = dataAbbrs[abbr];
    const team = allTeams.find(x => x.abbr === betterAbbr);

    if (!team) {
      console.error(pick);
      throw Error('no team found for ', pick);
    } 

    return team.id;
  }


  Object.keys(picksByYear).forEach(year => {
    picksByYear[year].forEach(async pick => {
      if (!pick.owner && !pick.originator) return;

      const originator = getTeamId(pick.originator, pick);
      const pickId = getPickId(Number.parseInt(year), round, dataAbbrs[pick.originator])


      if (pick.protections) {
        const pickRequest = {
        }

        const promises = pick.protections.groups.map(async protection => {
          return await pb.collection('protections').create({
            rangeMin: Number.parseInt(protection.rangeMin),
            rangeMax: Number.parseInt(protection.rangeMax),
            toTeam: getTeamId(protection.owner, pick),
            pick: pickId,
          }, { requestKey: null })
        });

        const results = await Promise.all(promises);

        pickRequest.protections = results.map(protectionRes => protectionRes.id)

        const tryToTeam = pick.protections.groups.filter(protection => protection.owner !== pick.originator);
        if (tryToTeam.length) {
          pickRequest.toTeam = getTeamId(tryToTeam[0].owner, pick);
        }

        await pb.collection('picks').update(pickId, {
          ...pickRequest,
        }, { requestKey: null });
      }
    })
  })
}

await doIt(picks1, 1);
await doIt(picks2, 2);

console.log(count);
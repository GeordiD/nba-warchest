const cheerio = require("cheerio")
const axios = require("axios")
const fs = require('node:fs');
const util = require("util");

function deepLog(stuff) {
  return util.inspect(stuff, { showHidden: false, depth: null, colors: true });
}

const teamNameToAbbr = {
    'Atlanta Hawks': 'ATL',
    'Boston Celtics': 'BOS',
    'Brooklyn Nets': 'BRK',
    'Charlotte Hornets': 'CHA',
    'Chicago Bulls': 'CHI',
    'Cleveland Cavaliers': 'CLE',
    'Dallas Mavericks': 'DAL',
    'Denver Nuggets': 'DEN',
    'Detroit Pistons': 'DET',
    'Golden State Warriors': 'GOS',
    'Houston Rockets': 'HOU',
    'Indiana Pacers': 'IND',
    'Los Angeles Clippers': 'LAC',
    'Los Angeles Lakers': 'LAL',
    'Memphis Grizzlies': 'MEM',
    'Miami Heat': 'MIA',
    'Milwaukee Bucks': 'MIL',
    'Minnesota Timberwolves': 'MIN',
    'New Orleans Pelicans': 'NOP',
    'New York Knicks': 'NYK',
    'Oklahoma City Thunder': 'OKC',
    'Orlando Magic': 'ORL',
    'Philadelphia Sixers': 'PHL',
    'Phoenix Suns': 'PHX',
    'Portland Trail Blazers': 'POR',
    'Sacramento Kings': 'SAC',
    'San Antonio Spurs': 'SAN',
    'Toronto Raptors': 'TOR',
    'Utah Jazz': 'UTH',
    'Washington Wizards': 'WAS',
}

const teamMatcher = 'ATL|BOS|BRK|CHA|CHI|CLE|DAL|DEN|DET|GOS|HOU|IND|LAC|LAL|MEM|MIA|MIL|MIN|NOP|NYK|OKC|ORL|PHL|PHX|POR|SAC|SAN|TOR|UTH|WAS';

function getPosition(value) {
  const position = /#([0-9]+)/.exec(value);
  return position ? position[1] : undefined;
}

function getProtections(x) {
  const protections = /([0-9]+)-([0-9]+)/.exec(x);
  if (protections) {
    return {
      rangeMin: protections[1],
      rangeMax: protections[2],
    }
  }
  return undefined;
}

function filterOutUndefined(obj) {
  return Object.entries(obj)
    .filter(([key, value]) => value !== undefined && value !== null)
    .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {});
}

function startsWithRange(value) {
  return /^([0-9]+)-*([0-9]+)* /.exec(value);
}

function findTeam(x) {
  return /(ATL|BOS|BRK|CHA|CHI|CLE|DAL|DEN|DET|GOS|HOU|IND|LAC|LAL|MEM|MIA|MIL|MIN|NOP|NYK|OKC|ORL|PHL|PHX|POR|SAC|SAN|TOR|UTH|WAS)/.exec(x);
}

function startsWithTeam(x) {
  return /^(ATL|BOS|BRK|CHA|CHI|CLE|DAL|DEN|DET|GOS|HOU|IND|LAC|LAL|MEM|MIA|MIL|MIN|NOP|NYK|OKC|ORL|PHL|PHX|POR|SAC|SAN|TOR|UTH|WAS).*/.exec(x);
}

let cracks = [];
let count = 0;

const getProtectionGroups = (x, self) => {
  const split = x.split(';').map(y => y.trim());
  return split.map(y => {
    const range = startsWithRange(y);

    return {
      rangeMin: range[1],
      rangeMax: range[2],
      owner: y.includes('Own')
        ? self
        : findTeam(y)[1],
    }
  })
}

const getEasyMatches = (list, self) => {
  const skip = list
    .filter((x) => {
      // Swaps
      const hasOr = x.includes(' or ');
      const startsWithOr = x.startsWith('or ');
      const hasSwap = x.includes('swap') && !/via ... swap/.exec(x);
      const startsWithTo = x.startsWith('To ');
      const hasFavorable = x.includes('favorable');

      // Conveys
      const ifNotSettled = x.includes('if not already settled');
      const hasConveys = x.includes('convey');

      // == Real skips ==
      // We handle protected picks from the originator side
      const teamProtected = /^(ATL|BOS|BRK|CHA|CHI|CLE|DAL|DEN|DET|GOS|HOU|IND|LAC|LAL|MEM|MIA|MIL|MIN|NOP|NYK|OKC|ORL|PHL|PHX|POR|SAC|SAN|TOR|UTH|WAS) [0-9]+-[0-9]+.*/.exec(x);
      // startsWithVia and seeFollowing are just semi-colons for long trade paths
      const startsWithVia = x.startsWith('via ');
      const seeFollowing = x === 'see following]';

      return hasOr
        || hasSwap
        || startsWithTo
        || hasFavorable
        || ifNotSettled
        || startsWithOr
        || hasConveys
        || teamProtected
        || startsWithVia
        || seeFollowing;
    })

  return list
    .filter(x => !skip.includes(x))
    .map(x => {
      try {
        // Own picks
        if (x.startsWith('Own')) {
          return filterOutUndefined({
            owner: self,
            originator: self,
            position: getPosition(x),
          }, x);
        }

        // Another team's picks
        const runStartsWithTeam = startsWithTeam(x);
        if (runStartsWithTeam) {
          const originalOwner = runStartsWithTeam[1];
          return filterOutUndefined({
            owner: self,
            originator: originalOwner,
            position: getPosition(x),
          }, x);
        }

        // Forfeited cases
        if (x.toLowerCase().includes('forfeited')) {
          if (x.toLowerCase() === 'forfeited') {
            return filterOutUndefined({
              owner: self,
              originator: self,
              isForfeited: true,
            })
          } else if (x.toLowerCase().startsWith('forfeited: ')) {
            const originalOwner = startsWithTeam(x.split(': ')[1])[1];
            return {
              owner: self,
              originator: originalOwner,
              isForfeited: true,
            }
          } else {
            // skip
            return {}
          }
        }

        // Has to be protections split
        let protectionGroups = [];
        try {
          protectionGroups = getProtectionGroups(x, self);
        } catch (err) {
          cracks.push(x);
        }

        return filterOutUndefined({
          originator: self,
          protections: {
            groups: protectionGroups,
          }
        })
      } catch (err) {
        console.log(x);
        throw err;
      }
    });
}

function getSimpleIfNotSettled(list, self) {
  return list
    .filter(x => {
      const ifNotSettled = x.includes('if not already settled');
      const startsWith1 = x.startsWith('1');
      const hasConveys = x.includes('convey');

      return ifNotSettled && startsWith1 && !hasConveys;
    })
    .map(x => {
      return filterOutUndefined({
        originator: self,
        protections: {
          groups: getProtectionGroups(x, self),
        },
        ifNotSettled: true,
      })
    });
}

function parsePickLine(value, self) {
  const withoutYear = /[0-9]* - (.*)/.exec(value)[1];
  const eachPick = withoutYear.split(';')
    .map(x => x.trim())
    .reduce((prev, current) => {
      if (prev.length && prev.at(-1).endsWith(';')) {
        prev[prev.length - 1] = `${prev[prev.length - 1]} ${current}`
      } else if (startsWithRange(current)) {
        prev.push(`${current};`)
      } else {
        prev.push(current);
      }
      return prev;
    }, [])
  
  const skip = eachPick
    .filter((x) => {
      // Swaps
      const hasOr = x.includes(' or ');
      const startsWithOr = x.startsWith('or ');
      const hasSwap = x.includes('swap') && !/via ... swap/.exec(x);
      const startsWithTo = x.startsWith('To ');
      const hasFavorable = x.includes('favorable');

      // Conveys
      const hasConveys = x.includes('convey');
    })

  const easyMatches = getEasyMatches(eachPick, self);
  const simpleIfNotSettled = getSimpleIfNotSettled(eachPick, self);

  return [
    ...easyMatches,
    // ...simpleIfNotSettled,
  ];
}

const trackPicks = (data) => {
  const includes = {}
  const excludes = {}

  data.forEach(({ team, years }) => {
    years.forEach(({ year, picks }) => {
      if (!includes[year]) {
        includes[year] = [];
        excludes[year] = [...Object.values(teamNameToAbbr)]
      }

      picks.forEach(pick => {
        includes[year].push(pick.originator);
        excludes[year] = excludes[year].filter(x => x != pick.originator);
      });
      includes[year].sort();
    })
  })


  console.log('=== years ===')
  Object.keys(includes).forEach(x => {
    console.log(`${x}: ${includes[x].length}`)
  });
  console.log('=====');
  console.log(excludes);
}

async function performScraping() {
    // downloading the target web page
    // by performing an HTTP GET request in Axios
  // const axiosResponse = await axios.request({
  //   method: "GET",
  //   url: "https://basketball.realgm.com/nba/draft/future_drafts/team",
  //   headers: {
  //     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
  //   }
  // });
  const axiosResponse = {
    data: fs.readFileSync('./data.txt', 'utf-8')
  };

  const $ = cheerio.load(axiosResponse.data);
  
  const results = {};

  const firstRound = $('[data-th="Second Round"]');

  const test = firstRound.map(function (i, elem) {
    const teamName = elem.attribs?.rel;
    const abbr = teamNameToAbbr[teamName];

    return {
      team: abbr,
      years: $(this).children().map(function () {
        const picks = parsePickLine($(this).text(), abbr);
        return {
          year: $(this).find('strong').text(),
          picks,
        }
      }).toArray().filter(x => x.picks.length),
    }
  })

  console.log(deepLog(test.toArray()));

  fs.writeFileSync('./output/easy_picks_2.json', JSON.stringify(test.toArray()));

  if (cracks.length) {
    console.log();
    console.error('THERE WERE SOMETHING IN THE CRACKS AHHHH');
    console.log(cracks);
  }

  if (count) console.log(count);

  // trackPicks(test.toArray());
}

performScraping()
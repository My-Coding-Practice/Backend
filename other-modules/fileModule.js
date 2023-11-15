const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

// Creates the file result-sync.txt
writeFileSync('./content/result-sync.txt', `Here is the results: ${first}, ${second}`,
{ flag: 'a' } // This flag adds onto the original file. So if the first file was 'Hi', running this again would make 'HiHi'
)

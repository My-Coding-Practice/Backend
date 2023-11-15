const { readFile, writeFile } = require("fs").promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// Nested callbacks
// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         return;
//     }
//     const first = result;
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//             return;
//         }
//         const second = result;
//         writeFile('./content/result-async.txt', `Here is the results: ${first}, ${second}`, (err, result) => {
//             if (err) {
//                 return;
//             }
//             console.log(result);
//         })
//     })
// })

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

//getText('./content/first.txt').then(result => console.log(result)).catch(err => console.log(err))

const start = async () => {
  try {
    // const first = await getText("./content/first.txt")

    // This code is used if lines 2,3,4 aren't commented out and line 1 doesn't have promises
    // const first = await readFilePromise("./content/first.txt", "utf8")
    // const second = await readFilePromise("./content/second.txt", "utf8")
    // await writeFilePromise('./content/result-async-mind-grenade.txt', `Wow Wow WOW: ${first}, ${second}`)

    const first = await readFile("./content/first.txt", "utf8")
    const second = await readFile("./content/second.txt", "utf8")
    await writeFile('./content/result-async-mind-grenade.txt', `Wow Wow WOW: ${first}, ${second}`)
    console.log(first);
  } catch (err) {
    console.log(err);
  }
};

start();

const names = require('./modulesToExport')

const data = require('./alternativeFlavor')

console.log(data);

// Will run function in file, when you import module you invoke it
require('./mindGrenade');

for (const ele in names) {
    console.log(names[ele])
}
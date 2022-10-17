const names = require('./modulesToExport')

for (const ele in names) {
    console.log(names[ele])
}
console.log(__dirname)
let sum = 0
setInterval(() => {
    console.log('Count: ', sum)
    sum++;
}, 1000)

const os = require('os')
const user = os.userInfo()
console.log(user)
console.log(os.type())
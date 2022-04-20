console.log(__dirname)
setInterval(() => {
    console.log('hello')
}, 1000)

const os = require('os')
const user = os.userInfo()
console.log(user)
console.log(os.type())
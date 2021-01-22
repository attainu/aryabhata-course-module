var os = require('os');
console.log(os.platform())
console.log(`${os.arch()} bit`)
console.log(os.cpus().length+ " core")
console.log("freemen ",os.freemem()+" bytes")
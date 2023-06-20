const os = require('os');

// info about current user

const user = os.userInfo()
console.log(user);

// method that returns the system uptime in seconds
const uppTime = os.uptime();
console.log(uppTime);

const currentOS = {
    name: os.type(),
    relase: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};
console.log(currentOS)
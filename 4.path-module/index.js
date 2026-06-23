const path = require('path');

// Get directory Name
console.log("Directory Name: ",path.dirname(__filename));


// Get File Name
console.log("File Name: ",path.basename(__filename));


// Get FIle Extension
console.log("Extension Name : ",path.extname(__filename));



// joining path
 
const joinPath= path.join("user","documents","node","project");
console.log(joinPath);

// Resolve path
const resolvepath= path.resolve("user","documents","node","project");
console.log("Resolved Path: ",resolvepath);



// Normalized Path
const normalizedpath = path.normalize("/user.documents/../node/project");
console.log("Normalized Path: ",normalizedpath);





const fs = require("fs");
const readline = require("readline")
PATH_TO_FILE = './database.txt' 

const appendUserNameToFile = (name) => {
    
    var currenTimeStamp = Math.floor(Date.now() / 1000);
    record = `\nUser ${name} logged at ${currenTimeStamp}\n`


    errorHandler = err => {
      if (err) {
        console.log('Error ocurred when writing to file: ' + err);
      }
    }
    
    fs.appendFile(PATH_TO_FILE, record, errorHandler) 
}



const closeRLandAppendUserNameToFile = (name) => {
    console.log("registering your name...");
    rl.close();
    appendUserNameToFile(name);
    console.log("completed.");
}




const rl = readline.createInterface(
  {
    input: process.stdin,
    output: process.stdout
  }
)

rl.question("what is your name?", closeRLandAppendUserNameToFile)





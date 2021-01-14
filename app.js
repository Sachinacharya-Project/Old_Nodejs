
// const logger = require('./logger');
// Logger consist of Object use as following
// logger.log("This is My Message");
// If it is just single method or property
// logger("Hello I am Sachin Acharya")

// const logger = require('./logger');
// logger("Hello I am Sachin Acharya")
// const path = require('path');
// var pathObj = path.parse(__filename)
// console.log(pathObj)
//  const os = require('os');
//  var totalMemory = os.totalmem()
//  var freeMemory = os.freemem()
//  var ar = {
//      'Total Memory': totalMemory,
//      'Free Memory': freeMemory
//  }
//  console.table(ar);

// const fs = require('fs');
// const files = fs.readdirSync("./")
// console.table(fl)
// const fl = fs.readdir('./',function(err,files) {
//      if(err) console.log(err);
//      else console.table(files)
// })


// const EventEmitter = require('events');

// const Logger = require('./logger');
// const logger = new Logger();

// logger.on("messageLogged", (arg)=>{
//     console.log("Displayed Messaged",arg)
// })

// logger.log("Message");

// server.on("connection",(socket)=>{
//     console.log("New Connection")
// })

// const http = require('http');

// const server = http.createServer((req, res)=>{
//     if(req.url == '/'){
//         res.write("Hello World");
//         res.end();
//     }

//     if(req.url == '/api/courses'){
//         res.write(JSON.stringify([1,2,3]))
//         res.end();
//     }
// });


// server.listen(3000)

// console.log("Listenning on 3000")


// Use to Inherite Object
// const util = require('util');


// Creating Server

// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type': 'text/plain'})
//     res.end('req');
// });



// server.listen(3000,'127.0.0.1')



// const fs = require('fs');

// Showing Buffer
// const readedString = fs.createReadStream(__dirname+'/text.txt');
// Showing Chunk of Buffer in readable Form
// const readedString = fs.createReadStream(__dirname+'/text.txt','utf8');

// readedString.on('data', function(chunk){
//     console.log('Chunk: ');
//     console.log(chunk)
// })



// const fs = require('fs');

// const chunkEr = fs.createReadStream(`${__dirname}/text.txt`)

// const MyStream = fs.WriteStream(__dirname+'/writeMe.txt')

// chunkEr.on('data',function(chunk){
//     MyStream.write(chunk)
// })
// Write File to (File)
// chunkEr.pipe(MyStream)




// const fs = require('fs');

// const dataChunk = fs.createReadStream(`${__dirname}/text.txt`)

// const MyStream = fs.WriteStream(__dirname+'/writeMe.txt')


// const http = require('http');

// const server = http.createServer((req,res)=>{

// Can Be send HTML FILE JUST BY CHANGING PLAIN TO HTML AND FILE NAME
//     res.writeHead(200,{'Content-Type': 'text/plain'})
//     const dataChunk = fs.createReadStream(`${__dirname}/text.txt`)
//     dataChunk.pipe(res);
// });

// server.listen(3000,'127.0.0.1')


// const http = require('http');
// const fs = require('fs');

// const server = http.createServer((req,res)=>{
//     if(req.url === '/home' || req.url ==='/'){
//         res.writeHead(200,{'COntent-Type': 'text/html'})
//         fs.createReadStream(__dirname+"/index.html").pipe(res)

//     }else{
//         res.end("You are on the Wrong Page")
//     }

// });

// server.listen(3000,'127.0.0.1')
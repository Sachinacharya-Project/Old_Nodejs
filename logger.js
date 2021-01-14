// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// var url = "http://mylogger.io/log";

// class Logger extends EventEmitter {
//     log(message){
//         //Sending HTTP request
//         console.log(message);
    
//         this.emit('messageLogged',{id: 1,url:"http://"});
//     }
// }


// module.exports = Logger;

// console.log(__filename);
// console.log(__dirname)
//EXPORT PROPERTY OR METHOD FOR GLOBAL USE
//module.exports.nameForExported = property/MethodName;
//If have fultiple Methods and Property Object is usefull and can be use as Below
//module.exports.log = log;
//But if have only use as
//Can also be done exports.name = name but cannot be used as exports = name;
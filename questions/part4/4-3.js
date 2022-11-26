// // TODO

// const fs = require('fs');
// const EventEmitter = require('events');

// // Queue System
// class TaskQueue extends EventEmitter {
//   constructor(concurrency) {
//     super();
//     this.concurrency = concurrency;
//     this.running = 0;
//     this.queue = [];
//   }

//   pushTask(task) {
//     this.queue.push(task);
//     process.nextTick(this.next.bind(this));
//   }

//   next() {
//     while (this.running < this.concurrency && this.queue.length) {
//       const task = this.queue.shift();
//       task((err, fd) => {
//         this.running--;
//         this.next();

//         console.log(
//           'Task completed, running: ', this.running,
//           'queue length: ', this.queue.length,
//           'err: ', err,
//           'fd: ', fd
//         );
//       });
//       this.running++;
//     }
//     if (!this.running) {
//       this.emit('empty');
//     }
//   }
// }

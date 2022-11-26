/**
 * 4장. 콜백을 사용한 비동기 제어 흐름 패턴
 * 4-1. 파일 연결 - 파일 내용을 순차적으로 이어서 하나의 파일로 합치기
 */

const fs = require('fs');

function finishCallback(err) {
  if (err) {
    return console.error(err);
  }
  console.log('FINISH!');
}

function recursiveConcatFiles(taskCount, files, dest, cb) {
  if (files.length === 0) return cb();

  const file = files.shift();

  fs.readFile(file, (err, data) => {
    if (err) {
      cb(err);
    } else {
      fs.appendFile(dest, data, () => {
        console.log('Task completed: ', taskCount);
        recursiveConcatFiles(taskCount + 1, files, dest, cb)
      });
    }
  });
}

function concatFiles(dest, cb, ...files) {
  recursiveConcatFiles(1, files, dest, cb)
};

concatFiles('dest.txt', finishCallback, 'file1.txt', 'file2.txt', 'file3.txt');
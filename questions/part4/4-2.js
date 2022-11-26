/**
 * 4장. 콜백을 사용한 비동기 제어 흐름 패턴
 * 4-2. 재귀적 파일 리스트
 */

const fs = require('fs');
const path = require('path');

function parsePath(dir, cb, paths) {
  fs.readdir(dir, function (err, files) {
    if (err) {
      return cb(err);
    }

    // if (files.length === 0) {
    //   return cb(null, paths);
    // }

    files.forEach(function (_file) {
      const file = path.resolve(dir, _file);
      if (
        fs.stat(file, function (err, stats) {
          if (err) {
            return cb(err);
          }
          if (stats?.isDirectory()) {
            !paths.has(file) && paths.add(file);
            console.log(file);
            return parsePath(file, cb, paths);
          }
        })
      );
    });
  });
}

function listNestedFiles(dir, cb) {
  this.paths = new Set();
  parsePath(dir, cb, this.paths);
}

listNestedFiles('testDir', (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log('Finish Traverse');
  // console.log(data);
});

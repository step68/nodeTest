const path = require('path');
//node의 path모듈

// 전역변수 : __dirname,__filename 
console.log('전역변수 현재 사용하는 폴더 위치 : ', __dirname); // 폴더의 정보를 확인하고 싶을 때
console.log('전역변수 현재 사용하는 파일명 : ',__filename);
console.log('내장 모듈 폴더위치찾기 : ',path.dirname(__filename));
console.log('내장 모듈 확장자 : ',path.extname(__filename));
console.log('내장 모듈 파일명 : ',path.basename(__filename)); // 파라미터 안에 파일 종류를 넣어주어야 함

// 주어진 파일정보를 이용해서 필요한 정보 분리하기
const fileName = '/d/frontend_4/day02_1212/test06.js';
console.log('내장 모듈 폴더위치찾기 : ',path.dirname(fileName));
console.log('내장 모듈 확장자 : ',path.extname(fileName));
console.log('내장 모듈 파일명 : ',path.basename(fileName));
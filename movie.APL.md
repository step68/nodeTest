영화 목록을 출력 movieList()
movieList() -> createDom()

loadMovie() -> movieList()
searchCatagory(검색한 영화목록) -> movieList()
searchText(검색어 목록) -> movieList()
selectCatagory(선택한 카테고리) -> movieList()

중복된 코드가 많아서 정리하였다
업로드 돼 있음

12.12 
node.js 사용
javascript 최신 스펙을 따르고 있음
node 파일명.js (확장자를 생략할 수 있다..[확장자 이름을 다르게 쓸 수 있음])

브라우저 단에서 js를 실행하는 것과 극히 다름
기본 자바 스크립트 문법과 똑같다
node js는 브라우저를 인식하지 못함(dom... 이러한 기능하지 못함)
html를 이용해서 node.js를 실행할 수 없음

2.패키지 매니저(npm,yarn) 
bxslider, fullpage : jquery 플러그인
javascript로 제작된 모듈 (함수,라이브러리,플러그인)을 설치하는 도구


2-1. 모듈 설치하는 법
npm을 이용해서 외부 모듈을 가져오는 법
npm install 모듈이름 --save; => 옛날 방식
npm i 모듈이름; 
설치 후 node_modules 폴더 안에 설치함 
node_modules는 깃허브에 업로드 하지 않아야 함
.gitignore에 업로드 하지 않도록 셋팅이 필요

2-3.Es6 방식의 모듈을 가져우기 : 확장자가 .mjs
import{compareAsc, format} from 'date-fns';

2-4. commonjs 형태의 모듈로 가져다 사용 : 확장자가 .js
설치된 노드 모듈을 가져오는 방법
const {format} = require('date-fns');

4.node 내장 모듈 포함하고 있음
- os 모듈
- path 모듈

4.repl 모드에서 js 실행하기
브라우저 단 > console 탭에서 js실행
node 단 > node > 프롬프트 상태에서 js 실행

5.node로 서버를 만들어 사용할 수 있음
- 클라이언트가 요청에 따라 다르게 만들 수 있음


// express 모듈을 추출하는 과정
// node에서 모듈을 가져올때 require로 가져와서 express란 변수에 담아줌
// (node_modules안의 express폴더를 들고와 사용)
// const http = require('http) 형식
const express = require('express');

// 서버 생성
// express(); 함수(생성자)를 통해 app이란 서버 생성
// (서버의 기능을 가진 객체를 생성한다는뜻) 
// 1. 포트를 열어서 외부에 접근가능하게 해주는 역할
// 2. 요청이 왔을때 함수를 실행 >> 화면출력, 기능실행
const app = express();

// request 이벤트 리스너 설정
// 요청이 왔을때 실행할 함수 지정 (use)
app.use( (request, response) => { // request는 받아오는값, reponse 나타내주는값
    // 화면에 아래의 html태그를 출력
    response.send('<h1>Hello express</h1>'); //send() 메소드의 매개변수는 문자열:html, 배열:json, 객채:json
});
// response 객체의 메소드 종류
// response.send() : 매개변수의 자료형에 따라 적절한 형태로 응답한다.
// response.json() : JSON 형태로 응답한다.
// response.jsonp() : JSONP 형태로 응답한다.
// response.redirect() : 웹 페이지 경로를 강제로 이동한다.

// 서버를 실행
// 먼저 포트번호를 지정하고 포트번호를 통해 외부에서 접근가능하게 함
// node basicServer.js 를 터미널에 입력해 실행해주고 만든 링크로 이동하면됌
app.listen(8080, () => {  // 서버가 열리자마자 실행되는 console.log 내용 (확인용)
    console.log('Server running at http://127.0.0.1:8080');
});


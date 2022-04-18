// express 모듈을 사용해서 서버 생성
const express = require('express');

// 서버 생성
const app = express();

// request 이벤트 리스너 설정
app.use( (request, response) => { // request는 받아오는값, reponse 나타내주는값
    response.send('<h1>Hello express</h1>');
});

// 서버를 실행
//node basicServer.js 를 터미널에 입력해 실행해주고 만든 링크로 이동하면됌
app.listen(8080, () => { 
    console.log('Server running at http://127.0.0.1:8080');
});


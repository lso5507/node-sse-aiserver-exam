const express = require('express');
const app = express();

// POST 요청을 처리하는 엔드포인트
app.post('/chat', async (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');

    const messages = [
        "This is the first chunk.\n",
        "Here comes the second chunk...\n",
        "And now the third chunk.\n",
        "Finally, the last chunk.\n"
    ];

    // 메시지를 순차적으로 전송 (2초 간격)
    for (let i = 0; i < messages.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 2000)); // 2초 대기
        console.log("message::",messages[i]);
        res.write(messages[i]); // 각 메시지를 chunk로 전송
    }

    res.end(); // 모든 데이터 전송 완료
});

// AIServer 시작
const PORT = 5001;
app.listen(PORT, () => {
    console.log(`AIServer is running on http://localhost:${PORT}`);
});
/*
 * @Author: your name
 * @Date: 2020-01-13 15:33:57
 * @LastEditTime : 2020-01-15 11:52:17
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /manageMotie/写着玩.js
 */

const http = require("http");

const session = {};
const sessionKey = 'sid';
const n = 0;
const server = http.createServer((req, res) => {
    var cookie=req.headers.cookie;
    var val=cookie.split('=')[1];
    if(cookie && val ==="liuqi"){
        res.end("come +"+(n++)+"+")
    }else{

    }
    res.setHeader("Set-Cookie", `${sessionKey}= liuqi`)
    res.end('come')
})

server.listen(9000);
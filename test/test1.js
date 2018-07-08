/**
 * Created by wtx on 2018/7/8.
 */

var http = require("http");

function onRequest(request, response){
    console.log("Request received.");
    var str='{"id":"0036",name:"jack",arg:123}';
    response.writeHead(200,{"Content-Type":'text/plain','charset':'utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});
    //response.writeHead(200,{"Content-Type":'application/json','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});
    //response.write("Hello World 8888\n");
    response.write(str);
    response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started.port on 8888");
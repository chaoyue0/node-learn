# http
## 服务端
1、创建服务器：createServer
2、监听端口：listen
3、回调函数：(request, response) => {}

### 响应规则
- 响应行：协议号+状态码+状态字符串
- 响应头：content-type
- 响应体：响应的内容

### 数据流
- 请求/响应头 headers
- 请求/响应体 body

### 传输方式
响应头未加上content-length字段，当响应体数据长度未确定时，默认采用chunked传输方式

## 客户端
1、创建客户端：request
2、指定请求目标和请求头数据
3、客户端发送请求并接收到完整的服务端响应头时，就会调用回调函数

### 请求规则
- 请求行：请求动词+路径查询参数+协议号/版本号
- 请求头：host+accept+content-type
- 请求体：请求的内容，get请求请求体为空

### write
发送正文，可多次调用，没有设置content-length，数据将自动使用http分块传输编码进行编码，
需要调用end来完成发送请求

### Content-Type
浏览器不知道服务器发过来的是什么内容，默认按照文本处理

- text/html：html格式  
- text-plain：默认

## 类
- Agent：确保服务器的每个请求进行排队且单个socket被复用，维持一个socket池
- ClientRequest：request创建实例对象，作为第一个参数req
- Server：创建服务器实例对象，可以启动和停止对服务器的监听
- ServerResponse：server创建的实例对象，作为第二个参数res
- IncomingMessage：
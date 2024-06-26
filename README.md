# node-learn

## 快速上手
### 安装
[node安装官网](https://nodejs.cn/download/)

    在终端输入node回车，返回node版本表示安装成功
### 运行
打开终端，输入node进入命令交互模式，可以输入一条代码语句立即执行并显示结果
 

```javascript
// Ctrl + C 即可退出交互模式
console.log('Hello World!') // Hello World!
```

如果要运行一大段代码，可以编写一个js文件（hello.js）再运行，在终端输入 `node hello.js`


## 文件操作 - fs模块

### 基本操作
对文件进行整体操作，即整个文件数据直接放在内存中操作，包括读取、写入、拷贝和追加

    对文件操作需要考虑性能，只能针对操作占用内存较小的文件

#### 文件写入
- writeFileSync
  - file：文件路径(必须包含`文件扩展名`)
  - data：写入的数据，类型为string或Buffer
  - option
    - encoding：编码，默认utf-8
    - mode：权限位，默认0o666（针对Linux和Unix操作系统）
    - flag：标识位，默认w
- writeFile
  - 前面参数一致
  - callback
    - err
#### 文件读取
- readFileSync：返回值为buffer或者string
- readFile：没有返回值
#### 文件追加写入
- appendFileSync
- appendFile
#### 文件拷贝
- copyFileSync
- copyFile

      异步操作的执行顺序是不确定的，不能按照代码的编写顺序来判断执行顺序

### 原生操作
#### open
以异步的方式打开文件，`fs.open(path, flags[, mode], callback)`

##### flag

- r：读取模式打开文件，文件必须存在，否则会抛出异常
- r+：读写模式打开文件，文件必须存在
- w：写模式打开文件，文件不存在则创建文件
- w+：读写模式打开文件
- a：追加模式打开文件，文件不存在则创建文件

##### callback
(err, fd) => {}

- err：错误信息
- fd：文件描述符，作为文件的唯一标识

#### read
- fd：文件描述符，需要先使用 open 打开
- buffer：要将内容读取到的 Buffer
- offset：整数，向 Buffer 写入的初始位置
- length：整数，读取文件的长度
- position：整数，读取文件初始位置
- callback：回调函数，有三个参数 err（错误），bytesRead（实际读取的字节数），buffer（被写入的缓存区对象），读取执行完成后执行。

#### write
参数与read相同
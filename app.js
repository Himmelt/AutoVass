const express = require('express');
const index = require('./routes/index');
const app = express();

// 设置渲染引擎
app.engine('html', require('express-art-template'));
app.set('view engine', 'html');

// 设置功能
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// 设置路由
app.use('/', index);

// 启动监听
app.listen(3000, () => {
    console.log("Listening on http://localhost:3000 ...")
});

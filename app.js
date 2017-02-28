
var koa = require('koa');
var controller = require('koa-route');
var app = koa(); 

//页面渲染格式
var view = require('co-views');
var render = view('./view',{
	map:{ html:'ejs' }
});

//静态资源
var koa_static = require("koa-static-server");
app.use(koa_static({
	rootDir:'./static',  //所在目录
	rootPath:'/static',  //访问地址
	maxage:0,            //缓存
}));

//首页路由
app.use(controller.get('/',function*(){
	this.body = yield render('index',{title:'辩否首页'});
}));

app.use(controller.get('/subject',function*(){
	this.body = yield render('subject',{title:'约辩'});
}));


app.listen(3005);
console.log("start 3005!!");
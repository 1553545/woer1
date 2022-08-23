//引入express模块
const express=require("express");
// 跨域问题
const cors=require('cors')
//引入用户路由器模块
const userRouter=require('./router/user.js');
//引入管理员路由器模块
const userRouter_2=require('./router/admin.js');
//引入宴会厅路由器模块
const userRouter_3=require('./router/hotel.js');
//引入预订路由器模块
const userRouter_4=require('./router/resever.js');
//创建web服务器
const app = express();
app.use(cors());
app.listen(9090,()=>{
	console.log("服务器响应成功9090")
});  
//将post传递的参数转化为对象
app.use( express.urlencoded({
  extended:true
}) );
//使用用户路由器,添加前缀/v1/users
app.use('/v1/user',userRouter);
//使用用户路由器,添加前缀/v1/users
app.use('/v1/admin',userRouter_2);
//使用宴会厅路由器,添加前缀/v1/hotel
app.use('/v1/hotel',userRouter_3);
//使用预订路由器,添加前缀/v1/resever
app.use('/v1/resever',userRouter_4);
//添加错误处理中间件，拦截所有路由传递的错误
app.use( (err,req,res,next)=>{
  //err 接收的错误内容
  console.log(err);
  res.send({code:500,msg:'服务器端错误'});
} );

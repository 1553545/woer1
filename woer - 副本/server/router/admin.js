//引入express模块
const express=require('express');
//引入pool.js模块
const pool=require('../pool.js');
//创建路由器对象
const r=express.Router();


//1.管理员登录接口
//地址：127.0.0.1:9090/v1/admin/login
//请求方式post
r.post('/login',(req,res,next)=>{
	var obj=req.body
	//console.log(obj)
	if(!obj.username){
		res.send({code:401,msg:'username不能为空'})
		return;
	}else if(!obj.password){
		res.send({code:402,msg:'password不能为空'})
		return;
	}
	pool.query('select * from woer_admin where username=? and password=?',[obj.username,obj.password],(err,result)=>{
		if (err)
		{
			next(err);
			return;
		}
		if(result.length!=0){
			res.send({code:200,msg:"登录成功"})
		}else{
			res.send({code:501,msg:"登陆失败"})
		}
	})
})

//暴露路由器对象
module.exports=r;
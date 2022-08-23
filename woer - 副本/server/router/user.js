//引入express模块
const express=require('express');
//引入pool.js模块
const pool=require('../pool.js');
//创建路由器对象
const r=express.Router();
//1.用户注册接口
//地址:127.0.0.1:9090/v1/user/reg
//请求方式:post
r.post('/reg',(req,res,next)=>{
	//获得参数
	var obj=req.body
	console.log(obj)
	//验证用户名密码不能为空
	if(!obj.username){
		res.send({code:401,msg:'username不能为空'})
		return;
	}else if(!obj.password){
		res.send({code:402,msg:'password不能为空'})
		return;
	}
	//将数据插入到数据库表中
	pool.query('insert into woer_user set?',[obj],(err,result)=>{
		if(err){
			next(err);
			return;
		}
		console.log(result);
		//执行成功再响应
		res.send({code:200,msg:'员工添加成功'})
	})
});
//2.用户登录接口
//地址：127.0.0.1:9090/v1/user/login
//请求方式post
r.post('/login',(req,res,next)=>{
	var obj=req.body
	console.log(obj)
	if(!obj.username){
		res.send({code:401,msg:'username不能为空'})
		return;
	}else if(!obj.password){
		res.send({code:402,msg:'password不能为空'})
		return;
	}
	pool.query('select * from woer_user where username=? and password=?',[obj.username,obj.password],(err,result)=>{
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
//3.删除用户接口
//地址：127.0.0.1:9090/v1/user/
//请求方式delete
r.delete('/:uid',(req,res,next)=>{
	var obj = req.params;
	pool.query('delete from woer_user where uid=?',[obj.uid],(err,result)=>{
		if(err){
			next(err);
			return;
		}
		if(result.affectedRows===0){
			res.send({code:501,msg:'删除失败'});
		}else{
			res.send({code:200,msg:'删除成功'});
		}
	})
})
//暴露路由器对象
module.exports=r;
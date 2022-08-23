//引入express模块
const express=require('express');
//引入pool.js模块
const pool=require('../pool.js');
//创建路由器对象
const r=express.Router();
//2.预订添加信息接口
//地址：127.0.0.1:9090/v1/resever/add
//请求方式post
r.post('/add',(req,res,next)=>{
	var obj=req.body
	console.log(obj)
	pool.query('insert into woer_resever set?',[obj],(err,result)=>{
		if(err){
			next(err);
			return;
		}
		console.log(result);
		res.send({code:200,msg:'预订添加信息成功'})
	})
});
//2.查询添加信息接口
//地址：127.0.0.1:9090/v1/resever/sel
//请求方式get
r.get('/sel',(req,res,next)=>{
	var obj=req.params;
	console.log(req.params)
	pool.query('select * from woer_resever',[obj],(err,result)=>{
		if(err){
			next(err);
			return;
		}
		if(result.length===0){
			res.send({code:501,msg:'信息查询失败'});
		}else{
			res.send({code:200,msg:'信息查询成功',data:result});
		}
	})
})
//2.预订删除信息接口
//地址：127.0.0.1:9090/v1/resever/
//请求方式delete
r.delete('/:uid',(req,res,next)=>{
	var obj = req.params;
	pool.query('delete from woer_resever where uid=?',[obj.uid],(err,result)=>{
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
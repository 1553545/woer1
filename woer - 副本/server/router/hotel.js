//引入express模块
const express=require('express');
//引入pool.js模块
const pool=require('../pool.js');
//创建路由器对象
const r=express.Router();
//查询购物车接口：http://localhost:9090/v1/hotel/ind
r.get('/ind',(req,res,next)=>{
	var obj=req.params;
	console.log(req.params)
	pool.query('select * from woer_hotel',[obj],(err,result)=>{
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
//暴露路由器对象
module.exports=r;
// JavaScript Document
	//奖品数量
	var number=12;
	//线的数量
	var line=number/2;
	//角度
	var deg=360/number;

	//随机数
	var math=Math.floor(Math.random()*5280+720);
	$(document).ready(function add(){
		
				
			//添加使用水平线做大转盘分割线
			for(var i=0;i<line;i++){
					$("#dzp").append("<hr style='transform:rotate("+i*deg+"deg);'/>");
				}
		
			
			//插入大转盘奖品内容
			for(var i=0;i<number;i++){
				$("#dzp").append("<div>奖品 "+(i+1)+"</div>");
				$("#dzp div").eq(i).css("transform","rotate("+(deg*i-(deg/2))+"deg)");
				}
		
			
			//点击按钮转盘开始旋转
			$("#stop").click(function(){
				math+=Math.floor(Math.random()*5280+720);
				$("#dzp").rotate({animateTo: math,duration:6000});
				
				var other=(math%360)/deg;
				var target=(3-Math.round(other));
				setTimeout(function(){ alert("恭喜，你抽中了 : "+$("#dzp div").eq(target-1).text()) }, 6000);
				no=0;
			});
			
			//点击确定按钮，设置奖品数量，清空原有转盘分割线，重新添加分割线与奖品
			$("#ok").click(function(){
				//奖品数量
				var number=$("#select  option:selected").val();
				//线的数量
				var line=number/2;
				//角度
				var deg=360/number;
				//清空大转盘
				$("#dzp").text("");
				//添加使用水平线做大转盘分割线
				for(var i=0;i<line;i++){
						$("#dzp").append("<hr style='transform:rotate("+i*deg+"deg);'/>");
					}
				//插入大转盘奖品内容
				for(var i=0;i<number;i++){
					$("#dzp").append("<div>奖品"+(i+1)+"</div>");
					$("#dzp div").eq(i).css("transform","rotate("+(deg*i-(deg/2))+"deg)");
					$("#dzp div").eq(i).text(prize[i]=$("#prize input").eq(i).val());
					}
			});
			
			$("#select").change(function(){
				var number=$("#select  option:selected").val();
				$("#prize").text("");
				for(var i=0;i<number;i++){
					if(i<9){
						$("#prize").append("设置奖品0"+(i+1)+"为："+"<input maxlength='7' type='text'/><br/>");
					}else{
						$("#prize").append("设置奖品"+(i+1)+"为："+"<input  maxlength='7' type='text'/><br/>");
					}
				}
			});
		
		});
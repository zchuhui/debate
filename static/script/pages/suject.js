$(function(){

	getSujectData();

	
});


/**
 * 获取数据
 * @return {[type]} [description]
 */
var getSujectData = function(){
	var subject_url = mockData.subject_url();
	$.get(subject_url,function(d){
		d = JSON.parse(d);
		new Vue({
			el:'#root',
			data:{
				items:d.items,
				nav_current:d.nav_current,
			},
			beforeCreate:function(){ //数据渲染前的操作
				
			},
			created:function(){ //数据渲染后的操作

				//选中导航栏当前的子项
				$("#head_nav li:eq("+this.nav_current+") a").addClass('current')
			}
		});

	});
}

$(function(){
	getDebaterData();

});

/**
 * 获取数据
 * @return {[type]} [description]
 */
var getDebaterData = function(){

	var url = mockData.debater_url();

	$.get(url,function(d){

		d = JSON.parse(d);

		var subjectVue = new Vue({
			el:'#debater',
			data:{
				items:d.items,
				recommend_items:d.recommend_items,
				loading:1,
				nav_current:d.nav_current,
			},
			created:function(){ //数据渲染后的操作
				//隐藏滚动条
				this.loading = 0;
				//选中导航栏当前的子项（约辩）
				$("#head_nav li:eq("+this.nav_current+") a").addClass('current');
			},
			methods:{
				
			}
		});

		//滚动条操作
		$(window).scroll(function(){
		　　var scrollTop = $(this).scrollTop();
		　　var scrollHeight = $(document).height();
		　　var windowHeight = $(this).height();
		　　if(scrollTop + windowHeight == scrollHeight){
		　　　　subjectVue.scrollBottom();
		　　}
		});

	});
}; 


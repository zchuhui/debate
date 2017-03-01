
$(function(){
	getIndexData();

});

/**
 * 获取数据
 * @return {[type]} [description]
 */
var getIndexData = function(){

	var index_url = mockData.index_url();

	$.get(index_url,function(d){
		d = JSON.parse(d);
		var subjectVue = new Vue({
			el:'#root',
			data:{
				tags:d.tags,
				items:d.items,
				recommend_items:d.recommend_items,
				nav_current:d.nav_current,
				loading:1,
				show_count:10,
			},
			beforeCreate:function(){ //数据渲染前的操作
				
			},
			created:function(){ //数据渲染后的操作
				//隐藏滚动条
				this.loading = 0;

				//选中导航栏当前的子项（约辩）
				$("#head_nav li:eq("+this.nav_current+") a").addClass('current')
				
			},
			updated:function(){
				//scrollBottom(this.test); 
			},
			watch:{
				loading:function(){  
					console.log("test:"+this.loading); 
				}
			},
			methods:{

				scrollBottom: function(){
					if (this.show_count < this.items.length) {
						this.loading = 1; 
					 	this.show_count = this.show_count + 10; 
					 	setTimeout(function(){this.loading = 0;}, 1000);
					}
					else{ 
						this.loading = 0; 
						//alert("所有数据加载完毕！"); 
					}

				}
			}
		});


		//subjectVue.scrollBottom();
		$(window).scroll(function(){
		　　var scrollTop = $(this).scrollTop();
		　　var scrollHeight = $(document).height();
		　　var windowHeight = $(this).height();
		　　if(scrollTop + windowHeight == scrollHeight){
		　　　　subjectVue.scrollBottom();  
		　　}
		});

	});
}
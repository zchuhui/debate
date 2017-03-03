
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
		var dataItems = d.items;

		var subjectVue = new Vue({
			el:'#root',
			data:{
				tags:d.tags,
				items:dataItems,
				recommend_items:d.recommend_items,
				nav_current:d.nav_current,
				loading:1,
				show_count:10,
				test:0,
			},
			computed:{
				tg:function(){console.log("computed");
					return this.items;    
				}
			},
			beforeCreate:function(){ //数据渲染前的操作
			},
			created:function(){ //数据渲染后的操作
				//隐藏滚动条
				this.loading = 0;
				//选中导航栏当前的子项（约辩）
				$("#head_nav li:eq("+this.nav_current+") a").addClass('current');
			},
			methods:{
				//滚动条拉到底部时追加载入数据
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
				}, 

				//标签切换
				toggleTags:function(j){   
					getIndexDataInTag.then(function(d){
						subjectVue.items = d.items;   
						
					},function(error){
						//console.log(error);
					});
					
					

				}

			}
		});


		// subjectVue.tg;
		// console.log(subjectVue.items);

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



//根据标签请求数据
var getIndexDataInTag = new Promise(function(resolve, reject){
	var index_tag_url = mockData.index_tag_url();
	$.get(index_tag_url,function(d){  
		d = JSON.parse(d); 
		if (d.result == 0) {
			resolve(d); 
		}else{
			reject("获取数据报错！");
		}
	});
});


$(function(){
	getIndexTags();
	getMembers();
	getIndexData();
	

	$("body").on("click","#tags li",function(){
		$("#tags li").removeClass("current");
		$(this).addClass("current");
		
		if ($(this).index() == 0) {
			$("#hot").show();
			$("#new").hide();
		}else{
			$("#hot").hide(); 
			$("#new").show();
		}
	});


});

/**
 * 获取首页数据
 */
var getIndexData = function(){

	//请求数据
	$.get("/static/api/discuss/getLatestDiscussDetails",function(d){

		d = JSON.parse(d);  

		var subjectVue = new Vue({
			el:'#root',
			data:{
				items:d.data,
				// recommend_items:d.recommend_items,
				nav_current:0, 
				loading:1,
				show_count:10,
				test:0, 
			},
			computed:{ 
				tg:function(){
					return this.items;    
				}
			},
			beforeMount:function(){ //数据渲染前的操作
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
					// getIndexDataInTag.then(function(d){
					// 	subjectVue.items = d.items;   
						
					// },function(error){
					// 	//console.log(error);
					// });
					
				},
				latestItems:function(){
					this.items = getLatestData(); 
				}

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

/*
 * 获取标签
 */
var getIndexTags = function(){
	$.ajax({
		url: '/static/api/debate/tags',
		type: 'get',
		dataType: 'json',
	})
	.done(function(d) { 
		var tagsVue = new Vue({
			el:'#tags',
			data:{
				tags:d.data,
			}

		});
	})
	.fail(function() {
		console.log("error");
	})
}


/*
 * 获取会员
 */
var getMembers = function(){
	$.ajax({
		url: '/static/api/member/getMembers',
		type: 'get',
		dataType: 'json',
	})
	.done(function(d) { 
		console.log(d.data);
		var memberVue = new Vue({
			el:'#recommend',
			data:{
				members:d.data,
			}

		});
	})
	.fail(function() {
		console.log("error");
	})
	
}


/*
 * 获取最新对论
 */
var getLatestData = function(){
	var data;
	$.ajax({
		url: '/static/api/member/getLatestDiscussDetails',
		type: 'get',
		dataType: 'json',
	})
	.done(function(d) { 
		console.log(d.data);	
		data = d.data;
	})
	.fail(function() {
		console.log("error");
	})
	
	return data;
}




//根据标签请求数据
// var getIndexDataInTag = new Promise(function(resolve, reject){
	
// 	$.get("/static/api/debate/tags",function(d){  
// 		d = JSON.parse(d); 
// 		if (d.result == 0) {
// 			resolve(d); 
// 		}else{
// 			reject("获取数据报错！");
// 		}
// 	});
// });



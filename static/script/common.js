
$(function(){
	winLoading();
});


//计算内容区域的最小高度，防止内容少时造成页面抖动或底部上移
var winLoading = function(){
	
	var win_height =  document.body.scrollHeight;  
	var con_height = win_height - (60+180+120);
	$('.content-wrap').css('min-height',con_height);
	
}


//引用Mockjs进行数据模拟
var mockData = (function(){

	//首页数据
	var index_url = function(){
		var url = "www.mock.com/index";
		Mock.mock(url,{
			'id|1-10000':1,
			'nav_current':0,
			'authors'	:'@name',
			'tags|1-5':['热门','新闻','女性','教育','互联网'],  
			'items|1-100':[{ 
				'id|+1':1, 
				'title|1-5':'我认为地铁是方的，你说对吗？',
				'user_name|1-3':'伯爵',
				'user_summay|1-3':'伯爵是个人',
				'support_count|0-10000':1, 
				'opposition_count|0-10000':1,
				'review_count|0-10000':1,
				'summay|1-5':'二十一岁时，正在云南插队。陈清扬当时二十六岁，就在我插队的地方当医生。我在山下十四队，她在山上十五队。' ,
				'cover':'/static/img/test/head.jpg'
			}], 
			'recommend_items|5-15':[{ 
				'user_id|+1':1,
				'user_name|1-3':'乞丐',
				'user_summary|1-3':'我是一个非常低调的人。',
				'cover':'/static/img/test/head2.jpg'
			}],
		});
		return url;
	}; 

	//约辩数据
	var subject_url = function(){
		var url = "www.mock.com/subject";
		Mock.mock(url,{
			'id|1-10000':0,
			'nav_current':1,
			'authors'	 :'@name',
			'items|3-20':[{ 
				'id|+1':1,
				'title|1':'我认为地铁是方的，你说对吗？',
				'support_name|1-3':'伯爵',
				'opposition_name|1-3':'对手',
				'support_cover':'/static/img/test/head.jpg',
				'opposition_cover':'/static/img/test/head2.jpg',
				'support_count|0-10000':1, 
				'opposition_count|0-10000':1,
				'datetime':'@datetime',
				'count|0-10000':0,
			}],
		});
		return url;
	}; 

	return {
		index_url:index_url,
		subject_url:subject_url,

	}

})();
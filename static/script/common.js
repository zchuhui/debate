
$(function(){
	winLoading();
});


/*计算内容区域的最小高度，防止内容少时造成页面抖动或底部上移*/
var winLoading = function(){
	
	var win_height =  document.body.scrollHeight;  
	var con_height = win_height - (60+180+120); 
	$('.content-wrap').css('min-height',con_height);
	
}

/*发布问题*/
var releaseQuestion = function(){
	$("body").css("overflow","hidden");
	$("#dialog_bg").fadeIn(100);  
	$("#dialog_wrap").slideDown();  
} 

/*关闭发布问题*/
var closeQuestion = function(){
	$("body").css("overflow","auto");
	$("#dialog_bg").fadeOut(500); 
	$("#dialog_wrap").slideUp();  
}

/*引用Mockjs进行数据模拟*/
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

	//首页标签切换请求
	var index_tag_url = function(){
		var url = "www.mock.com/index_tag";
		Mock.mock(url,{
			'id|1-10000':1,
			'result':0,
			'authors'	:'@name', 
			'items|1-30':[{ 
				'id|+1':1, 
				'title|1-5':'外星人存在吗？',
				'user_name|1-3':'外星人',
				'user_summay|1-3':'我不是外星人',
				'support_count|0-10000':1, 
				'opposition_count|0-10000':1,
				'review_count|0-10000':1,
				'summay|1-5':'二十一岁时，正在云南插队。陈清扬当时二十六岁，就在我插队的地方当医生。我在山下十四队，她在山上十五队。' ,
				'cover':'/static/img/test/head.jpg'
			}]
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
			}]
		});
		return url;
	}; 

	//详情
	var detail_url = function(){
		var url = "www.mock.com/detail/45454";
		Mock.mock(url,{
			'id|1000-9999':1212,
			'title|1':'我认为地铁是方的，你说对吗？',
			'summary|3-6':'如果你妈跟你老婆一起掉进河里，你先救谁？？ ',
			'you_support':true,
			'support_title|1':'我支持先救老妈',
			'support_count|10-9999':222,
			'oppose_title|1':'我支持先救老妈',
			'oppose_count|10-9999':888,
			'release_time':'2015.01.04',
			'review_count|1-9999':111,
			'reviews|1-10':[{
				'u_id|+1':0,
				'u_cover':'/static/img/test/head.jpg',
				'u_name|1-3':'伯爵怪才',
				'u_support|1-2':true, 
				'u_support_count|5-555':333,
				'u_is_support':true,
				'u_summary|5-10':'我觉得啊，必须支持老婆啊！',
				'u_time':'2015.1.2   15:00',
				'u_edit_f':false,
				'u_edit_content':'',
				'talks|1-5':[{
					'uu_id|+1':0,
					'uu_name|1-3':'鸣人',
					'uu_cover':'/static/img/test/head2.jpg',
					'uu_summay|1-5':'我保持中立，别来了好吗？',
					'uu_support_count|2-100':1212,
					'uu_time':'2015.1.2   15:00',
					'uu_edit_f':false,
					'uu_edit_content':'',
				}]
			}],
			'hots|10-15':[{
				'title|1-3':'热门对论标题。',
				'count|1-1000':10
			}],
		});

		return url;
	}

	//辩手数据
	var debater_url = function(){
		var url = "www.mock.com/debater";
		Mock.mock(url,{
			'id|1-10000':1,
			'nav_current':2,
			'items|6-15':[{ 
				'id|+1':1, 
				'user_name|1-3':'伯爵',
				'user_summary|5-10':'伯爵是个人',
				'cover':'/static/img/test/head.jpg',
				'debate_count|10-1000':0,
				'support_count|10-1000':0,
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

	return {
		index_url:index_url,
		subject_url:subject_url,
		index_tag_url:index_tag_url,
		detail_url:detail_url,
		debater_url:debater_url,
	}

})();
$(function () {
	//回复编辑器
    $('.revert_input').flexText();
    //评论编辑器
    $('#textarea1').wangEditor({
		//注意，menuConfig必须是一个二维数组
		'menuConfig': [
			['bold','setHead'],
			['list','justify'],
			['createLink','insertHr','undo']
		]
	});


    getDetailData();
    getIndexData();

});


var getDetailData = function(){
	// var url = mockData.detail_url();
	var url = '/static/api/discuss/detail_41cf63402f1a4823b204ac5943fffdf1';

	$.get(url,function(d){ 
		var d = JSON.parse(d).data;
		console.log(d); 
		var detaileVue  = new Vue({
			el:'#detail',
			data:{
				detail:d.detail,
				msgs:d.msgs,
				// id:d.id,
				// title:d.detail.question.descDetail,
				// summary:d.detail.question.descDetailMore,
				// support_title:d.detail.question.obversePoint,
				// support_count:d.detail.obverseSupportNum,
				// oppose_title:d.detail.question.reversePoint,
				// oppose_count:d.detail.reverseSupportNum,
				// release_time:d.detail.beginTime,
				// review_count:d.detail.freeViewNumn,
				// msgs:d.msgs,
				// you_support:d.supportStatus,

				hots:d.hots,
				loading:true,
			},
			methods:{
				isRevert:function(id){
					this.msgs[id].debateMsg.question.isEnable = !this.msgs[id].debateMsg.question.isEnable;
				},
				isRevertItem:function(id,item_id){
					this.reviews[id].talks[item_id].uu_edit_f = !this.reviews[id].talks[item_id].uu_edit_f;
				},
				revert:function(){

				},
				cancel:function(id){
					this.msgs[id].debateMsg.question.isEnable = !this.msgs[id].debateMsg.question.isEnable
				},
				cancelItem:function(id,item_id){
					this.reviews[id].talks[item_id].uu_edit_f = !this.reviews[id].talks[item_id].uu_edit_f;
				}
			},
			created:function(){
				this.loading = false;
			}

		})
	});

}

/**
 * 获取首页数据
 */
var getIndexData = function(){

	//请求数据
	$.get("/static/api/discuss/getLatestDiscussDetails",function(d){

		d = JSON.parse(d);

		var hotVue = new Vue({
			el:'#hot',
			data:{
				hots:d.data,
			}
		});
		
	});

}; 








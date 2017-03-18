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

});


var getDetailData = function(){
	var url = mockData.detail_url();

	$.get(url,function(d){
		var d = JSON.parse(d);
		console.log(d); 
		var detaileVue  = new Vue({
			el:'#detail',
			data:{
				id:d.id,
				title:d.title,
				summary:d.summary,
				support_title:d.support_title,
				support_count:d.support_count,
				oppose_title:d.oppose_title,
				oppose_count:d.oppose_count,
				release_time:d.release_time,
				review_count:d.review_count,
				reviews:d.reviews,
				you_support:d.you_support,

			},
			methods:{
				isRevert:function(id){
					this.reviews[id].u_edit_f = !this.reviews[id].u_edit_f;
				},
				isRevertItem:function(id,item_id){
					this.reviews[id].talks[item_id].uu_edit_f = !this.reviews[id].talks[item_id].uu_edit_f;
				},
				revert:function(){

				},
				cancel:function(id){
					this.reviews[id].u_edit_f = false;
				},
				cancelItem:function(id,item_id){
					this.reviews[id].talks[item_id].uu_edit_f = !this.reviews[id].talks[item_id].uu_edit_f;
				}
			}
		})
	});

}








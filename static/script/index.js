$(function(){

	var indexData = Mock.mock('www.bbb.com',{
		'id|1-10000':1,
		'authors'	:'@name',
		'items|1-100':[{
			'id|+1':1,
			'title|10-20':'伯爵',
			'summay|30-100':'辩论' 
		}],

	});


	$.ajax({
		url: 'www.bbb.com',
		type: 'get',
		dataType: 'json',
	})
	.done(function(d) {
		console.log("success"); 
		console.log(d); 
	});
});
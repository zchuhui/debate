var Mock = require('mockjs');
var fs = require('fs');


exports.get_index_data = function(){
	var indexData = Mock.mock({
		'id|1-10000':1, 
		'authors'	:'@name',
		'items|1-100':[{
			'id|+1':1,
			'title|10-20':'伯爵',
			'summay|30-100':'辩论' 
		}],

	});

	

 	return indexData;   
}



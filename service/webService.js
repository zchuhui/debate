var Mock = require('mockjs');
var fs = require('fs');


exports.get_index_data_url = function(){
		var url =  "www.data.com/test_index";

		var indexData = Mock.mock(url,{
			'id|1-10000':1, 
			'authors'	:'@name',
			'items|1-100':[{
				'id|+1':1,
				'title|10-20':'伯爵',
				'summay|30-100':'辩论' 
			}],
		});
		
		return url;  
}


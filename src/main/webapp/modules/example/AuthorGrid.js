define (["grid", "service"], function (grid, service){
	function create (placeAt) {
		grid.create ({
			idTable : "myTable",
			placeAt: placeAt,
			columns : [{label:"Name", width: 250, field : "name"}, 
			           {label: "High", width: 50, field: "high"},
			           {label: "Birth Day", width: 100, field: "birthDay"}]
		})
	}
	
	function loadData () {
		service.get({
			url : "/author",
			success: onLoadSuccess
		})
		
	}
	
	function onLoadSuccess (data) {
		grid.fill(data)
	} 

	return {
		create : create,
		loadData : loadData
	}
})
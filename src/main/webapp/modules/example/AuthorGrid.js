define (["grid"], function (grid, dialog){
	function create (placeAt) {
		grid.create ({
			idTable : "myTable",
			placeAt: placeAt,
			columns : [{label:"teste", width: 100, field : "test"}, {label: "other", width: 200, field: "other"}]
		})
	}
	
	function loadData () {
		grid.fill([{test: "um teste",other: "other aaaa"},{test: "um teste22222",other: "other 33333"}])
	}

	return {
		create : create,
		loadData : loadData
	}
})
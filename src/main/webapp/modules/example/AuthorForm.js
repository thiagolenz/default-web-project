define (["grid"], function (grid){
	function doTheThings () {
		grid.create ({
			idTable : "myTable",
			placeAt: "body",
			columns : [{label:"teste", width: 100, field : "test"}, {label: "other", width: 200, field: "other"}]
		})
		
		grid.fill([{test: "um teste",other: "other aaaa"},{test: "um teste22222",other: "other 33333"}])
				grid.fill([{test: "um teste",other: "other aaaa"},{test: "um teste22222",other: "other 33333"}])
	}

	return {
		doTheThings : doTheThings
	}
})
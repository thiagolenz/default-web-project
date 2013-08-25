define(function () {
	var config = null;
	function create (_config) {
		config = _config
		createTableTag()
	}
	
	function createTableTag () {
		var html = document.createElement("table")
		html.id = config.idTable 
		$(html).addClass("table table-bordered table-striped")
		$(html).append(createHeader())
		$("#"+config.placeAt).html(html);
	}
	
	function createHeader () {
		var head = document.createElement("thead")
		var tr = document.createElement("tr")
		for (var i = 0 ; i< config.columns.length; i++)
			$(tr).append(createColumnHeader(config.columns[i]))
		$(head).append(tr);
        return head
	}
	
	function createColumnHeader (column) {
		var th = document.createElement("th")
		$(th).css("width", column.width)
		$(th).html(column.label)
		return th;
	} 
	
	function fill (data) {
		clear()
		var tbody = document.createElement("tbody")
		for (var i = 0 ; i < data.length ; i++) 
			$(tbody).append(createRow(data, i))
		$("#"+config.idTable).append(tbody)
	}
	
	function createRow (data, rowIndex) {
		var tr = document.createElement("tr")
		for (var j = 0 ; j < config.columns.length ; j++) {
			var td = document.createElement("td")
			$(td).html(data[rowIndex][config.columns[j].field])
			$(tr).append(td)
		}
		return tr
	} 
	
	function clear () {
		$("#"+config.idTable).find('tbody').remove();
	} 
	
	return {
		create : create,
		fill : fill,
		clear : clear
	}
});
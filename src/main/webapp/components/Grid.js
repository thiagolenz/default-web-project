define(function () {
	var config = null
		
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
			var content = createOtherCellContent(j, data[rowIndex]);
	
			if (content == null)
				content = data[rowIndex][config.columns[j].field];
			
			$(td).html(content)
			$(tr).append(td)
		}
		return tr
	} 
	
	function createOtherCellContent (columnIndex, row) {
		var columnConfig = config.columns[columnIndex]
		var content = null
		
		if (isButton (columnIndex, columnConfig, row)) 
			content = createButtonContent(columnIndex, columnConfig, row)
		else if (isCustomContent(columnConfig.customContent))
			content = getCustomContent(columnIndex, columnConfig, row)
		return content
	}
	
	function createButtonContent (columnIndex, columnConfig, row) {
		var button = document.createElement("button")
		button.className = "btn " + columnConfig.className;
			button.innerHTML = getContentLabel(columnIndex, columnConfig, row)
		$(button).on("click", function () { 
			columnConfig.onClick(row) 
		})
		return button;
	}
	
	function isButton (columnIndex, columnConfig, row) {
		if (typeof columnConfig.isButton == 'function') 
			return columnConfig.isButton (row, columnIndex)
		else 
			return columnConfig.isButton
	}
	
	function getContentLabel (columnIndex, columnConfig, row) {
		if (typeof columnConfig.contentLabel == 'function') 
			return columnConfig.contentLabel (row, columnIndex)
		else 
			return columnConfig.contentLabel
	}
	
	function isCustomContent (customContent) {
		return typeof customContent == 'function' || customContent != null
	}
	
	function getCustomContent (columnIndex, columnConfig, row) {
		if (typeof columnConfig.customContent == 'function') 
			return columnConfig.customContent (row, columnIndex)
		else 
			return columnConfig.customContent
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
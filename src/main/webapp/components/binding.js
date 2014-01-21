define(["formatter"], function (formatter){
	
	function setIn (source) {
		
	} 
	
	function copy (source, destiny) {
		if (!destiny)
			destiny = {};
		var elements = $("[name*='"+source+".']")
		for (var i = 0; i < elements.length ; i++) {
			var element = elements[i];
			var attribute = element.name.split(".")[1];
			destiny[attribute] = parseData (element.value, element.getAttribute("data-type"));
			console.log();
		}
		return destiny;
	}
	
	function parseData (value, type) {
		if (!type || type === "String" || !value)
			return value;
		if (type === "Integer")
			return parseInt(value, 10);
		return value;
	}
	
	
})
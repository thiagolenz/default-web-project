define (function () {
	
	function translate () {
		var translate = jQuery("*:contains('${'):not(:has(*))")
		for (var i = 0; i < translate.length; i++) {
			var t= $(translate[i]);
			console.log (t.text())
			t.text("Traduzido")
		}
	}
	
	return {
		
	}
})
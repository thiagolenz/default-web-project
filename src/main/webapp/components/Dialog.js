define(function (){
	var config = null
	function open (_config) {
		var idContainer = "dialogContainer"
		config = _config
		if ($("#"+idContainer).length == 0){
			var modalContainer = document.createElement("div")
			modalContainer.id = idContainer
			$("body").append(modalContainer)
			$("#dialogContainer").load("components/templates/DialogContainer.html", loadBodyModal)
		} else 
			loadBodyModal()
	}
	
	function loadBodyModal () {
		configModalLabels()
		$(".modal-body").load(config.content, onLoadFinish)
	}
	
	function configModalLabels () {
		$(".modal-title").html(config.title)
	}
	
	function onLoadFinish () {
		$("#myModal").modal()		
	}
	
	return {
		open : open
	}
	
})
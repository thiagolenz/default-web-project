define(["service"], function (service){
	var config = null;

	function open (_config) {
		config = _config;
		loadModalContainer();
	}

	function loadModalContainer () {
		var idContainer = "dialogContainer";
			if ($("#"+idContainer).length == 0){
				var modalContainer = document.createElement("div");
				modalContainer.id = idContainer;
				$("body").append(modalContainer);
				$("#dialogContainer").load("components/templates/DialogContainer.html", loadBodyModal);
			} else 
				loadBodyModal();
	}

	function loadBodyModal () {
		configModalLabels();
		$(".modal-body").load(config.content, onLoadFinish);
	}

	function configModalLabels () {
		$(".modal-title").html(config.title);
	}

	function onLoadFinish () {
		config.afterLoadContent ();
		bindEvents();
		$("#myModal").modal({
			backdrop: "static"
		});		
	}
	
	function bindEvents () {
		$("#btnModalSave").off().on("click", onModalConfirm);

		$('#myModal').off().on('hidden.bs.modal', function (e) {
			removeSomeTrash();
		});
	}
	
	function onModalConfirm () {
		config.caller.onModalConfirm (config);
	}

	function removeSomeTrash () {
		$(".datepicker.dropdown-menu").remove ();
	}
	
	function close () {
		$("#myModal").modal("hide");
		if (config.caller.onCloseModal)
			config.caller.onCloseModal();
	}

	return {
		open : open,
		close: close
	};

});
define(["service", "dialog"], function (service, dialog){
	
	function open (config) {
		config.caller.onModalConfirm = onModalConfirm;
		dialog.open(config);
	}
	
	function onModalConfirm (config) {
		var obj = config.prepareObjToSave();
		var requestConfig = {
				url: config.restUrl,
				data: obj,
				id : config.id,
				success: function (){
					dialog.close();
				}
		};
		if (config.id)
			service.put(requestConfig);
		else 
			service.post(requestConfig);
	}
	
	return {
		open: open,
		onModalConfirm: onModalConfirm
	};
});
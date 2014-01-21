define([], function (){
	
	function loading (options) {
		
	}
	
	function modalLoading () {
		$("#testLoading").load("components/templates/DialogLoading.html", function () {
			$('#modalLoading').modal({
				keyboard: false,
				backdrop: "static"
			});
		});
	}
	
	
	function hideLoading () {
		
	}
	
	return {
		loading : loading,
		hideLoading : hideLoading
	};
});
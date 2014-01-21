define (["modules/accountManager/AccountForm", "modules/accountManager/AccountGrid"],
function (accountForm, accountGrid){
	function load () {
		$("#body").load("controllers/accountManager/templates/AccountManagerLayout.html", onFinishLoad);
	}
	
	function onFinishLoad () {
		accountGrid.create("gridContainer");
		accountGrid.loadData();
		bindEvents();
	}
	
	function bindEvents () {
		$("#btnNewAccount").click(openNewAccountModal);
	}
	
	function openNewAccountModal () {
		//accountForm.createNew (_this);
		$("#testLoading").load("components/templates/DialogLoading.html", function () {
			$('#modalLoading').modal({
				keyboard: false,
				backdrop: "static"
			})
		});

	}
	
	function afterCloseAccountModal () {
		accountGrid.loadData();
	}

	var _this = {
		load : load ,
		onCloseModal: afterCloseAccountModal
	};
	
	return _this;
});
define (["formDialog", "moment"], function (dialog, moment){
	
	function createNew (_caller) {
		var account = {};
		openDialog(_caller, account);
	}
	
	function edit (_caller, _account) {
		this.account = _account;
		openDialog(_caller, this.account);
	}
	
	function openDialog (_caller, account) {
		this.caller = _caller;
		_this.onCloseModal = _caller.onCloseModal;
		dialog.open({
			title : "Account",
			content: "modules/accountManager/template/AccountForm.html",
			restUrl: "accountManagement/account",
			id: account.id,
			prepareObjToSave: loadBeanFromForm,
			afterLoadContent : afterLoadContent,
			caller : _this
		});
	}
	
	function loadBeanFromForm () {
		var date = moment($("[name='account.registerDate']").val(), "DD/MM/YYYY").toDate();
		return {
			companyName: $("[name='account.companyName']").val(),
			registerDate: date,
			status : $("[name='account.status']").val()
		};
	}
	
	function afterLoadContent () {
		console.log("after load content");
		$("[name='account.registerDate']").datepicker({
			autoclose: true,
			format: "dd/mm/yyyy",
			language: 'pt-BR'
		});
		copyBeanToForm(this.caller.account);
	}
	
	function copyBeanToForm (account) {
		var date = moment(account.registerDate).format('L');
		$("[name='account.registerDate']").val(date);
		$("[name='account.companyName']").val(account.companyName);
		$("[name='account.status']").val(account.status);
	}

	var _this = {
		createNew : createNew,
		edit : edit,
	};
	
	return _this;
});
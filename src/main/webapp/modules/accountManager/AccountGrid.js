define (["grid", "service", "moment", "modules/accountManager/AccountForm"], 
function (grid, service, moment, accountForm){

	function create (placeAt) {
		grid.create ({
			idTable : "accountTable",
			placeAt: placeAt,
			columns : [{label:"Customer", width: 250, field : "companyName"}, 
			           {label: "Data de Cadastro", width: 200, field: "registerDate", customContent: registerDateFormater},
			           {label: "Status", width: 50, field: "status"},
			           {label: "Editar", 
			        	   width: 100, 
			        	   isButton: true, 
			        	   contentLabel: "Edit",
			        	   className : "btn-primary",
			        	   onClick: edit},
			           {label: "Remover", 
			        	   width: 100, 
			        	   isButton: true, 
			        	   contentLabel: "Remover", 
			        	   className : "btn-danger",
			        	   onClick: remove}
			        ]
		});
	}
	
	function remove (row) {
		service.remove({
			url: "accountManagement/account",
			id: row.id,
			success: loadData
		});
	}
	
	function edit (row) {
		accountForm.edit(_this, row);
	}
	
	function registerDateFormater (row) {
		return moment(row.registerDate).format('L');
	}
	
	function loadData () {
		service.get({
			url : "accountManagement/account/retrieveAccounts",
			success: onLoadSuccess
		});
	}
	
	function onLoadSuccess (data) {
		grid.fill(data);
	} 

	var _this = {
		create : create,
		loadData : loadData,
		onCloseModal : loadData
	};
	
	return _this;
});
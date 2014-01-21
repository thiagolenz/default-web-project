require.config({
	baseUrl: '.',
	paths: {
		bootstrap :  'scripts/bootstrap',
		datePicker : "scripts/bootstrap-datepicker",
		grid : "components/Grid",
		dialog : "components/Dialog",
		service : "components/Service",
		binding : "components/binding",
		formatter : "components/formatter",
		moment : "scripts/moment-with-langs",
		formDialog : "components/FormDialog",
	},
});


define(["controllers/accountManager/AccountManagerController", "moment", "bootstrap", "datePicker", ], function(account, moment) {
	require(["scripts/locales/bootstrap-datepicker.pt-BR"]);
	$(document).ready(function() {
		moment.lang("pt-br");
		account.load();
	}) ;
});
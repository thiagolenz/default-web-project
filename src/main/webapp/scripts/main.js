require.config({
	baseUrl: '.',
	paths: {
		bootstrap :  'scripts/bootstrap',
		datePicker : "scripts/bootstrap-datepicker",
		grid : "components/Grid",
		dialog : "components/Dialog",
		service : "components/Service",
	},
});


define(["controllers/example/AuthorController", "bootstrap", "datePicker"], function(author) {
	$(document).ready(function() {
		author.load()
	}) 
})
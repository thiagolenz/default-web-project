require.config({
	baseUrl: '.',
	paths: {
		loaderTmpl : 'scripts/jquery.loadTemplate-1.0.0',
		bootstrap :  'scripts/bootstrap',
		grid : "components/Grid",
		dialog : "components/Dialog"
	},
});


define(["loaderTmpl","controllers/example/AuthorController", "bootstrap"], function(loader, author) {
	$(document).ready(function() {
		author.load()
	}) 
})
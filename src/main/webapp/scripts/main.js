require.config({
	baseUrl: '.',
	paths: {
		loaderTmpl : 'scripts/jquery.loadTemplate-1.0.0',
	},
});


define(["loaderTmpl","modules/Author"], function(loader, author) {
	$(document).ready(function() {
		author.doTheThings()
	}) 
})
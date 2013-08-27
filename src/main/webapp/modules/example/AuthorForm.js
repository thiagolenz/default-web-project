define (["dialog"], function (dialog){
	function openDialog () {
		dialog.open({
			title : "Author ",
			content: "modules/example/template/AuthorForm.html"
		})
	}

	return {
		openDialog : openDialog
	}
})
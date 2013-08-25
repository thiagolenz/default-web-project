define (["modules/example/AuthorForm"],
function (authorForm){
	function load () {
		authorForm.doTheThings()
	}

	return {
		load : load
	}
})
define (["modules/example/AuthorForm", "modules/example/AuthorGrid"],
function (authorForm, authorGrid){
	function load () {
		$("#body").load("controllers/example/templates/AuthorControllerLayout.html", onFinishLoad)
	}
	
	function onFinishLoad () {
		authorGrid.create("gridContainer")
		authorGrid.loadData()
		bindEvents()
	}
	
	function bindEvents () {
		$("#btnOpenModal").click(openModal)
	}
	
	function openModal () {
		authorForm.openDialog ()
	}

	return {
		load : load
	}
})
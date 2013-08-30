define(function (){

	function post (req) {		
		req.type = "POST"
		doAjax(req)
	}

	function get (req) {
		req.type = "GET"
		doAjax(req)
	}

	function put (req) {
		req.type = "PUT"
		doAjax(req)
	}

	function del (req) {
		req.type = "DELETE"
		doAjax(req)
	}

	function doAjax (req) {
		$.ajax({
			url: "rest"+ req.url,
			type : req.type,
			data: req.data,
			dataType : "json",
			success : req.success,
			error : req.error
		})
	}

	return {
		post: post,
		get : get,
		put : put,
		del: del
	}
})
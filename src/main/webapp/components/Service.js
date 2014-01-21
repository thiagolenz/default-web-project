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
		req.type = "PUT";
		req.url = req.url + "/"+req.id
		doAjax(req)
	}

	function remove (req) {
		req.type = "DELETE";
		req.url = req.url + "/"+req.id
		doAjax(req)
	}

	function doAjax (req) {
		$.ajax({
			url: "rest/"+ req.url,
			type : req.type,
			data: req.type != "GET" && req.type != "DELETE" ? JSON.stringify(req.data) : null,
			dataType : "json"
		}).done(function(data){
			req.success(data);
		}).fail(function(data){
			console.log(data);
			req.error(data)
		});
	}

	return {
		post: post,
		get : get,
		put : put,
		remove: remove
	}
})
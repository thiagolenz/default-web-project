define (function (){
	function doTheThings () {
		var post = {
				author : 'Joe Bloggs',
				date : '25th May 2013'
		}
		$("#templateOutside").loadTemplate("simpleTemplate.html", post);

		var post2 = {
				author : 'Inside',
				date : '01/10/2012'
		}
		$("#templateInside").loadTemplate("#simpleTemplateInside", post2);

		// array is the same
		var posts = [post, post2]
		$("#templateInsideArray").loadTemplate("#simpleTemplateInside", posts);

	}

	return {
		doTheThings : doTheThings
	}
})
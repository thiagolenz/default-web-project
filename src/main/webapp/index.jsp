<html>
<head>
<script type="text/javascript" src="scripts/jquery-2.0.3.js"></script>
<script type="text/javascript"
	src="scripts/jquery.loadTemplate-1.0.0.js"></script>
</head>
<body>
<script type="text/html" id="simpleTemplateInside">
    <div class="post-container">
        <div data-content="author"></div>
        <div data-content="date"></div>
    </div>
</script>

	<script type="text/javascript">
		$(document).ready(function() {
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
		})
	</script>

	<div id="templateOutside"></div>
	<div id="templateInside"></div>
	
	<div id="templateInsideArray"></div>
	


</body>
</html>

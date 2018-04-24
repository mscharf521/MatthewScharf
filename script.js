$(document).ready(function() {

	$(".menu-but").each(function() {
		$(this).click(function() {
			$name = $(this).attr('id');

			console.log("clicked" + $name);

			$(".info-page").each(function() {
				if (($(this).attr('id') + "-but") != $name) {
					//hide these
					$(this).slideUp(500);
				} else {
					//show this one
					$(this).slideDown(500);
				}
			});
		});
	})

	
});
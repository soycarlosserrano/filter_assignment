$(document).ready(function () {

	var botones = new Array();

	$("button").each(function () {
		var f = $(this).data("filter");
		var b = $(this);
		if (f != "all") botones.push(b);
	});

	$(".filter").on("click", function (e) {
		e.preventDefault();

		var button = $(this);
		var filter = button.data("filter");

		button.toggleClass("big-btn");

		if (filter === "all") {
			if (button.hasClass("big-btn")) {
				$(".item").removeClass("active");

				for (i = 0; i < botones.length; i++) {
					botones[i].addClass('big-btn');
				}
			} else {
				$(".item").addClass("active");

				for (i = 0; i < botones.length; i++) {
					botones[i].removeClass('big-btn');
				}
			}
		} else {
			$(".item").removeClass("active");

			for (i = 0; i < botones.length; i++) {
				if (!botones[i].hasClass('big-btn')) {
					$("." + botones[i].data("filter")).addClass("active");
				}
			}
		}
	});

});

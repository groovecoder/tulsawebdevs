$(function() {
	$('.meeting-notes').each(function() {
		var meeting = $(this).text();
		$(this).html(marked(meeting));
	});
});
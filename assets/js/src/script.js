$(function() {
	// Initialize inline tooltips and popovers
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();

	// Initialize notification popover
	$.get('ajax-notifications.html', function(data) {
		$('#btn-notifications').click(function(e) {
			e.preventDefault();
		}).popover({
			content: data,
			html: true,
			placement: 'bottom',
			trigger: 'focus'
		});
	}, 'html');

	// Initialize profile banners
	$('.card-profile-banner, .profile-banner').each(function(i, el) {
		var $this = $(this);
		if($this.css('background-image') == 'none') {
			$this.geopattern($this.data('username'));
		}
	});
});

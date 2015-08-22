$(function() {
	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();
	$('.card-profile-banner, .profile-banner').each(function(i, el) {
		var $this = $(this);
		if(!$this.css('background-image')) {
			$this.geopattern($this.data('username'));
		}
	});
});

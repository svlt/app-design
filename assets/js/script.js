$(function() {
	$('.card-profile-banner, .profile-banner').each(function(i, el) {
		var $this = $(this);
		if(!$this.css('background-image')) {
			$this.geopattern($this.data('username'));
		}
	});
});

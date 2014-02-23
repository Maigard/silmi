var PersonRoute = Ember.Route.extend({
	slideOut: true,
	actions: {
		willTransition: function(transition) {
			if(this.get('slideOut')) {
				console.log("in panel close");
				var slidePanel = $('#slidePanel');
				var that = this;
				slidePanel.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function() {
					console.log("really closing panel");
					transition.retry();
				});
				slidePanel.removeClass('slidein');
				slidePanel.addClass('slideout');
				this.set('slideOut', false);
				transition.abort();
			}
		}
	}
});

export default PersonRoute;

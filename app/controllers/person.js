var PersonController = Ember.ObjectController.extend({
	isEditable: false,
	actions: {
		edit: function (field) {
			this.set('isEditable', true);
		},
		cancel: function (field) {
			this.set('isEditable', false);
		},
		done: function (field) {
			this.set('isEditable', false);
			this.get('model').save();
		}
	}
});

export default PersonController;

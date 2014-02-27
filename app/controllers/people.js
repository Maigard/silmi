var PeopleController = Ember.ArrayController.extend({
	init: function () {
		this.set('sortProperties', ['firstName']);
		this.set('sortAscending', true);
	},
	actions: {
		sort: function (field, asc) {
			this.set('sortAscending', asc);
			this.set('sortProperties', [field]);
		}
	}
});

export default PeopleController;

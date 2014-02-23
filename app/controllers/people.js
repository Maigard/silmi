var PeopleController = Ember.ArrayController.extend({
	init: function () {
		this.set('sortProperties', ['firstName']);
		this.set('sortAscending', true);
	},
	actions: {
		sort: function (field) {
			console.log("sorting by", field);
			console.log(this.get('sortProperties'), this.get('sortAscending'));
			if(this.get('sortProperties')[0] === field)
				this.toggleProperty('sortAscending');
			this.set('sortProperties', [field]);
		}
	}
});

export default PeopleController;

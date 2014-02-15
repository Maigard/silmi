var PeopleRoute = Ember.Route.extend({
	model: function () {
		return this.get('store').findAll('person');
	}
});

export default PeopleRoute;

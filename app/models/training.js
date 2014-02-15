var Training = DS.Model.extend({
	name: DS.attr('string'), 
	notes: DS.attr('string'), 
	date: DS.attr('date'),
	people: DS.hasMany('person'),
});

export default Training;

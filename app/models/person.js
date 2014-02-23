var Person = DS.Model.extend({
	password: DS.attr('string'),
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	companyName: DS.attr('string'),
	address: DS.attr('string'),
	city: DS.attr('string'),
	state: DS.attr('string'),
	phone: DS.attr('string'),
	mobile: DS.attr('string'),
	fax: DS.attr('string'),
	email: DS.attr('string'),
	notes: DS.attr('string'),
	event_attendance: DS.hasMany('event_attendance'), 
	dvsContact: DS.belongsTo('person'),
	group: DS.hasMany('group'), 

	fullName: function () {
		return "%@ %@".fmt(this.get('firstName'), this.get('lastName'));
	}.property('firstName', 'lastName'),

	label: function () {
		if(this.get('companyName'))
			return this.get('companyName');
		else
			return this.get('fullName');
	}.property('companyName', 'fullName')
});

export default Person;

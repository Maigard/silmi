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
		if(this.get('companyName') === undefined)
			return this.get('fullName');
		else
			return this.get('companyName');
	}.property('companyName', 'fullName')
});

Person.FIXTURES = [{
	id: 1,
	firstName: 'Cersei',
	lastName: 'Lannister',
	companyName: 'Westerlands',
	address: 'Red Keep',
	city: "King's Landing",
	state: 'Crownlands',
	phone: '555-1212',
	mobile: '555-1212',
	fax: '555-1212',
	email: 'cersei@lannister.com',
	notes: 'Queen Regent'
},
{
	id: 2,
	firstName: 'Jaime',
	lastName: 'Lannister',
	companyName: 'Westerlands',
	address: 'Red Keep',
	city: "King's Landing",
	state: 'Crownlands',
	mobile: '555-1212',
	fax: '555-1212',
	email: 'jaime@lannister.com',
	notes: 'Father of the King (confidential)'
},
{
	id: 3,
	firstName: 'Jon',
	lastName: 'Snow',
	address: 'Castle Black',
	city: 'The Wall',
	state: 'North',
	home: '555-1212',
	email: 'jon@nightswatch.org',
}];

export default Person;

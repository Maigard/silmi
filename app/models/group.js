var Group = DS.Model.extend({
	users: DS.hasMany('person'), 
	admin: DS.attr('boolean'), 
	canLogin: DS.attr('boolean'), 
	canEditUsers: DS.attr('boolean')
});

export default Group;

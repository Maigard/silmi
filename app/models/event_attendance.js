var Event_attendance = DS.Model.extend({
	donors: DS.belongsTo('person'),
	event: DS.belongsTo('event'),
	contact: DS.belongsTo('person'),
	dateContacted: DS.attr('date'), 
});

export default Event_attendance;

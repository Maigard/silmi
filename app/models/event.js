var Event = DS.Model.extend({
	event: DS.attr('string'),
	type: DS.attr('string'),
	date: DS.attr('date'),
	notes: DS.attr('string'),
	eventAttendance: DS.hasMany('event_attendance'),

	amountPaid: function () {
		return this.get('activity').reduce(function (total, item) {
			return total + item.get('amountPaid');
		});
	}.property('activity.@each.amountPaid'),

	amountDue: function () {
		return this.get('activity').reduce(function (total, item) {
			return total + item.get('amountDue');
		});
	}.property('activity.@each.amountDue')
});

export default Event;

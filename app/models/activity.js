var Activity = DS.Model.extend({
	donor: DS.attr('donor'),
	item: DS.attr('donationItem'),
	event: DS.attr('event'),
	date: DS.attr('date'),
	quantity: DS.attr('number'),
	value: DS.attr('number'),
	amountPaid: DS.attr('number'),
	note: DS.attr('string'),
	thankYouSent: DS.attr('boolean'),
	thankYouSender: DS.belongsTo('person'),
	verified: DS.attr('boolean'),

	amountDue: function () {
		return this.get('value') - this.get('amountPaid');
	}.property('value', 'amountPaid')
});

export default Activity;

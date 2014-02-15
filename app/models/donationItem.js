var DonationItem = DS.Model.extend({
	item: DS.attr('string'),
	value: DS.attr('number'),
	inKind: DS.attr('boolean'),
});

export default DonationItem;

var SortHeaderView = Ember.View.extend({
	tagName: 'th',
	classNameBindings: ['asc', 'desc', 'sorted'],
	classNames: ['sortable'],
	attributeBindings: ['style'],
	style: "cursor: pointer",
	asc: false,
	desc: false,
	sorted: false,
	sortField: "",
	init: function() {
		var headerList = this.get('controller.sortHeaderList');
		if(headerList === undefined) {
			headerList = [];
			this.set('controller.sortHeaderList', headerList);
		}
		headerList.pushObject(this);
		this._super();
	},
	click: function(){
		if(this.get('sorted') === true) {
			this.toggleProperty('asc');
			this.toggleProperty('desc');
		} else {
			var headerList = this.get('controller.sortHeaderList');
			headerList.setEach('asc', false);
			headerList.setEach('desc', false);
			headerList.setEach('sorted', false);
			this.set('asc', true);
			this.set('desc', false);
			this.set('sorted', true);
		}
		this.get('controller').send('sort', this.get('sortField'), this.get('asc'));
	}
});

export default SortHeaderView;

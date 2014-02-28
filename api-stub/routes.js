module.exports = function(server) {

  // Create an API namespace, so that the root does not 
  // have to be repeated for each end point.
	server.namespace('/api', function() {
		var people = [{
			id: 0,
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
			id: 1,
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
			id: 2,
			firstName: 'Jon',
			lastName: 'Snow',
			address: 'Castle Black',
			city: 'The Wall',
			state: 'North',
			home: '555-1212',
			email: 'jon@nightswatch.org',
		},
		{
			id: 3,
			firstName: 'Arya',
			lastName: 'Stark',
			companyName: 'The North',
			address: 'House Stark',
			city: "Winterfell",
			state: 'The North',
			phone: '555-1212',
			mobile: '555-1212',
			fax: '555-1212',
			email: 'arya@stark.com',
			notes: 'Valar Morghulis'
		}];

		server.get('/people', function(req, res) {
			return res.send({people: people});
		});
		server.post('/people', function(req, res) {
			return people.push(req.body);
		});
		server.get('/people/:id', function(req, res) {
			return res.send({person: people[req.params.id]});
		});
		server.put('/people/:id', function(req, res) {
			var person = people[parseInt(req.params.id)];
			for(attr in person) {
				if(req.body.person.hasOwnProperty(attr)) {
					person[attr] = req.body.person[attr];
				}
			}
			console.log(people);
			return true;
		});
	});

};
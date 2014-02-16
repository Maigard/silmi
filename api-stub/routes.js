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
		}];

		server.get('/people', function(req, res) {
			res.send({people: people});
		});
		server.get('/people/:id', function(req, res) {
			res.send({person: people[req.params.id]});
		})
		// Return fixture data for '/api/posts/:id'
		server.get('/posts/:id', function(req, res) {
			var post = {
					  "post": {
					    "id": 1,
					    "title": "Rails is omakase",
					    "comments": ["1", "2"],
					    "user" : "dhh"
					  },

					  "comments": [{
					    "id": "1",
					    "body": "Rails is unagi"
					  }, {
					    "id": "2",
					    "body": "Omakase O_o"
					  }]
					};

			res.send(post);
		});

	});

};
var Model = Stapes.subclass({
	constructor: function () {
		// alert("Hi, Now I'm in Model!");
	},
	getCandidates : function  (page) {
		$.mockjax({
			url: "/some/random/address",
			proxy: '/js/data.json',
			responseTime: 200
		});
		return $.ajax({
			url : "/some/random/address",
			type : 'GET'
		});
	},
	getPageMeta : function () {
		$.mockjax({
			url : "/some/address/to/meta",
			responseTime: 300,
			responseText: {
				totalResults : 57
			}
		});

		return $.ajax({
			url : "/some/address/to/meta",
			type : 'GET'
		});
	}
});
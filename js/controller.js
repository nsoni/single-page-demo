var Controller = Stapes.subclass({
	constructor: function () {
		this.model = new Model();
		this.view = new View();
		this.bindEvents();
		this.view.renderStaticPart();
	},
	/*getMoreData : function (page) {
		var getData = this.model.getData(page);

		$.when(getData).done(function (moreData) {
			var moreData = JSON.parse(moreData);
			return moreData;
		});
	},*/
	bindEvents : function () {
		var that = this;
		this.view.on({
			'getCandidates' : function  (callback) {
				var getCandidatesData = that.model.getCandidates();

				$.when(getCandidatesData).done(function (candidates) {
					var previousData = that.view.get('candidates') || [];
					var previousPage = that.view.get('currentPage');

					candidates = JSON.parse(candidates);
					previousData = previousData.concat(candidates);
					that.view.set({
						'candidates' : previousData,
						'currentPage' : ++previousPage
					});
					callback.apply(that.view, [candidates]);
				});
			},
			'getPageMeta' : function (callback) {
				var getPageMetaData = that.model.getPageMeta();

				$.when(getPageMetaData).done(function (response) {
					var data = (response.totalResults % 10) > 0 ? ((response.totalResults/10)+1) : response.totalResults/10;

					that.view.set('totalPages', data);
					response['pages'] = parseInt(data);

					callback.apply(that.view, [response]);
				});
			}
		});
	}
});
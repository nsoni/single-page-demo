var View = Stapes.subclass({
	constructor: function () {
		this.setupViewData();
		this.setupHandlebars();
	},
	setupViewData : function () {
		this.set({
			candidates : [],
			currentPage : 0,
			waitingForData : false,
			totalPages : 0,
		});
	},
	renderTpl : function(tplName,viewData,el,append){
		var tpl = window.templates[tplName] || window.partials[tplName];
		var targetEl = el ? $(el) : $("#main");
		if(tpl && targetEl){
			if(append){
				targetEl.append(tpl({viewData:viewData}));
			}else{
				targetEl.html("").html(tpl({viewData:viewData}));
			}
		}
	},
	setupHandlebars : function () {
		Handlebars.partials = window.partials;
		Handlebars.registerHelper('joinArray', function(dataArray, options) {
			return dataArray.join(", ");
		});
		Handlebars.registerHelper('getInitials', function (data, options) {
			return data[0];
		});
		Handlebars.registerHelper('basicFor', function(n, block) {
			var accum = '';
			for(var i = 1; i <= n; ++i)
				accum += block.fn(i);
			return accum;
		});
		Handlebars.registerHelper("subtract", function(lvalue, rvalue) {
			lvalue = parseInt(lvalue);
			rvalue = parseInt(rvalue);
			return lvalue - rvalue;
		});
		Handlebars.registerHelper('lteq', function(v1, v2, options) {
			if(v1 <= v2) {
				return options.fn(this);
			}
			return options.inverse(this);
		});
		Handlebars.registerHelper('mul', function (lvalue, rvalue, options) {
			return lvalue*rvalue;
		})
	},
	renderStaticPart : function(){
		this.emit('getPageMeta', callback);

		function callback (dataObj) {
			this.renderTpl('body', dataObj);
			this.renderCandidates(1);
			this.makePageActive(this.get(1));
		}
	},
	renderCandidates : function (number) {
		this.emit('getCandidates', callback);
		function callback(data) {
			this.renderTpl('candidateunit', data, '.people-info-container', true);
			if(number === 1){
				this.bindEvents();
			}
			this.set('waitingForData', false);
			this.makePageActive(this.get('currentPage'));
		}
	},
	bindEvents : function  () {
		var windowHeight = $(window).height();
		var that = this;

		$(window).off('scroll').on('scroll',function () {
			var documentHeight = $(document).height();
			var scrollTop = $(this).scrollTop();
			var totalPages = that.get('totalPages');
			var currentPage = that.get('currentPage');

			if(($(window).scrollTop() + $(window).height()) > ($('.contect-wrp').outerHeight() -164) && !that.get('waitingForData') && totalPages >= currentPage){
				that.set('waitingForData', true);
				that.renderCandidates(2)
			}
		});
		$('li.page').off('click').on('click', function  () {
			that.makePageActive(+$(this).html());
		});
		$(".filter").off('propertychange keyup paste').on('propertychange keyup paste', function () {
			var filterOn = $(this).data('filter');
			if($(this).val()){
				$('.people-info-wrp').children("."+filterOn+":not(:Contains(" + $(this).val() + "))").parent().slideUp();
				$('.people-info-wrp').children("."+filterOn+":Contains(" + $(this).val() + ")").parent().slideDown();
			}else{
				$('.people-info-wrp').slideDown();	
			}
		});
		$.expr[':'].Contains = function(a,i,m){
	    	return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
		};
		slider();
	},
	makePageActive : function  (page) {
		$('.pagging-wrp li.page').eq(--page).addClass('active').siblings().removeClass('active');
	}
});
this.templates=this.templates||{},this.templates.body=Handlebars.template({1:function(l,a,s,i){return'<li class="left page">'+this.escapeExpression(this.lambda(l,l))+"</li> "},compiler:[6,">= 2.0.0-beta.1"],main:function(l,a,s,i){var e;return(null!=(e=this.invokePartial(s.header,l,{name:"header",data:i,helpers:a,partials:s}))?e:"")+'<section class="full-width contect-wrp"><div class="full-width actions-container"><div class="full-width filter-bar white-back"><ul class="filter-wrp full-width"><li class="left"><div class="full-width relative"> <input type="text" placeholder="All Location" class="full-width filter location-filter" data-filter="location"><span class="icon-wrp"><i class="fa fa-map-marker"></i></span></div></li><li class="left"><div class="full-width relative"> <input type="text" placeholder="All Industries" class="full-width filter industry-filter" data-filter="industry"><span class="icon-wrp"><i class="fa fa-pie-chart"></i></span></div></li><li class="left"> <span class="left">Experience</span><span class="right age-slider"><div class="full-width slider-container"> <span class="left min-age-text">0 years</span> <span class="right max-age-text" >37 years</span><div class="slider_wrap"><div class="show"></div><div class="back_line"></div><span class="item min-range"></span><span class="item max-range"></span></div></div></span></li><li class="left"><div class="full-width relative"> <span class="left advance-filter">Advanced</span><span class="right icon-wrp advance-filter-search"><i class="fa fa-search"></i></span></div></li></ul></div><div class="full-width page-info-bar white-back"><div class="left"><span class="left green-back white-font profile-font-icon">PM</span><span class="left user-type">Product Manager</span></div><div class="right"><ul class="full-width pagging-wrp"><li class="left green-font">First</li><li class="left">&lt;&lt;</li> '+(null!=(e=(a.basicFor||l&&l.basicFor||a.helperMissing).call(l,null!=(e=null!=l?l.viewData:l)?e.pages:e,{name:"basicFor",hash:{},fn:this.program(1,i,0),inverse:this.noop,data:i}))?e:"")+'<li class="left">&gt;&gt;</li><li class="left">Last</li></ul></div><div class="center-block center-text pagecount-info-wrp">showing 1-10 out of '+this.escapeExpression(this.lambda(null!=(e=null!=l?l.viewData:l)?e.totalResults:e,l))+' search result</div></div></div><ul class="full-width people-info-container"></ul></section>'},usePartial:!0,useData:!0});
this.templates=this.templates||{},this.templates.candidateunit=Handlebars.template({1:function(l,a,n,i,t,e){var s,r,o=this.lambda,c=this.escapeExpression,u=a.helperMissing,p="function";return'<li class="people-info-wrp full-width white-back" data-location="'+c(o(null!=(s=null!=l?l.location:l)?s.city:s,l))+", "+c(o(null!=(s=null!=l?l.location:l)?s.state:s,l))+", "+c(o(null!=(s=null!=l?l.location:l)?s.country:s,l))+'" data-industry="'+c((a.joinArray||l&&l.joinArray||u).call(l,null!=l?l.previous_company:l,{name:"joinArray",hash:{},data:i}))+", "+c((r=null!=(r=a.current_company||(null!=l?l.current_company:l))?r:u,typeof r===p?r.call(l,{name:"current_company",hash:{},data:i}):r))+'"><div class="meta hidden location"> '+c(o(null!=(s=null!=l?l.location:l)?s.city:s,l))+", "+c(o(null!=(s=null!=l?l.location:l)?s.state:s,l))+", "+c(o(null!=(s=null!=l?l.location:l)?s.country:s,l))+'</div><div class="meta hidden industry"> '+c((a.joinArray||l&&l.joinArray||u).call(l,null!=l?l.previous_company:l,{name:"joinArray",hash:{},data:i}))+", "+c((r=null!=(r=a.current_company||(null!=l?l.current_company:l))?r:u,typeof r===p?r.call(l,{name:"current_company",hash:{},data:i}):r))+'</div><div class="left profile-img-wrp green-back"> '+c((a.getInitials||l&&l.getInitials||u).call(l,null!=l?l.name:l,{name:"getInitials",hash:{},data:i}))+'</div><div class="profile-detaile-wrp left"><h2 class="full-width name green-font">'+c((r=null!=(r=a.name||(null!=l?l.name:l))?r:u,typeof r===p?r.call(l,{name:"name",hash:{},data:i}):r))+'</h2><h2 class="full-width designation"> '+c((a.joinArray||l&&l.joinArray||u).call(l,null!=l?l.designation:l,{name:"joinArray",hash:{},data:i}))+" at "+c((r=null!=(r=a.current_company||(null!=l?l.current_company:l))?r:u,typeof r===p?r.call(l,{name:"current_company",hash:{},data:i}):r))+'</h2><p class="full-width location relative"><span class="left icon-wrp"><i class="fa fa-map-marker"></i></span> '+c(o(null!=(s=null!=l?l.location:l)?s.city:s,l))+", "+c(o(null!=(s=null!=l?l.location:l)?s.state:s,l))+", "+c(o(null!=(s=null!=l?l.location:l)?s.country:s,l))+'</p><p class="full-width work-experience relative"><span class="left icon-wrp"><i class="fa fa-briefcase"></i></span> Worked at - '+c((a.joinArray||l&&l.joinArray||u).call(l,null!=l?l.previous_company:l,{name:"joinArray",hash:{},data:i}))+'</p><div class="will-move"><p>more likely to move: <span>'+c((a.mul||l&&l.mul||u).call(l,null!=l?l.willingToMove:l,10,{name:"mul",hash:{},data:i}))+'%</span></p><div class="meter"><div class="filler" style="width:'+c((a.mul||l&&l.mul||u).call(l,null!=l?l.willingToMove:l,10,{name:"mul",hash:{},data:i}))+'%"></div></div></div></div><div class="right profile-rating-wrp"><div class="full-width"> <span class="full-width">MORE LIKELY TO MOVE</span><ul class="full-width"> '+(null!=(s=(a.basicFor||l&&l.basicFor||u).call(l,10,{name:"basicFor",hash:{},fn:this.program(2,i,0,t,e),inverse:this.noop,data:i}))?s:"")+"</ul></div></div></li> "},2:function(l,a,n,i,t,e){var s;return" "+(null!=(s=(a.lteq||l&&l.lteq||a.helperMissing).call(l,l,null!=e[1]?e[1].willingToMove:e[1],{name:"lteq",hash:{},fn:this.program(3,i,0,t,e),inverse:this.program(5,i,0,t,e),data:i}))?s:"")+" "},3:function(l,a,n,i){return'<li class="progress left active"></li> '},5:function(l,a,n,i){return'<li class="progress left"></li> '},compiler:[6,">= 2.0.0-beta.1"],main:function(l,a,n,i,t,e){var s;return null!=(s=a.each.call(l,null!=l?l.viewData:l,{name:"each",hash:{},fn:this.program(1,i,0,t,e),inverse:this.noop,data:i}))?s:""},useData:!0,useDepths:!0});
{{>header}}
		
<section class="full-width contect-wrp">
<!-- filter elements -->
	<div class="full-width actions-container">
		<div class="full-width filter-bar white-back">
			<ul class="filter-wrp full-width">
				<li class="left">
					<div class="full-width relative">
						<input type="text" placeholder="All Location" class="full-width filter location-filter" data-filter="location">
						<span class="icon-wrp"><i class="fa fa-map-marker"></i></span>
					</div>
				</li>
				<li class="left">
					<div class="full-width relative">
						<input type="text" placeholder="All Industries" class="full-width filter industry-filter" data-filter="industry">
						<span class="icon-wrp"><i class="fa fa-pie-chart"></i></span> 
					</div>
				</li>
				<li class="left">
					<span class="left">Experience</span> 
					<span class="right age-slider">
						<div class="full-width slider-container">
							<span class="left min-age-text">0 years</span>
							<span class="right max-age-text" >37 years</span>
							<div class="slider_wrap">
								<!-- <span class="text ">0 </span> -->
							    <div class="show"></div>
							    <div class="back_line"></div>
							    <span class="item min-range"></span>
							    <span class="item max-range"></span>
								
							</div>
							<!-- <div class="full-width slider-value-container">
							</div> -->
						</div>
					</span>
				</li>
				<li class="left">
					<div class="full-width relative">
						<span class="left advance-filter">Advanced</span>
						<span class="right icon-wrp advance-filter-search"><i class="fa fa-search"></i></span>
					</div>
				</li>
			</ul>
		</div>

	<!-- page info bar -->

		<div class="full-width page-info-bar white-back">
			<div class="left"><span class="left green-back white-font profile-font-icon">PM</span><span class="left user-type">Product Manager</span></div>
			<div class="right">
				<ul class="full-width pagging-wrp">
					<li class="left green-font">First</li>
					<li class="left">&lt;&lt;</li>
					{{#basicFor this.viewData.pages}}
						<li class="left page">{{this}}</li>
					{{/basicFor}}
					<li class="left">&gt;&gt;</li>
					<li class="left">Last</li>
				</ul>
			</div>
			<div class="center-block center-text pagecount-info-wrp">showing 1-10 out of {{this.viewData.totalResults}} search result</div>
		</div>
	</div>

	<ul class="full-width people-info-container">
		<!-- Append Candidates Here -->
	</ul>
</section>
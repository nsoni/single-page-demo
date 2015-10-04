{{#each viewData}}
	<li class="people-info-wrp full-width white-back" data-location="{{location.city}}, {{location.state}}, {{location.country}}" data-industry="{{joinArray previous_company}}, {{current_company}}">
		<div class="meta hidden location">
			{{location.city}}, {{location.state}}, {{location.country}}
		</div>
		<div class="meta hidden industry">
			{{joinArray previous_company}}, {{current_company}}
		</div>
		<div class="left profile-img-wrp green-back">
			{{getInitials name}}
		</div>
		<div class="profile-detaile-wrp left">
			<h2 class="full-width name green-font">{{name}}</h2>
			<h2 class="full-width designation">
				{{joinArray designation}} at {{current_company}}
			</h2>
			<p class="full-width location relative"><span class="left icon-wrp"><i class="fa fa-map-marker"></i></span> {{location.city}}, {{location.state}}, {{location.country}}</p>
			<p class="full-width work-experience relative"><span class="left icon-wrp"><i class="fa fa-briefcase"></i> </span>
				Worked at - {{joinArray previous_company}}
			</p>
			<div class="will-move">
				<p>more likely to move: <span>{{mul willingToMove 10}}%</span></p>
				<div class="meter">
					<div class="filler" style="width:{{mul willingToMove 10}}%"></div>
				</div>
			</div>
		</div>
		<div class="right profile-rating-wrp">
			<div class="full-width">
				<span class="full-width">MORE LIKELY TO MOVE</span>
				<ul class="full-width">
					{{#basicFor 10}}
						{{#lteq this ../willingToMove }}
							<li class="progress left active"></li>
						{{else}}
							<li class="progress left"></li>
						{{/lteq}}
					{{/basicFor}}
				</ul>
			</div>
		</div>
	</li>
{{/each}}
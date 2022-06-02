<script context="module">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<div class="uk-child-width-1-1@s uk-grid-collapse uk-text-left" uk-grid>
	<div>
		<div class="uk-tile">
		</div>
	</div>
</div>

<div class="uk-section uk-section-small" style = "background-color:#0076b6;">
	<div class="uk-grid-collapse uk-child-width-expand@s uk-text-center" uk-grid>

<!-- <div class="uk-card uk-card-body uk-align-center uk-text-justify">-->

			<div>
            <h3 class="uk-card-title uk-light">Collect data</h3>
            <p class ="uk-light uk-text-justify uk-margin-small-left uk-padding-small-left" style = "font-family:Helvetica; font-weight:100;">
				Data is often expensive, heterogeneous and incomplete.
				Our method collects freely available data (e.g. OpenStreetMaps) and validates it
				through traditional spatial statistics, in order to achieve a transparent and clear
				dataset building the right foundations to create data.
            </p>
			</div>

			<div>
				<h3 class="uk-card-title uk-light">Clean and parse</h3>
				<p class ="uk-light uk-text-justify uk-margin-medium-left" style = "font-family:Helvetica; font-weight:100;">
				Cleaning heterogeneous, complex, and incomplete datasets, is often expensive
				both for the time needed to process the data, as for the data storage infrastructure required 
				to be in place. We use easy to implement and to manage solutions (e.g ElasticSearch)
				which assure scalability and increase the readability of your data.
				</p>
			</div>
			
			<div>
				<h3 class="uk-card-title uk-light">Visualize</h3>
				<p class ="uk-light uk-text-justify uk-margin-medium-left uk-margin-small-right uk-padding-small-right" style = "font-family:Helvetica; font-weight:100;">
					Following your experience in neurosciences, user experience, design, research and product design,
					we design dynamic, ready to use, data visualisations, allowing a better understanding of your
					data.
				</p>
			</div>

   </div>


</div>


<div class="uk-flex uk-flex-column uk-width-1-2 uk-flex-center">
		<div class="uk-card uk-card-body">
            <h3 class="uk-card-title">Case Study</h3>
            <p class ="uk-text-justify uk-margin-medium-left uk-margin-medium-right uk-padding-medium" style = "font-family:Helvetica; font-weight:100;">
            </p>
		</div>
		<div class="uk-card uk-card-body">
			<button class="uk-button uk-button-default uk-margin-bottom" type="button" uk-toggle="target: +">Show StationsRadar Video</button>
			<iframe uk-responsive uk-video hidden width="800" height="600" src="https://www.youtube.com/embed/rYEhQhu5mjQ?autoplay=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;playsinline=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
	</div>




<div class="uk-section uk-section-small" style = "background-color:#0076b6;">
	<div class="uk-grid-collapse uk-child-width-expand@s uk-text-center" uk-grid>
		<div>
            <h3 class="uk-card-title uk-light">ReUSe</h3>
            <p class ="uk-light uk-text-justify uk-margin-medium-left uk-margin-medium-right uk-padding-medium" style = "font-family:Helvetica; font-weight:100;">
				ReUSe stands for, Readable Usable Science. We believe that most methodologies nowadays such as complex, blackbox,
				AI methods, do not allow an easy understanding of your data, making science and data communication difficult to non technical audiences.
				At ReUSe labs, we go further than data cleaning. We build usable data structures, while giving you complete control of data.
            </p>
			</div>
	</div>
</div>





<style>
</style>
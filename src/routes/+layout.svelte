<script>
	import { page } from '$app/stores';
	import NavbarHome from '/src/lib/navbar_home/navbar_home.svelte';
	//import Navbar from '/src/lib/navbar/navbar.svelte';
	//import NavbarMap from '/src/lib/navbar_map/navbar_map.svelte';
	import '../app.css';
	import '@fontsource/roboto';
	import logoUgent from '/static/pictures/logo_ugent.png'

</script>

{#if $page.url.pathname === '/'}
<NavbarHome />
{/if}




<main>
	<slot />
</main>

<footer>
	<div class="uk-child-width-1-3@m uk-text-center uk-flex-middle uk-grid-small uk-margin-remove uk-padding-remove" uk-grid>
		
		<div>
			<span class ="uk-align-left" style = "display: inline; text-decoration:none; font-size:14px; font-family:Helvetica; font-weight:100;">
				Designed and developed by <b>Filipe Teixeira</b> &nbsp; </span>
		</div>

		<div class= "uk-margin-small uk-padding-small">
			<!--<p class= "uk-margin-small uk-padding-remove" style = "display: block; text-decoration:none; font-size:12px; font-family:Helvetica; font-weight:100;">Follow me</p>-->
			<a href="https://github.com/FilipeamTeixeira" target="_blank">
				<span uk-icon="icon: github; ratio: 1.2" class = "uk-icon-link"></span>
			</a>
			<span>&nbsp;</span>
				<a href="https://twitter.com/filipeabroad" target="_blank">
					<span uk-icon="icon: twitter; ratio: 1.2" class = "uk-icon-link"></span>
			</a>
		</div>
	</div>

</footer>



<div id="offcanvas" uk-offcanvas="mode: push; overlay: true">
    <div class="uk-offcanvas-bar">
        <div class="uk-panel">
            <ul class="uk-nav uk-nav-default tm-nav">
                <!-- <li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
                <li class:active={$page.url.pathname === '/stories'}><a sveltekit:prefetch href="/stories">Community stories</a></li>
                <li class:active={$page.url.pathname === '/faqs'}><a sveltekit:prefetch href="/faqs">FAQ</a></li>
                <li class:active={$page.url.pathname === '/about_us'}><a sveltekit:prefetch href="/about_us">About Us</a></li>-->
             </ul>
        </div>
    </div>
</div>


<style>

	main {
		font-family: 'Roboto';
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 0;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
		background: #f5f5f5;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: right;
		align-items: middle;
		background: #f5f5f5;
		height: auto;
	}

	a{
		color: #1e87f0;
	}

	a:hover { 
  		color:tomato;
	}
/*	footer a {
		font-weight: bold;
	}
*/

	@media (min-width: 480px) {
		footer {
			padding: 0px 0;
		}
	}

</style>

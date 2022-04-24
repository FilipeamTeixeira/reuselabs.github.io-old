<script>
    	import { page } from '$app/stores';
        import { base } from '$app/paths'
        import airplane from '/static/pictures/background.png';
</script>

<div class="uk-position-relative" style = "height: 80vh;"> <!--added new height-->
    <img src={airplane} alt="">
    <div class="uk-position-top">

        <nav class="uk-navbar uk-navbar-transparent">
            <div class="uk-navbar-center">
                <div class = "uk-navbar-item"> 
                <span style = "font-size:20px; font-weight:300;"> ReUSe </span>
                <span style = "font-size:20px; font-weight:100;">Labs</span>
                </div>   
            </div>

            <div class="uk-navbar-left">
                <ul class="uk-navbar-nav uk-visible@m">
                    <!-- <li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="/">Home</a></li>
                    <li class:active={$page.url.pathname === '/stories'}><a sveltekit:prefetch href="/stories">Community stories</a></li>
                    -->
                </ul>

                <div class="uk-navbar-item uk-visible@m">
                </div>
            </div>

            <div class="uk-navbar-right">
                <ul class="uk-navbar-nav uk-visible@m">
                    <!-- <li class:active={$page.url.pathname === '/faqs'}><a sveltekit:prefetch href="/faqs">FAQ</a></li>
                    <li class:active={$page.url.pathname === '/about_us'}><a sveltekit:prefetch href="/about_us">About Us</a></li>
                    -->
                </ul>
                <!-- svelte-ignore a11y-missing-content -->
                <a class="uk-navbar-toggle uk-hidden@m" href="#offcanvas" uk-toggle style = "font-size:25px; font-weight:300;">≡</a>
            </div>
        </nav>


        


</div>
</div>



<style>

.uk-navbar-nav > li > a {
    color:rgb(79, 79, 79);
}

.uk-navbar-nav > li:hover > a,
.uk-navbar-nav > li > a:focus,
.uk-navbar-nav > li.uk-open > a {
    color: #005599;
}

span{
    display: inline-block;
    margin-right: -3px;
}

.quote{
    font-weight: 100;
    font-family: 'Helvetica';
    font-size:medium;
    color:#8a8a8a;
}

</style>
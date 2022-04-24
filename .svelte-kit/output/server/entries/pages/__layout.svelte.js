import { g as getContext, c as create_ssr_component, a as add_attribute, b as subscribe, v as validate_component } from "../../chunks/index-ca108623.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var airplane = "/reuselabs/reuselabs.github.io/internal/assets/background-ce6d75b2.png";
var navbar_home_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "span.svelte-1l7wntg{display:inline-block;margin-right:-3px}",
  map: null
};
const Navbar_home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"uk-position-relative"}" style="${"height: 80vh;"}">
    <img${add_attribute("src", airplane, 0)} alt="${""}">
    <div class="${"uk-position-top"}"><nav class="${"uk-navbar uk-navbar-transparent"}"><div class="${"uk-navbar-center"}"><div class="${"uk-navbar-item"}"><span style="${"font-size:20px; font-weight:300;"}" class="${"svelte-1l7wntg"}">ReUSe </span>
                <span style="${"font-size:20px; font-weight:100;"}" class="${"svelte-1l7wntg"}">Labs</span></div></div>

            <div class="${"uk-navbar-left"}"><ul class="${"uk-navbar-nav uk-visible@m"}"></ul>

                <div class="${"uk-navbar-item uk-visible@m"}"></div></div>

            <div class="${"uk-navbar-right"}"><ul class="${"uk-navbar-nav uk-visible@m"}"></ul>
                
                <a class="${"uk-navbar-toggle uk-hidden@m"}" href="${"#offcanvas"}" uk-toggle style="${"font-size:25px; font-weight:300;"}">\u2261</a></div></nav></div>
</div>`;
});
var app = "";
var index = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-8c0ziu{font-family:'Roboto';flex:1;display:flex;flex-direction:column;padding:0;width:100%;margin:0 auto;box-sizing:border-box;background:#f5f5f5}footer.svelte-8c0ziu{display:flex;flex-direction:column;justify-content:right;align-items:middle;background:#f5f5f5;height:auto}a.svelte-8c0ziu{color:#1e87f0}a.svelte-8c0ziu:hover{color:tomato}@media(min-width: 480px){footer.svelte-8c0ziu{padding:0px 0}}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${$page.url.pathname === "/" ? `${validate_component(Navbar_home, "NavbarHome").$$render($$result, {}, {}, {})}` : ``}




<main class="${"svelte-8c0ziu"}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${"svelte-8c0ziu"}"><div class="${"uk-child-width-1-3@m uk-text-center uk-flex-middle uk-grid-small uk-margin-remove uk-padding-remove"}" uk-grid><div><span class="${"uk-align-left"}" style="${"display: inline; text-decoration:none; font-size:14px; font-family:Helvetica; font-weight:100;"}">Designed and developed by <b>Filipe Teixeira</b> \xA0 </span></div>

		<div class="${"uk-margin-small uk-padding-small"}">
			<a href="${"https://github.com/FilipeamTeixeira"}" target="${"_blank"}" class="${"svelte-8c0ziu"}"><span uk-icon="${"icon: github; ratio: 1.2"}" class="${"uk-icon-link"}"></span></a>
			<span>\xA0</span>
				<a href="${"https://twitter.com/filipeabroad"}" target="${"_blank"}" class="${"svelte-8c0ziu"}"><span uk-icon="${"icon: twitter; ratio: 1.2"}" class="${"uk-icon-link"}"></span></a></div></div></footer>



<div id="${"offcanvas"}" uk-offcanvas="${"mode: push; overlay: true"}"><div class="${"uk-offcanvas-bar"}"><div class="${"uk-panel"}"><ul class="${"uk-nav uk-nav-default tm-nav"}"></ul></div></div>
</div>`;
});
export { _layout as default };

//elements/cp-themeset/custom-style-interface.min.js
import "./custom-style-interface.min.js"; // this doesn't exist in this directory

(function() {
  const templateId = "cp-themeset";

  if (document.getElementById(templateId)) {
    return;
  }

  const cpthemesetTemplate = document.createElement("div");

  cpthemesetTemplate.setAttribute("style", "display: none;");
  cpthemesetTemplate.setAttribute("id", templateId);

  cpthemesetTemplate.innerHTML = `
    <style class="themeset-style">:root {
  
  --rh-global--color--white: #fff;
  --rh-global--color--black: #1a1a1a;
  --rh-global--color--red: #c00;
  --rh-global--color--gray-gainsboro: #dcdcdc;
  --rh-global--color--gray-space: #4c4c4c;
  
  --rh-global--color--blue-sky: #a3dbe8;
  --rh-global--color--blue-sky-deep: #00b9e4;
  --rh-global--color--gold: #f0ab00;
  --rh-global--color--green: #92d400;
  --rh-global--color--purple: #7551a6;
  --rh-global--color--teal: #007a87;
  --rh-global--color--teal-dark: #004153;
  --rh-global--color--blue-peacock: #0088ce;
  --rh-global--color--orange: #ec7a08;
  --rh-global--color--green-verde: #3f9c35;
  --rh-global--color--gray-charcoal: #37424a;
  --rh-global--color--gray-nickel: #7a858b;
  --rh-global--color--black-soft: #252527;
  --rh-global--color--red-brick: #a30000;
  --rh-global--color--red-maroon: #820000;
  --rh-global--color--red-garnet: #6e0000;
  --rh-global--color--red-morello: #5a0000;
  --rh-global--color--red-red-wine: #460000;
  --rh-global--color--red-daredevil: #320000;
  --rh-global--color--gray-moon: #f0f0f0;
  --rh-global--color--gray-platinum: #e7e7e7;
  --rh-global--color--gray-mercury: #d2d2d2;
  --rh-global--color--gray-fog: #bebebe;
  --rh-global--color--gray-stone: #aaa;
  --rh-global--color--gray-storm: #969696;
  --rh-global--color--gray-battleship: #828282;
  --rh-global--color--gray-batman: #6e6e6e;
  --rh-global--color--gray-umbra: #5a5a5a;
  --rh-global--color--gray-iron: #464646;
  --rh-global--color--gray-night: #333;
  --rh-global--color--black-nero: #1e1e1e;
  --rh-global--color--gray-nimbus: #ededed;
  --rh-global--color--gray-silver: #ccc;
  --rh-global--color--blue-rain: #264a60;
  --rh-global--color--blue-denim: #06c;
  --rh-global--color--blue-navy: #004080;
  --rh-global--color--blue-azure: #0076e0;
  --rh-global--color--blue-maya: #73bcf7;
  --rh-global--color--blue-dodger: #2b9af3;
  --rh-global--color--purple-amethyst: #967abd;
  --rh-global--color--purple-rain: #3b0083;
  
  --rh-global--color--product-lines--default: #252527;
  --rh-global--color--product-lines--storage: #ec7a08;
  --rh-global--color--product-lines--storage--dark: #f0ab00;
  --rh-global--color--product-lines--infrastructure: #0088ce;
  --rh-global--color--product-lines--infrastructure--dark: #00b9e4;
  --rh-global--color--product-lines--app-dev: #3f9c35;
  --rh-global--color--product-lines--app-dev--dark: #92d400;
  --rh-global--color--product-lines--support: #37424a;
  --rh-global--color--product-lines--support--dark: #7a858b;
  
  --rh-global--color--red-dark1: #a30000;
  --rh-global--color--red-dark2: #820000;
  --rh-global--color--red-dark3: #6e0000;
  --rh-global--color--red-dark4: #5a0000;
  --rh-global--color--red-dark5: #460000;
  --rh-global--color--red-dark6: #320000;
  --rh-global--color--gray1: #f0f0f0;
  --rh-global--color--gray2: #e7e7e7;
  --rh-global--color--gray3: #d2d2d2;
  --rh-global--color--gray4: #bebebe;
  --rh-global--color--gray5: #aaa;
  --rh-global--color--gray6: #969696;
  --rh-global--color--gray7: #828282;
  --rh-global--color--gray8: #6e6e6e;
  --rh-global--color--gray9: #5a5a5a;
  --rh-global--color--gray10: #464646;
  --rh-global--color--gray11: #333;
  --rh-global--color--gray12: #1e1e1e;
  
  --rh-global--text-color: #333;
  --rh-global--text-color--inverted: #fff;
  --rh-global--link-color: #06c;
  --rh-global--link-color--hover: #004080;
  --rh-global--link-color--focus: #004080;
  --rh-global--link-color--active: #004080;
  --rh-global--link-color--visited: #7551a6;
  --rh-global--link-color--inverted: #73bcf7;
  --rh-global--link-color--inverted--hover: #2b9af3;
  --rh-global--link-color--inverted--focus: #2b9af3;
  --rh-global--link-color--inverted--active: #2b9af3;
  --rh-global--link-color--inverted--visited: #967abd;
  --rh-global--ui-element-color: #0076e0;
  --rh-global--ui-element-color--hover: #004080;
  --rh-global--ui-element-color--focus: #004080;
  --rh-global--ui-element-color--active: #004080;
  --rh-global--hover-state--Color: #c00;
  --rh-global--hover-state--BackgroundColor: #8b0000;
  --rh-global--hover-state--BorderColor: #8b0000;
  --rh-global--active-state--Color: #004080;
  --rh-global--active-state--BackgroundColor: #bee1f4;
  --rh-global--active-state--BorderColor: #bee1f4;
  --rh-global--disabled-state--Color: #aaa;
  --rh-global--disabled-state--BackgroundColor: #d2d2d2;
  --rh-global--disabled-state--BorderColor: #d2d2d2;
  
  --rh-global--primary-color: #c00;
  --rh-global--secondary-color: #72767b;
  --rh-global--success-color: #cfe7cd;
  --rh-global--success-color--dark: #92d400;
  --rh-global--info-color: #bedee1;
  --rh-global--info-color--dark: #007a87;
  --rh-global--warning-color: #fbdebf;
  --rh-global--warning-color--dark: #ec7a08;
  --rh-global--danger-color: #c00;
  --rh-global--danger-color--dark: #8b0000;
  --rh-global--light-color: #fafafa;
  --rh-global--dark-color: #393f44; }

:root {
  
  --rh-global--grid-breakpoint--xs: 0;
  --rh-global--grid-breakpoint--sm: 576px;
  --rh-global--grid-breakpoint--md: 768px;
  --rh-global--grid-breakpoint--lg: 992px;
  --rh-global--grid-breakpoint--xl: 1200px;
  --rh-global--grid-breakpoint--xs--max: 575px;
  --rh-global--grid-breakpoint--sm--max: 767px;
  --rh-global--grid-breakpoint--md--max: 991px;
  --rh-global--grid-breakpoint--lg--max: 1199px;
  
  --rh-global--spacer--xs: 0.25rem;
  --rh-global--spacer--sm: 0.5rem;
  --rh-global--spacer: 1rem;
  --rh-global--spacer--md: 1.5rem;
  --rh-global--spacer--lg: 2rem;
  --rh-global--spacer--xl: 3rem;
  --rh-global--spacer--xxl: 4rem; }

:root {
  
  --rh-global--animation-timing: cubic-bezier(0.465, 0.183, 0.153, 0.946);
  
  --rh-global--BorderWidth: 1px;
  --rh-global--BorderWidth--thin: 1px;
  --rh-global--BorderStyle: solid;
  --rh-global--BorderColor: #ccc;
  --rh-global--BorderColor--light: #e7e7e7;
  --rh-global--BorderColor--dark: #333;
  
  --rh-global--shadow--BoxShadow--sm: 0 0.0625rem 0.125rem 0 rgba(3, 3, 3, 0.2);
  --rh-global--shadow--BoxShadow--md: 0 0.125rem 0.0625rem 0.0625rem rgba(3, 3, 3, 0.12), 0 0.25rem 0.6875rem 0.375rem rgba(3, 3, 3, 0.05);
  --rh-global--shadow--BoxShadow--lg: 0 0.1875rem 0.4375rem 0.1875rem rgba(3, 3, 3, 0.13), 0 0.6875rem 1.5rem 1rem rgba(3, 3, 3, 0.12);
  --rh-global--shadow--BoxShadow--sm-right: 0.25rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.12);
  --rh-global--shadow--BoxShadow--sm-left: -0.25rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.12);
  --rh-global--shadow--BoxShadow--sm-bottom: 0 0.25rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.12);
  --rh-global--shadow--BoxShadow--sm-top: 0 -0.25rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.12);
  --rh-global--shadow--BoxShadow--md-right: 0.3125rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.25);
  --rh-global--shadow--BoxShadow--md-left: -0.3125rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.25);
  --rh-global--shadow--BoxShadow--md-bottom: 0 0.3125rem 0.625rem -0.25rem rgba(3, 3, 3, 0.25);
  --rh-global--shadow--BoxShadow--md-top: 0 -0.3125rem 0.625rem -0.25rem rgba(3, 3, 3, 0.25);
  --rh-global--shadow--BoxShadow--lg-right: 0.75rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.07);
  --rh-global--shadow--BoxShadow--lg-left: -0.75rem 0 0.625rem -0.25rem rgba(3, 3, 3, 0.07);
  --rh-global--shadow--BoxShadow--lg-bottom: 0 0.75rem 0.625rem -0.25rem rgba(3, 3, 3, 0.07);
  --rh-global--shadow--BoxShadow--lg-top: 0 -0.75rem 0.625rem -0.25rem rgba(3, 3, 3, 0.07);
  --rh-global--shadow--BoxShadow--inset: inset 0 0 0.625rem 0 rgba(3, 3, 3, 0.25); }

:root {
  
  --rh-global--FontSize: 16px;
  --rh-global--LineHeight: 1.5;
  --rh-global--LineHeight--sm: 1.2;
  --rh-global--LineHeight--lg: 1.8;
  --rh-global--FontWeight--light: 300;
  --rh-global--FontWeight--normal: 500;
  --rh-global--FontWeight--semi-bold: 600;
  --rh-global--FontWeight--bold: 700;
  --rh-global--FontFamily--sans-serif: "Overpass", Overpass, Helvetica, helvetica, arial, sans-serif;
  --rh-global--FontFamily--monospace: "Overpass Mono", Consolas, Monaco, "Andale Mono", monospace;
  --rh-global--FontSize--heading--xxl: 2rem;
  --rh-global--FontSize--heading--xl: 1.75rem;
  --rh-global--FontSize--heading--lg: 1.5rem;
  --rh-global--FontSize--heading--md: 1.25rem;
  --rh-global--FontSize--heading--sm: 1.125rem;
  --rh-global--FontSize--heading--xs: 1rem;
  --rh-global--FontSize--heading--xxs: 0.875rem; }

body {
  font-family: var(--rh-global--FontFamily--sans-serif, "Overpass", Overpass, Helvetica, helvetica, arial, sans-serif);
  font-size: var(--rh-global--FontSize, 16px);
  line-height: var(--rh-global--LineHeight, 1.5);
  font-weight: var(--rh-global--FontWeight--normal, --rh-global--FontWeight--normal);
  color: var(--rh-global--text-color, #333);
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased; }

p {
  margin-top: 0;
  margin-bottom: var(--rh-global--spacer, 1rem); }

h1, h2, h3, h4, h5, h6 {
  margin-top: var(--rh-global--spacer, 1rem);
  margin-bottom: var(--rh-global--spacer, 1rem);
  font-weight: var(--rh-global--FontWeight--bold, 700);
  text-rendering: auto; }

h1 {
  font-size: var(--rh-global--FontSize--heading--xl, 1.75rem);
  line-height: var(--rh-global--LineHeight--sm, 1.2);
  font-weight: var(--rh-global--FontWeight--normal, 500); }

h2 {
  font-size: var(--rh-global--FontSize--heading--lg, 1.5rem);
  line-height: var(--rh-global--LineHeight--sm, 1.2);
  font-weight: var(--rh-global--FontWeight--normal, 500); }

h3 {
  font-size: var(--rh-global--FontSize--heading--md, 1.25rem);
  line-height: var(--rh-global--LineHeight--sm, 1.2); }

h4 {
  font-size: var(--rh-global--FontSize--heading--sm, 1.125rem);
  line-height: var(--rh-global--LineHeight--sm, 1.2); }

h5 {
  font-size: var(--rh-global--FontSize--heading--xs, 1rem);
  line-height: var(--rh-global--LineHeight, 1.5); }

h6 {
  font-size: var(--rh-global--FontSize--heading--xxs, 0.875rem);
  line-height: var(--rh-global--LineHeight, 1.5); }</style>
  `;

  document.head.appendChild(cpthemesetTemplate);

  if (window.ShadyCSS) {
    window.ShadyCSS.CustomStyleInterface.addCustomStyle(
      document.querySelector(`#${templateId}-style`)
    );
  }
})();

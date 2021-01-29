// ==UserScript==
// @name					Hacker News - Redesign
// @description				A redesigned theme for Hacker News (YCombinator).
// @icon					https://news.ycombinator.com/y18.gif
// @author					j-james
// @version					1.0
// @include					*://news.ycombinator.com/*
// ==/UserScript==

function addStyle(css) {
	var style = document.createElement("style");
	style.textContent = css;
	document.documentElement.appendChild(style);
	return style;
}

// how hard can it be to pragmatically replace an html element with a string
document.querySelector('#hnmain > tbody > tr > td > table > tbody > tr > td > a').innerHTML = '<svg width="256px" height="256px" viewBox="0 0 256 256" preserveAspectRatio="xMidYMid"><g><rect fill="#FB651E" x="0" y="0" width="256" height="256"></rect><path d="M119.373653,144.745813 L75.43296,62.4315733 L95.5144533,62.4315733 L121.36192,114.52416 C121.759575,115.452022 122.2235,116.413008 122.753707,117.407147 C123.283914,118.401285 123.747838,119.428546 124.145493,120.48896 C124.410597,120.886615 124.609422,121.251127 124.741973,121.582507 C124.874525,121.913886 125.007075,122.212123 125.139627,122.477227 C125.802386,123.802744 126.39886,125.095105 126.929067,126.354347 C127.459274,127.613589 127.923198,128.773399 128.320853,129.833813 C129.381268,127.580433 130.541078,125.1614 131.80032,122.57664 C133.059562,119.99188 134.351922,117.307747 135.67744,114.52416 L161.92256,62.4315733 L180.612267,62.4315733 L136.27392,145.739947 L136.27392,198.826667 L119.373653,198.826667 L119.373653,144.745813 Z" fill="#FFFFFF"></path></g></svg>';

addStyle(`
	body {
		background-color: #FFFFFF;
	}
	#hnmain {
		background-color: #FFFDFC;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
		/*https://getcssscan.com/css-box-shadow-examples*/
	}
	.pagetop, .pagetop a {
		color: white!important;
	}
	table > tbody > tr > td > a > svg {
		width: 20;
		height: 20;
		border: 2px solid white!important;
		margin: 2px;
	}
	.votearrow {
		width: 0;
		height: 0;
		background: none;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		border-bottom: 8px solid #DBDBDA;
		margin-left: 10px;
		margin-right: 10px;
	}
	.title {
		font-family: 'Roboto', 'Helvetica Neue', 'Liberation Sans', sans-serif;
	}
	.title a {
		color: #53504D;
		font-weight: 500;
	}
	.title a:visited {
		color: #FB882D;
	}
	.rank {
		display: none;
	}
	.morelink {
		float: right;
		color: #FB882D;
	}
`);

const openMenu = () => {
	document.getElementById("mobile-navbar").classList.replace("mobile-navbar-hide", "top-0");
};

const closeMenu = () => {
	document.getElementById("mobile-navbar").classList.replace("top-0", "mobile-navbar-hide");
};

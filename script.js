const openMenu = () => {
	document.getElementById("mobile-navbar").classList.replace("mobile-navbar-hide", "top-0");
};

const closeMenu = () => {
	document.getElementById("mobile-navbar").classList.replace("top-0", "mobile-navbar-hide");
};

const slides = document.getElementsByClassName("carousel-open");
let index = 1;
if (slides.length) {
	setInterval(() => {
		slides[index++].checked = true;
		if (index === 3) index = 0;
	}, 5000);
}

const mouseEnterFilter = (event) => {
	const id = event.target.querySelector("button img").id;
	event.target.querySelector("button img").src = "assets/images/" + id + "-svg-white.png";
	event.target.querySelector("button h1").classList.add("text-white");
	event.target.classList.add("hover-filter");
};

const mouseLeaveFilter = (event) => {
	if (!event.target.classList.contains("active-filter")) {
		const id = event.target.querySelector("button img").id;
		event.target.querySelector("button img").src = "assets/images/" + id + "-svg.png";
		event.target.querySelector("button h1").classList.remove("text-white");
		event.target.classList.remove("hover-filter");
	}
};

const makeActive = (event) => {
	const filters = document.getElementsByClassName("filter-button");
	for (const filter of filters) {
		filter.classList.remove("active-filter");
		filter.classList.remove("hover-filter");
		const id = filter.querySelector("img").id;
		filter.querySelector("img").src = "assets/images/" + id + "-svg.png";
		filter.querySelector("h1").classList.remove("text-white");
	}
	const id = event.target.querySelector("img").id;
	event.target.querySelector("img").src = "assets/images/" + id + "-svg-white.png";
	event.target.classList.add("active-filter");
	event.target.querySelector("h1").classList.add("text-white");
	const categories = document.getElementById("categories").children;
	const categoriesLength = categories.length;
	if (id === "skuter" || id === "motor" || id === "agro") {
		for (let i = 1; i < categoriesLength; i++) {
			categories[i].classList.add("hidden");
		}
	} else {
		for (let i = 1; i < categoriesLength; i++) {
			categories[i].classList.remove("hidden");
		}
	}
};
const button = document.getElementById("collapse-button");

button.addEventListener("click", () => {
	const content = document.getElementById("result");
	button.classList.toggle("rounded-md");
	button.children[0].classList.toggle("opacity-0");
	button.children[1].classList.toggle("opacity-0");
	expandElement(content, "collapsed");
});

function expandElement(elem, collapseClass) {
	// debugger;
	elem.style.height = "";
	elem.style.transition = "none";

	const startHeight = window.getComputedStyle(elem).height;

	// Remove the collapse class, and force a layout calculation to get the final height
	elem.classList.toggle(collapseClass);
	const height = window.getComputedStyle(elem).height;

	// Set the start height to begin the transition
	elem.style.height = startHeight;

	// wait until the next frame so that everything has time to update before starting the transition
	requestAnimationFrame(() => {
		elem.style.transition = "";

		requestAnimationFrame(() => {
			elem.style.height = height;
		});
	});

	// Clear the saved height values after the transition
	elem.addEventListener("transitionend", () => {
		elem.style.height = "";
		elem.removeEventListener("transitionend", arguments.callee);
	});
}

function toggleCollapse(event, id) {
	const content = document.getElementById(id);
	event.target.classList.toggle("rounded-md");
	event.target.children[0].classList.toggle("opacity-0");
	event.target.children[1].classList.toggle("opacity-0");
	expandElement(content, "collapsed");
}

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

const mouseEnterFilter = (event) => {
	picture = event.target.alt;
	event.target.src = "assets/images/" + picture + "-svg-white.png";
};

const mouseLeaveFilter = (event) => {
	picture = event.target.alt;
	event.target.src = "assets/images/" + picture + "-svg.png";
};

const hideElement = (event, id) => {
	document.getElementById(id).classList.toggle("hidden");
	event.target.children[0].classList.toggle("opacity-0");
	event.target.children[1].classList.toggle("opacity-0");
	event.target.classList.toggle("bg-yellow-500");
	event.target.classList.toggle("text-white");
	event.target.classList.toggle("hover:text-white");
	event.target.classList.toggle("rounded-b-none");
};

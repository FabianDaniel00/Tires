const showText = (event, id) => {
	const texts = document.getElementsByClassName("text");
	for (const text of texts) {
		text.classList.add("hidden");
	}
	texts[id].classList.remove("hidden");
	const children = event.target.parentNode.children;
	for (const child of children) {
		child.classList.remove("bg-yellow-500");
		child.classList.replace("text-white", "text-gray-400");
	}
	event.target.classList.add("bg-yellow-500");
	event.target.classList.replace("text-gray-400", "text-white");
};

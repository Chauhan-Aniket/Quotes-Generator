const quoteContent = document.querySelector(".quote-content");
const authorName = document.querySelector(".author-name");
const randomBtn = document.querySelector(".btn-random");

const getQuote = () => {
	// API url
	const API_URL = "https://type.fit/api/quotes";

	fetch(API_URL)
		.then((response) => response.json())
		.then((data) => {
			// console.log(data);

			const randomNum = Math.floor(Math.random() * 1643 + 1);
			const quote = data[randomNum].text;
			const author = data[randomNum].author;

			quoteContent.innerText = quote;
			authorName.innerText = "- " + author;

			if (author == null) {
				authorName.innerText = "- Anonymous";
			} else {
				authorName.innerText = "- " + author;
			}
			complete();
		});
	loading();
};

const container = document.querySelector(".container");
const loader = document.querySelector(".loader");

function loading() {
	loader.hidden = false;
	container.style.visibility = "hidden";
}
function complete() {
	if (!loader.hidden) {
		container.style.visibility = "visible";
		loader.hidden = true;
	}
}

randomBtn.addEventListener("click", getQuote);
getQuote();

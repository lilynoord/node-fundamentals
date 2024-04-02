const url1 = "http://numbersapi.com";
const url2 = "https://deckofcardsapi.com/api";

let nums = document.querySelector("section[name=nums]");

axios
	.get(`${url1}/1/trivia`)
	.then((e) => (nums.innerHTML = nums.innerHTML + "<br>" + e.data));
axios
	.get(`${url1}/2/trivia`)
	.then((e) => (nums.innerHTML = nums.innerHTML + "<br>" + e.data));
axios
	.get(`${url1}/3/trivia`)
	.then((e) => (nums.innerHTML = nums.innerHTML + "<br>" + e.data));

const url1 = "http://numbersapi.com";
const url2 = "https://deckofcardsapi.com/api";

let nums = document.querySelector("section[name=nums]");

addFact(1).then((e) => (nums.innerHTML += e));

addFact(2).then((e) => (nums.innerHTML += e));

addFact(3).then((e) => (nums.innerHTML += e));

console.log(addFact(1));
async function addFact(num) {
	const fact = await axios.get(`${url1}/${num}/trivia`);
	return `<br> ${fact.data}`;
}

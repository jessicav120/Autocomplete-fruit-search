const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const body = document.querySelector('body');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];

	fruits.forEach(fruit => {
		if(str !== ''){
			if(fruit.toLowerCase().includes(str.toLowerCase())){
				results.push(fruit);
			}
		}
	})

	return results;
}

function searchHandler(e) {
	showSuggestions(search(input.value));
}

function hideSuggestions(){
	suggestions.innerHTML = '';
}

function showSuggestions(results) {
	hideSuggestions();
	suggestions.classList.remove('has-suggestions');
	//create regular expression from input.value str
	let lttrMatch = new RegExp(input.value, 'i');

	results.forEach(result => {
		let newLi = document.createElement('li');

		//bold matching letters
		newLi.innerHTML = result.replace(
			lttrMatch, 
			"<b>" + result.match(lttrMatch).toString() + "</b>"
			);

		suggestions.append(newLi);
	})

	if(suggestions.innerHTML !== ''){
		suggestions.classList.add('has-suggestions');
	}
}

function useSuggestion(e) {
	let usedSugg = e.target.closest('li').innerText;
	input.value = usedSugg;
	hideSuggestions();
	suggestions.classList.remove('has-suggestions');
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
body.addEventListener('click', hideSuggestions);
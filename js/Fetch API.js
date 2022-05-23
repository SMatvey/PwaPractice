const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');

const capital_btn = document.getElementById('capital_btn');
const capital_result = document.getElementById('capital_result');

cat_btn.addEventListener('click', getRandomCat);
dog_btn.addEventListener('click', getRandomDog);
capital_btn.addEventListener('click', getRandomCapital);


function getRandomCat() {
	fetch('https://aws.random.cat/meow')
		.then(res => res.json())
		.then(data => {
			cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}
col=0;
function getRandomCapital() {
	fetch('https://restcountries.com/v3.1/region/europe')
    .then(res => res.json())
    .then(data => {
        data.forEach((country) => {
            capital_result.innerHTML+=(country.capital[0]+"; "+"<br>");  
    });
})
}


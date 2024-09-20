const form = document.querySelector('form');
const resultDiv = document.querySelector('.result');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    getwordinfo(form.elements[0].value);
});
const getwordinfo = async (word)=>{
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await response.json();
    let def = 
    resultDiv.innerHTML = 
    `<h2 class="Deftext"><strong>Word:  </strong>${data[0].word}</h2>
    <h2 class="Deftext"><strong>Part of Speech:  </strong>${data[0].meanings[0].partOfSpeech}</h2>
    <h2 class="Deftext"><strong>Definition:  </strong>${data[0].meanings[0].definitions[0].definition}</h2>
    `;
    for (i=0; i < data[0].meanings[0].definitions[0].definition.length; i++){
        resultDiv.innerHTML += data[0].meanings[0].definitions[0].definition[i];
    }
    for (i=0; i < data[0].meanings[0].definitions[0].antonyms.length; i++){
        resultDiv.innerHTML += `<li class="Deftext"><strong class="Deftext">Antonyms:</strong> ${data[0].meanings[0].definitions[0].antonyms[i]}</li>`;
    }
    console.log(data);
}
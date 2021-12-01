
/* const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

/*
function structureVolcano(volcanoInfo){
    const getVolcano = {
        title:{
            media:{
                url:
            }
        }
    }
}
*/

async function windowActions() {
  const endpoint = '/api/eruption_info';
  const request = await fetch(endpoint);
  const names = await request.json();
  
  const searchInput = document.querySelector('.nameSearch');
  const suggestions = document.querySelector('.suggestions');

console.log(names)
  function findMatches(wordToMatch, names) {
    return names.filter((info) => {
      const regex = new RegExp(wordToMatch, 'gi');
      return info.volcano_name.match(regex);
    });
  }
  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, names);
    const html = matchArray.map((info) => {
      const regex = new RegExp(event.target.value, 'gi');
      return `
      <div class='photo-grid-container'>
                <div class='photo-grid'>
                <div class="box">
                <div class="name">Name: ${info.volcano_name}</div>
                <div class="num">Eruption Number: ${info.eruption_number} </div>
                <div class="date"> Date of Eruption: ${info.year}-${info.month}-${info.day} </div>
                <div class="aoa">Eruption AOA: ${info.aoa}</div>
                <div class="vei">Eruption VEI: ${info.vei}</div>
                <div class="method">Method: ${info.method}</div>
                <div class="category">Eruption Category: ${info.category}</div>
              </div>
             </div>
            </div>
    `;
    }).join('');
    suggestions.innerHTML = html;
  }

  searchInput.addEventListener('input', displayMatches);
  searchInput.addEventListener('keyup', (evt) => { displayMatches(evt); });
}
window.onload = windowActions;


/* const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

/*
function structureVolcano(volcanoInfo){
    const getVolcano = {
        title:{
            media:{
                url:
            }
        }
    }
}
*/

/* async function getVolcano() {
  const volcanoInfo = document.querySelector('.volcanoName');

  const request = await fetch('/api/volcanos');
}

function findMatches(wordToMatch, arrayName) {
    if (wordToMatch.length != 0) {
      return arrayName.filter((place) => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.volcano_name.match(regex);
      });
    }
    suggestions.innerHTML = '';
  }

  function displayMatches(event) {
    const matchArray = findMatches(event.target.value, arrayName);
    console.log(matchArray);
    if (matchArray) {
      const html = matchArray.map((place) => {
        const regex = new RegExp(event.target.value, 'gi');
        const volcanoName = place.volcano_name;
        return `

            <li>
                <p class='name'>${volcanoName}<br/>
            </li>
            `;
      }).join('');
      suggestions.innerHTML = html;
    }
  }

  searchInput.addEventListener('change', displayMatches);
  searchInput.addEventListener('keyup', (evt) => { displayMatches(evt); });
}

window.onload = windowActions; */
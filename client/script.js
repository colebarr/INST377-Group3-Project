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
                <div class="box", id = 'info_box'>
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
            <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
              <header class="modal-card-head">
                <p class="modal-card-title">Modal title</p>
                <button class="delete" aria-label="close"></button>
              </header>
              <section class="modal-card-body">
                Content is NOT THERE YET UNFORTUNATELY
              </section>
              <footer class="modal-card-foot">
              </footer>
            </div>
          </div>
    `;
    }).join('');
    suggestions.innerHTML = html;
    document.getElementById('info_box').addEventListener('click',function(){
      document.querySelector('.modal').style.display = 'flex';
    });
    document.querySelector('info_box').addEventListener('click',function(){
      document.querySelector('.modal').style.display = 'none';
    });
  }

  searchInput.addEventListener('input', displayMatches);
  searchInput.addEventListener('keyup', (evt) => { displayMatches(evt); });
}
window.onload = windowActions;

function loadFile(event) {
  const image = document.getElementById('output');
  image.src = URL.createObjectURL(event.target.files[0]);
}


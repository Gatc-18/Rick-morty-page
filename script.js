let template = document.getElementById('template-card').content;
let contenedorBody = document.querySelector('#container-characters');
let fragment = document.createDocumentFragment();



document.addEventListener('DOMContentLoaded', async () => {
       
    let res = await fetch('https://rickandmortyapi.com/api/character');
    let data = await res.json();
    let character = data.results;
     console.log(character)
    showData(character)
})


const showData = (data) => {
      data.forEach(personaje => {
             const { id, name, image,  status, species } = personaje;
       
             template.querySelector('img').setAttribute('src', image );
             template.querySelector('h1').textContent = name;
             template.querySelector("#divStatus").setAttribute('class', status == 'Alive' ? 'alive' : status == 'Dead' ? 'death' : 'otro')
             template.querySelector('h3').textContent = `${status} - ${species}`;

             const clone = template.cloneNode(true);
             fragment.appendChild(clone);

      })

      contenedorBody.appendChild(fragment)
}


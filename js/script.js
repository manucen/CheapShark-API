document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = 'https://www.cheapshark.com/api/1.0/games?title=batman&limit=60';
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Verificar la estructura de los datos
  
       // const ofertasList = document.getElementById('ofertasList');
        const juegosList = document.getElementById('juegosList');
  
        data.forEach(game => {
          console.log(game); // Verificar la estructura de cada objeto game
  
          const listItem = document.createElement('li');
          listItem.textContent = game.title; // Asegurarse de que game tenga la propiedad title
  
          if (game.isOnSale) {
            ofertasList.appendChild(listItem);
          } else {
            juegosList.appendChild(listItem);
          }
        });
      })
      .catch(error => {
        console.log('Error:', error);
      });
  });
  
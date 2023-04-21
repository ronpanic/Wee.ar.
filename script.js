// Que la pagina vuelva al inicio cuando se reinicia

window.onload = function() {
  window.scrollTo(0, 0);
};

// Inicializar el Mapa 

function iniciarMap(){
  const coord = {lat:-34.5956145 ,lng: -58.4431949};
  const map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  const marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}







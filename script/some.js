
var linkListe = []
const createSomeBar = () =>{
    const container = document.getElementById("some-container");

  const div = document.createElement("div");
  div.className = "iconBar"
  const facebook = document.createElement("a");
  const spotify = document.createElement("a");
  const instagram = document.createElement("a");
  const trip = document.createElement("a");

  facebook.className = "fa fa-facebook";
  spotify.className = "fa fa-spotify";
  instagram.className = "fa fa-instagram";
  trip.className = "fa fa-tripadvisor";

  facebook.href = "https://www.facebook.com/soilkaffebar/";
  instagram.href= "https://www.instagram.com/kafesoil/";
  spotify.href = "https://open.spotify.com/playlist/37i9dQZF1DX2Wvd8VINtcF?si=hndYS_Q4SOOn6sk1EJp4mg"
  trip.href = "https://www.tripadvisor.com/Restaurant_Review-g190499-d10200453-Reviews-Kafe_Soil-Trondheim_Trondheim_Municipality_Trondelag_Central_Norway.html";

  document.addEventListener("click", function(nyfane) { 
    if (nyfane.target.tagName == "A"  &&
      !nyfane.target.hasAttribute("target"))
    { 
        nyfane.target.setAttribute("target", "_blank"); 
    } 
  });

  div.appendChild(facebook);
  div.appendChild(instagram);
  div.appendChild(spotify);
  div.appendChild(trip);
  container.appendChild(div);
}

createSomeBar()





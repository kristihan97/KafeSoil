var footerVenstre = ["Torsdag kl 12:00-18:00", "Fredag kl 12:00-18:00", "Lørdag kl 12:00-18:00", "Søndag kl 12:00-18:00"]
var footerHoyre = ["Nedre Bakklandet 20D", "7014 Trondheim", "kafesoil@gmail.com", "+47 95 43 67 51"]

const createFooter = () => {

    const footerContainer = document.getElementById("footer-container"); /*Lager container til footer*/
    const fContent = document.createElement("div"); /*Lager div til footerinnhold*/
    fContent.className = "footerContent"; 
    const vfContainer = document.createElement("div"); /*Lager div som legges på venstre halvdel av footeren*/
    vfContainer.className = "section";
    vfContainer.id = "venstreSide";
    const hfContainer = document.createElement("div"); /*Lager div som legges på høyre halvdel av footeren*/
    hfContainer.className = "section";
    hfContainer.id = "hoyreSide";
    const vDiv = document.createElement("div"); /*Lager div som løkke legger inn til fra array*/
    const hDiv = document.createElement("div"); /*Lager div som løkke legger inn til fra array*/

    for (var i = 0; i < footerVenstre.length; i++) {
        var venstre = footerVenstre[i];
        var v = document.createElement('p');
        v.textContent = venstre;
        vDiv.appendChild(v);
        
    };

    for (var i = 0; i < footerHoyre.length; i++) {
        var hoyre = footerHoyre[i];
        var h = document.createElement('p');
        h.textContent = hoyre;
        hDiv.appendChild(h);
    };

    const aapning = document.createElement("h4"); /*Lager overskriftene i footeren*/
    aapning.textContent = "Åpningstider";
    vfContainer.appendChild(aapning); 
    const soil = document.createElement("h4");
    soil.textContent = "SOIL";
    hfContainer.appendChild(soil);

    vfContainer.appendChild(vDiv);
    hfContainer.appendChild(hDiv);
    fContent.appendChild(vfContainer);
    fContent.appendChild(hfContainer);
    footerContainer.appendChild(fContent);
}

createFooter();
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function contactForm() {
    let mailformat= "@"; 
    let x = document.forms["conForm"]["name"].value; 
    let y = document.forms["conForm"]["email"].value; 
    let z = document.getElementById("texta").value;

    if (x==="") {
        alert("Du må fylle inn navnet ditt!"); 
    } 

    else if (y==="") {
        alert("Du må fylle inn e-posten din!");
    } 

    else if(!y.match(mailformat)) {
        alert("Fyll inn e-posten din på riktig format.");
    }
    
    else if (z==="") {
        alert("Vennligst skriv inn en beskjed.");

    } 
    else {
        alert("Meldingen din er sendt! Du får svar så raskt vi leser din beskjed."); 
        location.reload();
        return false;
    }
}

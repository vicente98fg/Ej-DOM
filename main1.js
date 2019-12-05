document.addEventListener('DOMContentLoaded', () => {

// Parrafo
    let elemP = document.createElement("p");
    elemP.textContent = "El coche I N D E S T R U C T I B L E";

    document.body.appendChild(elemP);

// Imagen     
    let elemImg = document.createElement("img");
    elemImg.src = "tesla.jpg";

    document.body.appendChild(elemImg);

// Link a Florida  
    let elemSrc = document.createElement("a");
    let elemSrcText = document.createTextNode("Link a Florida");
    elemSrc.appendChild(elemSrcText);
    elemSrc.title = "Titulo";
    elemSrc.href = "https://www.floridaoberta.com";

    document.body.appendChild(elemSrc);

// Lista de cosas que hacer en verano
    let elemUl = document.createElement("ul");
    let elemLiFirst = document.createElement("li");
    let elemLiSecond = document.createElement("li");
    let elemLiThird = document.createElement("li");
    elemLiFirst.textContent = "Pasarlo bien";
    elemLiSecond.textContent = "Tratar de no morir";
    elemLiThird.textContent = "Seguir pasandolo bien";

    document.body.appendChild(elemUl);
    elemUl.insertAdjacentElement( "afterbegin", elemLiThird);
    elemUl.insertAdjacentElement( "afterbegin", elemLiSecond);
    elemUl.insertAdjacentElement( "afterbegin", elemLiFirst);


});
document.addEventListener('DOMContentLoaded', () => {

// Boton al final de la pagina
    let button = document.createElement("button");
    button.innerHTML = "Ordenar";

    document.body.appendChild(button);

    button.addEventListener('click', function() {
        reordenar();
    });

    function reordenar () {
        let tabla = document.getElementById("tabla");
        let row = tabla.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);

        cell1.innerHTML = tabla.lastElementChild.textContent;
        cell2.innerHTML = "NEW CELL2";
        cell3.innerHTML = "NEW CELL3";

    }


});
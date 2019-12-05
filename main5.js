document.addEventListener('DOMContentLoaded', () => {

    let table = document.createElement('TABLE');
    table.setAttribute("id","tabla");
    document.body.appendChild(table);

    let fila = 0;
    let valor = 0;

    for (let i = 0; i<2; i++) {
        fila = fila + 1;
        let tr = document.createElement("TR");
        tr.setAttribute("id", fila);
        document.getElementById("tabla").appendChild(tr);

        if (valor == 0) {
            let tdDaw = document.createElement("TD");
            let celda = document.createTextNode("DAW");
            tdDaw.setAttribute("id", "daw");
            tdDaw.classList.add("header");
            tdDaw.appendChild(celda);
            document.getElementById(fila).appendChild(tdDaw);

            valor = 1;

        }

        else if (valor == 1) {
            let tdDam = document.createElement("TD");
            let celda = document.createTextNode("DAM");
            tdDam.setAttribute("id", "dam");
            tdDam.classList.add("header");
            tdDam.appendChild(celda);
            document.getElementById(fila).appendChild(tdDam);

        }

    }

    let daw = document.getElementById("daw");

    daw.addEventListener('click', () => {
        let nuevaCelda = document.createElement("TD");
        let texto = document.createTextNode("No me acuerdo que ponia aqui");
        nuevaCelda.classList.add("content");
        nuevaCelda.appendChild(texto);
        let filaGuay = document.getElementById(fila);
        document.body.appendChild(nuevaCelda);
        nuevaCelda.insertAdjacentElement( "afterend", filaGuay)

    });


    let dam = document.getElementById("dam");

    dam.addEventListener('click', () => {
        let nuevaCelda = document.createElement("TD");
        let texto = document.createTextNode("DAM apesta o algo asi");
        nuevaCelda.classList.add("content");
        nuevaCelda.appendChild(texto);
        let filaGuay = document.getElementById(fila);
        document.body.appendChild(nuevaCelda);
        nuevaCelda.insertAdjacentElement( "beforebegin", filaGuay)
    });

});
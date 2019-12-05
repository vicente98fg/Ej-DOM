document.addEventListener('DOMContentLoaded', () => {

    let table = document.createElement('TABLE');
    table.setAttribute("id","ajedrez");
    document.body.appendChild(table);

    
    let fila = 0;
    let valor = 0;
    let c = 0;

    for (let i = 1; i<9; i++) {
        fila = fila + 1;
        let tr = document.createElement("TR");
        tr.setAttribute("id", fila);
        document.getElementById("ajedrez").appendChild(tr);

        c = 0;

        if (valor == 0) {
            for (let j = 0; j<4; j++) {

                c = c + 1;

                let whiteCell = document.createElement("TD");
                whiteCell.classList.add("white_cell");
                whiteCell.setAttribute("id","cell_"+i+"_"+c);
                document.getElementById(fila).appendChild(whiteCell);

                c = c + 1;
        
                let blackCell = document.createElement("TD");
                blackCell.classList.add("black_cell");
                blackCell.setAttribute("id","cell_"+i+"_"+c);
                document.getElementById(fila).appendChild(blackCell);

                valor = 1;
            }

        } else if (valor == 1) {
            for (let j = 0; j<4; j++) {

                c = c + 1;

                let blackCell = document.createElement("TD");
                blackCell.classList.add("black_cell");
                blackCell.setAttribute("id","cell_"+i+"_"+c);
                document.getElementById(fila).appendChild(blackCell);

                c = c + 1;

                let whiteCell = document.createElement("TD");
                whiteCell.classList.add("white_cell");
                whiteCell.setAttribute("id","cell_"+i+"_"+c);
                document.getElementById(fila).appendChild(whiteCell);

                valor = 0;
            }
        }
    }

    


});
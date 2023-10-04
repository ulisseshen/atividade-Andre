var elem = window.document.getElementById("filha1");

var principal = window.document.getElementById("pai");

var clicadas = 1,
    divs = 1,
    posi = 85;

elem.onclick = faz;



function faz() {

    if (clicadas > 6) {

        elem.innerHTML = "Chega de divis";

    } else {

        elem.innerHTML = clicadas + "º clique";

        elem.onmouseover = faz3;

        novaDiv();

    }

    clicadas = clicadas + 1;

}



function faz2() {

    if (clicadas > 6) {

        elem.innerHTML = "Não é possivel criar mais divs";

    } else {

        elem.innerHTML = "Coloque o cursor para criar outra";

    }

}



function faz3() {

    if (clicadas > 6) {

        elem.innerHTML = "Quantidade de espaço esgotada";

    } else {

        elem.innerHTML = "Aperte para criar";

        elem.onmouseout = faz2;

    }

}



function novaDiv() {

    var novo = document.createElement("div");

    var textoNovo = document.createTextNode("clique aqui");

    novo.appendChild(textoNovo);

    novo.style.backgroundColor = "yellow";

    novo.style.width = "300px";

    novo.style.height = "50px";

    novo.style.lineHeight = "50px";

    novo.style.left = "100px";

    if (divs == 1) {

        novo.style.marginTop = posi + "px";

    } else {

        posi = posi + 55;

        novo.style.marginTop = posi + "px";

    }

    novo.style.textAlign = "center";

    novo.style.fontSize = "20px";

    novo.style.position = "absolute";



    divs = divs + 1;



    novo.setAttribute('id', "filha" + divs);

    pai.insertBefore(novo, "filha".nextSibling);

}
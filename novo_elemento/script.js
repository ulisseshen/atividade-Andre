var buttonCreate = window.document.getElementById("filha1");

var principal = window.document.getElementById("pai");

var clickCount = 1;
const MAX_CLICKS = 9;

buttonCreate.onclick = onClickCreateDiv;

const fibonacci = [];

function nextFibonacci() {
    const len = fibonacci.length;
    if (len < 2) {
        fibonacci.push(1);
        return 1;
    }
    const next = fibonacci[len - 1] + fibonacci[len - 2];
    fibonacci.push(next);
    return next;
}



function onClickCreateDiv() {

    if (clickCount > MAX_CLICKS) {

        buttonCreate.innerText = "Chegamos ao máximo";

    } else {

        buttonCreate.innerText = clickCount + "º clique";

        buttonCreate.onmouseover = updateMouseOver;

        generateNewFibonacciRow();

    }

    clickCount = clickCount + 1;

}



function checkIfIsFinished() {
    if (clickCount > MAX_CLICKS) {
        buttonCreate.innerText = "Não é possivel criar mais divs";
    } else {
        buttonCreate.innerText = "Clique para continuar";
    }
}



function updateMouseOver() {

    if (clickCount > MAX_CLICKS) {

        buttonCreate.innerText = "Quantidade de espaço esgotada";

    } else {

        buttonCreate.innerText = "Aperte para criar";

        buttonCreate.onmouseout = checkIfIsFinished;

    }

}



function generateNewFibonacciRow() {



    const next = nextFibonacci()

    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.gap = '4px';

    for (let i = 0; i < next; i++) {
        var novo = document.createElement("div");
        var textoNovo = document.createTextNode(next);
        novo.appendChild(textoNovo);
        novo.style.backgroundColor = "yellow";

        novo.style.width = "50px";

        novo.style.height = "50px";

        novo.style.lineHeight = "50px";

        novo.style.left = "100px";


        novo.style.marginTop = "10px";



        novo.style.textAlign = "center";

        novo.style.fontSize = "16px";
        row.appendChild(novo);
    }

    pai.insertBefore(row, "filha".nextSibling);

}
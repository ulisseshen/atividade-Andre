var contaclique = 0;
var elem = window.document.getElementById("filha");
var pai = window.document.getElementById("pai");
const img = document.querySelector(".acabou > img");

img.ondblclick = function () {
    location.reload();
}

var inicio = setInterval(function () {
    randomBallPosition();
}, 800);



// elem.onmouseover = posi;

elem.onclick = onClickBall;



function onClickBall() {
    clearInterval(inicio);
    elem.style.top = pai.clientHeight / 2 + "px";
    elem.style.left = 10 + "px";
    setTimeout(() => {
        const acabouElement = document.querySelector(".acabou > img");
        acabouElement.style.display = "block";

    }, 800);
}



function generateTopPosition() {
    const paiHeight = pai.clientHeight;
    const filhaHeight = elem.clientHeight;
    const newHeight = Math.random() * paiHeight - filhaHeight;

    if (newHeight < 0) {
        return 0;
    } else if (newHeight > paiHeight) {
        return paiHeight - filhaHeight;
    }
    return newHeight;
}



function generateLeftPosition() {
    const paiWidth = pai.clientWidth;
    const filhaWidth = elem.clientWidth;
    const newWidth = Math.random() * paiWidth - filhaWidth;
    if (newWidth < 0) {
        return 0;
    } else if (newWidth > paiWidth) {
        return paiWidth - filhaWidth * 2;
    }
    return newWidth;
}


randomBallPosition();


function randomBallPosition() {
    elem.style.top = generateTopPosition() + "px";
    elem.style.left = generateLeftPosition() + "px";
}
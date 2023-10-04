var contaclique = 0;
var elem = window.document.getElementById("filha");
elem.onclick = myMove;



function myMove() {
    if (contaclique == 0) {
        elem.style.top = "350px";
        elem.style.left = "350px";
        elem.style.borderRadius = "0px 50px 0px 50px";
        contaclique = 1;
    } else if (contaclique == 1) {
        elem.style.top = "0px";
        elem.style.left = "350px";
        elem.style.borderRadius = "50px 0px 50px 0px";
        contaclique = 2;
    } else if (contaclique == 2) {
        elem.style.top = "350px";
        elem.style.left = "0px";
        elem.style.borderRadius = "50px 0px 50px 0px";
        contaclique = 3;
    } else if (contaclique == 3) {
        elem.style.top = "0px";
        elem.style.left = "0px";

        elem.style.borderRadius = "0px 50px 0px 50px";
        contaclique = 4;

    } else {
        elem.style.top = "175px";
        elem.style.left = "175px";
        const loop = 10;
        for (let i = 0; i < loop; i++) {
            setTimeout(function () {
                const newRadius = (i + 1) * 5;
                elem.style.borderRadius = ` ${newRadius}px 50px ${newRadius}px 50px`;
            }, 100 + (i * 100));

        }
        contaclique = 0;

    }

}
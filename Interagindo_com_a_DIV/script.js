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
        setTimeout(function () {
            elem.style.borderRadius = "5px 50px 5px 50px";
        }, 1000);
        setTimeout(function () {
            elem.style.borderRadius = "10px 50px 10px 50px";
        }, 1500);
        setTimeout(function () {
            elem.style.borderRadius = "15px 50px 15px 50px";
        }, 2000);
        setTimeout(function () {
            elem.style.borderRadius = "20px 50px 20px 50px";
        }, 2500);

        setTimeout(function () {
            elem.style.borderRadius = "25px 50px 25px 50px";
        }, 3000);
        setTimeout(function () {
            elem.style.borderRadius = "30px 50px 30px 50px";
        }, 3500);
        setTimeout(function () {
            elem.style.borderRadius = "35px 50px 35px 50px";
        }, 4000);
        setTimeout(function () {
            elem.style.borderRadius = "40px 50px 40px 50px";
        }, 4500);
        setTimeout(function () {
            elem.style.borderRadius = "45px 50px 45px 50px";
        }, 5000);
        setTimeout(function () {
            elem.style.borderRadius = "50px 50px 50px 50px";
        }, 5500);
        contaclique = 0;

    }

}
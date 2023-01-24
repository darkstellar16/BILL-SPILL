var tipamount = 0.00;
var total = 0.00;
var ans1 = 0.00;
var tipval = document.querySelectorAll('.cent');

tipval.forEach(function (elm) {
    elm.addEventListener('click', function () {
        ans1 = parseInt(this.getAttribute("value"));
    });
})

var entval = document.getElementById("txt");
var ans2 = document.getElementById("generate");



ans2.addEventListener('click', function () {
    if (this.value === 'GENERATE BILL') {
        this.value = 'RESET';
        document.getElementById("generate").innerText = "GENERATE BILL";
        decal();
    }
    else {
        this.value = 'GENERATE BILL';
        document.getElementById('generate').innerText = "RESET";
        calc();
        /*document.getElementById("generate").innerText="GENERATE BILL";*/
    }
})
function calc() {
    var entValue = parseInt(entval.value);
    tipamount = (ans1 * entValue) / 100;
    total = entValue + parseInt(tipamount);
    document.getElementById("seven2").innerText = tipamount;
    document.getElementById("eight2").innerText = total;
}

function decal() {
    document.getElementById("seven2").innerText = "0.00";
    document.getElementById("eight2").innerText = "0.00";
    document.getElementById("txt").value = 0;
    document.getElementById("mini").innerHTML = 0;
}


var btn1 = document.getElementById('inc');

var btn3 = document.getElementById('mini');

var x = 0;

btn1.addEventListener('click', function () {
    x += 1;
    btn3.innerHTML = x;
})

var btn2 = document.getElementById('dec');

btn2.addEventListener('click', function () {
    x -= 1;
    btn3.innerHTML = x;
    if (x < 0) {
        alert("Count cant be Zero");
        x = 0;
        btn3.innerHTML = x;
    }
})
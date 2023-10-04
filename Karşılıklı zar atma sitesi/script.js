let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let firstPoint = 1;
let secondPoint = 1;

$(document).ready(function () {
    $("#submit1").click(function () {
        document.querySelector("#change-name1").textContent = p1.value;
    })

})

$(document).ready(function () {
    $("#submit1").click(function () {
        document.querySelector("#side-name").textContent = p1.value;
    })

})

$(document).ready(function () {
    $("#submit2").click(function () {
        document.querySelector("#change-name2").textContent = p2.value;
    })
})

$(document).ready(function () {
    $("#submit2").click(function () {
        document.querySelector("#side-name2").textContent = p2.value;
    })

})


$(document).ready(function () {
    $(".roll-click").click(function () {
        let firstNumber = Math.trunc(Math.random() * 6 + 1)
        let secondNumber = Math.trunc(Math.random() * 6 + 1)

        while (firstNumber === secondNumber) {
            secondNumber = Math.trunc(Math.random() * 6 + 1)
        }

        if (p1.value === "") {
            alert("Player One's name is empty")
        } else {
            document.querySelector("#skl1").textContent = firstNumber;
            document.querySelector("#skl2").textContent = secondNumber;
        }

        if (p2.value === "") {
            alert("Player Two's name is empty")
        } else {
            document.querySelector("#skl1").textContent = firstNumber;
            document.querySelector("#skl2").textContent = secondNumber;
        }

        if (firstNumber > secondNumber) {
            document.querySelector("#p1-puan").textContent = firstPoint;
            firstPoint = firstPoint + 1
        }

        if(secondNumber>firstNumber){
            document.querySelector("#p2-puan").textContent = secondPoint;
            secondPoint = secondPoint + 1;
        }
    })
})


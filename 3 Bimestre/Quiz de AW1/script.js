var btn = document.querySelectorAll("button")
var correct = document.getElementsByClassName("tag correct")
var incorrect = document.getElementsByClassName("tag incorrect")
var options = document.querySelectorAll("input");

btn.forEach(element => element.addEventListener("click", respostacerta))
btn.forEach(element => element.disabled = true)
btn[0].disabled = false
options.forEach(opt => opt.disabled = true)
options[0].disabled = false
options[1].disabled = false
options[2].disabled = false
options[3].disabled = false

function respostacerta(e) {

    var q1 = document.querySelector('input[name=q1]:checked').value
    if (q1 == "jordan") {
        correct[0].style.display = "block"
        incorrect[0].style.display = "none"
        btn[1].disabled = false
        options[4].disabled = false
        options[5].disabled = false
        options[6].disabled = false
        options[7].disabled = false
    }
    else {
        incorrect[0].style.display = "block"
        correct[0].style.display = "none"
    }

    var q2 = document.querySelector('input[name=q2]:checked').value
    if (q2 == "lakers") {
        correct[1].style.display = "block"
        incorrect[1].style.display = "none"
        btn[2].disabled = false
        options[8].disabled = false
        options[9].disabled = false
        options[10].disabled = false
        options[11].disabled = false
    }
    else {
        incorrect[1].style.display = "block"
        correct[1].style.display = "none"
    }

    var q3 = document.querySelector('input[name=q3]:checked').value
    if (q3 == "curry") {
        correct[2].style.display = "block"
        incorrect[2].style.display = "none"
        btn[3].disabled = false
        options[12].disabled = false
        options[13].disabled = false
        options[14].disabled = false
        options[15].disabled = false
    }
    else {
        incorrect[2].style.display = "block"
        correct[2].style.display = "none"
    }

    var q4 = document.querySelector('input[name=q4]:checked').value
    if (q4 == "lebron") {
        correct[3].style.display = "block"
        incorrect[3].style.display = "none"
        btn[4].disabled = false
        options[16].disabled = false
        options[17].disabled = false
        options[18].disabled = false
        options[19].disabled = false
    }
    else {
        incorrect[3].style.display = "block"
        correct[3].style.display = "none"
    }

    var q5 = document.querySelector('input[name=q5]:checked').value
    if (q5 == "bill") {
        correct[4].style.display = "block"
        incorrect[4].style.display = "none"
    }
    else {
        incorrect[4].style.display = "block"
        correct[4].style.display = "none"
    }

}

document.getElementById("sent").addEventListener("click", validate)

function validate() {
    if (document.getElementById("name").value != "" && document.getElementById("email").value != "") {
        alert("Prontinho! Você receberá as novidades por email.")
    } else {
        alert("Por favor, preencha os campos nome e email.")
    }
}
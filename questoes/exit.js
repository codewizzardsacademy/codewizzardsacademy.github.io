document.getElementById("IdDoLink").addEventListener("click", exit);

function exit() {
    localStorage.clear()
    window.open("../../index.html","_self")
}
    
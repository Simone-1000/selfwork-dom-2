let inputTitolo = document.querySelector("#titolo");
let inputParagrafo = document.querySelector("#paragrafo");
let bottone = document.querySelector("#crea-articolo");
let contenitoreArticoli = document.querySelector("#articoli");

bottone.addEventListener("click", function () {
    let titolo = inputTitolo.value.trim();
    let paragrafo = inputParagrafo.value.trim();

    if (titolo === "" || paragrafo === "") {
        alert("Devi inserire sia il titolo sia il paragrafo!");
        return;
    }

    let articolo = document.createElement("article");
    let titoloArticolo = document.createElement("h2");
    let paragrafoArticolo = document.createElement("p");

    titoloArticolo.textContent = titolo;
    paragrafoArticolo.textContent = paragrafo;

    articolo.appendChild(titoloArticolo);
    articolo.appendChild(paragrafoArticolo);

    contenitoreArticoli.appendChild(articolo);

    inputTitolo.value = "";
    inputParagrafo.value = "";
});
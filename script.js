// --- Pulsante sorpresa (frase semplice) ---
document.getElementById("surpriseButton").addEventListener("click", function() {
    const text = document.getElementById("surpriseText");
    text.classList.toggle("hidden");
});


// --- Easter Egg (testo segreto + lettera + blur) ---
const bottone = document.getElementById("bottoneSorpresa");
const segreto = document.getElementById("segreto");
const lettera = document.getElementById("lettera");
const mainContent = document.querySelector(".container");

bottone.addEventListener("click", () => {
    segreto.classList.toggle("hidden");   // Mostra/nasconde messaggio segreto
    lettera.classList.toggle("hidden");   // Mostra/nasconde lettera
    mainContent.classList.toggle("blur"); // Sfoca/sfoca sfondo
});
// --- Pulsante per chiudere la lettera ---
const chiudi = document.getElementById("chiudiLettera");

chiudi.addEventListener("click", () => {
    lettera.classList.add("hidden");
    segreto.classList.add("hidden");
    mainContent.classList.remove("blur");
});

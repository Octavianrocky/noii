// --- Pulsante sorpresa (frase semplice) ---
document.getElementById("surpriseButton").addEventListener("click", function() {
    const text = document.getElementById("surpriseText");
    if (text) text.classList.toggle("hidden");
});

// --- Easter Egg (lettera + blur) ---
const bottone = document.getElementById("bottoneSorpresa");
const lettera = document.getElementById("lettera");
const mainContent = document.querySelector(".container");
const segreto = document.getElementById("segreto"); // se non esiste non dà errore

bottone.addEventListener("click", () => {

    if (segreto) segreto.classList.toggle("hidden"); 
    lettera.classList.toggle("hidden");
    mainContent.classList.toggle("blur");

    // ✅ BLOCCA / SBLOCCA SCROLL DEL BODY
    if (!lettera.classList.contains("hidden")) {
        document.body.style.overflow = "hidden";   // blocca il corpo
    } else {
        document.body.style.overflow = "auto";     // riattiva scroll
    }
});

// --- ✅ Bottone X per chiudere la lettera ---
const chiudi = document.getElementById("chiudiLettera");

chiudi.addEventListener("click", () => {
    lettera.classList.add("hidden");
    mainContent.classList.remove("blur");
    if (segreto) segreto.classList.add("hidden");

    document.body.style.overflow = "auto";  // ✅ riattiva lo scroll
});


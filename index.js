
function oblicz() {
    var rodzajPaliwa = parseInt(document.getElementById("rodzajPaliwa").value);  // Pobieranie wartości
    var ileLitrow = parseInt(document.getElementById("litry").value);  // Pobieranie wartości
    var wynik;

    if (isNaN(ileLitrow)) {
        document.getElementById("wyswietlacz").innerHTML = "Podaj poprawną liczbę litrów!";
        return;
    }

    if (rodzajPaliwa == 1) {
        wynik = ileLitrow * 4;
        document.getElementById("wyswietlacz").innerHTML = wynik + " zł";
    } else if (rodzajPaliwa == 2) {
        wynik = ileLitrow * 3.5;
        document.getElementById("wyswietlacz").innerHTML = wynik + " zł";
    } else {
        document.getElementById("wyswietlacz").innerHTML = "0 zł";
    }
}

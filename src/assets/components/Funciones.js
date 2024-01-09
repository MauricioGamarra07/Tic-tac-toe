let lista = ["X", "O", "X", "O", "X", "O", "X", "O", "X"];
let turno = 0;

export function mostrarIcono(e) {
    e.target.innerHTML = lista[turno];
    e.target.style.fontSize = "2rem";

    e.target.disabled = true;

    if (turno == 4) {
        let card1 = document.getElementById('0')
        let card2 = document.getElementById('1')
        let card3 = document.getElementById('2')
        let card4 = document.getElementById('3')
        let card5 = document.getElementById('4')
        let card6 = document.getElementById('5')
        let card7 = document.getElementById('6')
        let card8 = document.getElementById('7')
        let card9 = document.getElementById('8')

        if (card1.innerHTML == card2.innerHTML && card2.innerHTML == card3.innerHTML) {
            mensajeVictoria()
        }
        else if (card4.innerHTML == card5.innerHTML && card5.innerHTML == card6.innerHTML) {
            mensajeVictoria()
        }
        else if (card7.innerHTML == card8.innerHTML && card8.innerHTML == card9.innerHTML) {
            mensajeVictoria()
        }
        else if (card1.innerHTML == card4.innerHTML && card4.innerHTML == card7.innerHTML) {
            mensajeVictoria()
        }
        else if (card2.innerHTML == card5.innerHTML && card5.innerHTML == card8.innerHTML) {
            mensajeVictoria()
        }
        else if (card3.innerHTML == card6.innerHTML && card6.innerHTML == card9.innerHTML) {
            mensajeVictoria()
        }
        else if (card1.innerHTML == card5.innerHTML && card5.innerHTML == card9.innerHTML) {
            mensajeVictoria()
        }
        else if (card3.innerHTML == card5.innerHTML && card5.innerHTML == card7.innerHTML) {
            mensajeVictoria()
        }
    }

    turno += 1;
}

function mensajeVictoria() {

    setTimeout(() => {
        alert("Felicitaciones, ha ganado el equipo de las X")
    }, 200);

}
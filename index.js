let nome = "Lion";
let xp = 8100;
let msg;

if (xp > 0 && xp <= 1000) {
   msg = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    msg = "Bronze"
} else if (xp >= 2001 && xp <= 5000) {
    msg = "Prata"
} else if (xp >= 5001 && xp <= 7000) {
    msg = "Ouro"
} else if (xp >= 7001 && xp <= 8000) {
    msg = "Platina"
} else if (xp >= 8001 && xp <= 9000) {
    msg = "Ascendente"
} else if (xp >= 9001 && xp <= 10000) {
    msg = "Imortal"
} else if (xp >= 10001) {
    msg = "Radiante"   
} else {
    msg = "Jogador(a) sem XP"
}

console.log(msg);

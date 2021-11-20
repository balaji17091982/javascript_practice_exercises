// Coding Challenge-3

let scoresDolphisRound1 = 96;
let scoresDolphisRound2 = 108;
let scoresDolphisRound3 = 89;
let scoresKoalasRound1 = 88;
let scoresKoalasRound2 = 91;
let scoresKoalasRound3 = 110;

let AverageScoreDolphins = (scoresDolphisRound1 + scoresDolphisRound2 + scoresDolphisRound3)/3;
let AverageScoreKoalas = (scoresKoalasRound1 + scoresKoalasRound2 + scoresKoalasRound3)/3;

if(AverageScoreDolphins > AverageScoreKoalas) {
    console.log("Dolphins are Winners!!!");
} else if(AverageScoreDolphins === AverageScoreKoalas) {
    console.log("Tournament is Drawn");
} else {
    console.log("Koalas are Winners!!!");
}

// BONUS
scoresDolphisRound1 = 97;
scoresDolphisRound2 = 112;
scoresDolphisRound3 = 101;
scoresKoalasRound1 = 109;
scoresKoalasRound2 = 95;
scoresKoalasRound3 = 123;

scoreSumDolphins = scoresDolphisRound1 + scoresDolphisRound2 + scoresDolphisRound3;
scoreSumKoalas = scoresKoalasRound1 + scoresKoalasRound2 + scoresKoalasRound3;

if (scoreSumDolphins > scoreSumKoalas) && {
    
} else if (scoreSumDolphins === scoreSumKoalas) {

} else {

}
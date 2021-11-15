// Coding Challenge-2

const HeightMark =  1.69;
const MassMark = 78;

const HeightJohn = 1.95;
const MassJohn = 92;

const BMIMark = MassMark/(HeightMark**2);
const BMIJohn = MassJohn/(HeightJohn**2);

if(BMIMark > BMIJohn) {
    console.log(`MarkBMI (${BMIMark}) > JohnBMI (${BMIJohn})`)
}
else {
    console.log(`MarkBMI (${BMIMark}) < JohnBMI (${BMIJohn})`)
}
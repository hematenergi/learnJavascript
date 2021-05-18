//NaN

console.log(parseFloat("1.1eko"));

console.log(Number("1salah")); //number tidak bisa mentolelir kesalahan

// operasi pada NaN
const first = Number("salah");
const totalNumber = first + 100;

console.log(totalNumber);
console.log(isNaN(first));

// tipe data array
let arrayKosong = [];

let arrayNama = ["ujang", "udin", "nano"];

arrayNama.push("nunu");

arrayNama[0] = "ujong";

delete arrayNama[1];

arrayNama.push("mamang");
arrayNama[1] = "kamil";

console.table(arrayNama);

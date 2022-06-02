// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
let listBelanjaan = (dataBelanja) => {
  let newData = [];
  for(let i = 0; i < dataBelanja.length; i++){
    newData.push(`- ${dataBelanja[i].nama} x ${dataBelanja[i].kuantitas}`)
  }
  return newData;
}



// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (totalBelanja) => {
  let newData = [];
  for(let i = 0; i < totalBelanja.length; i++){
    newData.push(parseInt(totalBelanja[i].harga) * parseInt(totalBelanja[i].kuantitas))
  }
  return newData.reduce((a, b) => a + b)
} ;


// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};

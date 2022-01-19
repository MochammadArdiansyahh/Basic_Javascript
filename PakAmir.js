let harga = [3000, 10000, 4500, 5000]
let jumlah = [20, 8, 10, 5]
let Total = 0

for (let number = 0; number < harga.length; number++) {
    Total += harga[number] * jumlah[number]
}

let hargaTotal = Total * 110/100
console.log('Total = ' + Total);
console.log('Harga Total = ' + hargaTotal);
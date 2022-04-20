const arkFood = (price, voucher, distance, tax) => {
  if (!Number.isInteger(price)) return `Input harga harus number`
  if (typeof voucher !== 'string') return `Input voucher harus string`
  if (!Number.isInteger(distance)) return `Input jarak harus number`
  if (typeof tax !== 'boolean') return `Input pajak harus boolean`

  let diskonArka = price * (50 / 100)
  let diskonDemy = price * (60 / 100)
  let potongan = 0
  let biayaAntar = 5000
  let pajak = 0
  let subTotal = 0
  const maksDiskonArka = 50000
  const maksDiskonDemy = 30000

  if (voucher !== "ARKAFOOD5" && voucher !== "DITRAKTIRDEMY") potongan
  if (voucher === "ARKAFOOD5") {
    if (price >= 50000 && diskonArka <= maksDiskonArka) {
      potongan = diskonArka
    } else if (price >= 50000 && diskonArka > maksDiskonArka) {
      potongan = maksDiskonArka
    }
  }

  if (voucher === "DITRAKTIRDEMY") {
    if (price >= 25000 && diskonDemy <= maksDiskonDemy) {
      potongan = diskonDemy
    } else if (price >= 25000 && diskonDemy > maksDiskonDemy) {
      potongan = maksDiskonDemy
    }
  }

  distance > 2 ? biayaAntar = (distance * 3 - 1) * 1000 : biayaAntar

  tax === true ? pajak = (price * (5 / 100)) : pajak


  subTotal = subTotal + potongan + biayaAntar + pajak
  return `
  Harga       : ${price}
  Potongan    : ${potongan}
  Biaya Antar : ${biayaAntar}
  Pajak       : ${pajak}
  SubTotal    : ${subTotal}
  `
}

const resultArka = arkFood(75000, "DITRAKTIRDEMY", 5, true)
console.log(`Hasil normal ARKAFOOD5 :`, resultArka)
// const resultArkaTanpadiskon = arkFood(45000, "ARKAFOOD5", 5, true)
// const resultArkaTambahJarak = arkFood(75000, "ARKAFOOD5", 7, true)
// const resultArkaTanpaPajak = arkFood(75000, "ARKAFOOD5", 7, false)
// const resultDemy = arkFood(55000, "DITRAKTIRDEMY", 5, true)
// console.log(`Hasil tanpa diskon`, resultArkaTanpadiskon)
// console.log(`Hasil tambah jarak: `, resultArkaTambahJarak)
// console.log(`Hasil tanpa pajak: `, resultArkaTanpaPajak)
// console.log(`Hasil normal DITRAKRIYDEMY :`, resultDemy)
const arkFood = (price, voucher, distance, tax) => {
  if (!Number.isInteger(price)) return `Input harga harus number`
  if (typeof voucher !== 'string') return `Input voucher harus string`
  if (!Number.isInteger(distance)) return `Input jarak harus number`
  if (typeof tax !== 'boolean') return `Input pajak harus boolean`

  let diskonArka = price * (50 / 100)
  let diskonDemy = price * (60 / 100)
  let potongan = 0
  let biayaAntar = 0
  let pajak = 0
  let subTotal = 0
  const maksDiskonArka = 50000
  const maksDiskonDemy = 30000
  const ongkir2km = 5000

  if (voucher === "ARKAFOOD5" && price >= 50000 && diskonArka <= 50000) {
    potongan = potongan + diskonArka
  } else if (voucher === "ARKAFOOD5" && price >= 50000 && diskonArka > 50000) {
    potongan = potongan + maksDiskonArka
  }

  if (voucher === "DITRAKTIRDEMY" && price >= 25000 && diskonDemy <= 30000) {
    potongan = potongan + diskonDemy
  } else if (voucher === "DITRAKTIRDEMY" && price >= 25000 && diskonDemy > 30000) {
    potongan = potongan + maksDiskonDemy
  }

  if (distance > 2) {
    biayaAntar = biayaAntar + (distance * 3 - 1) * 1000
  } else {
    biayaAntar = biayaAntar + ongkir2km
  }

  if (tax === true) {
    pajak = pajak + (price * (5 / 100))
  } else {
    pajak
  }

  subTotal = subTotal + potongan + biayaAntar + pajak
  return `
  Harga       : ${price}
  Potongan    : ${potongan}
  Biaya Antar : ${biayaAntar}
  Pajak       : ${pajak}
  SubTotal    : ${subTotal}
  `
}

const resultArka = arkFood(75000, "ARKAFOOD5", 5, true)
const resultDemy = arkFood(55000, "DITRAKTIRDEMY", 5, true)
console.log(resultDemy)
const divideAndSort = (numb) => {
  if (typeof numb !== 'number') return `Input numb harus berupa Number!`
  let found = []
  let res = []
  const toArr = numb.toString().split('')
  for (let i = 0; i <= toArr.length - 1; i++) {
    found = found.concat(toArr[i]).sort()
    if (toArr[i] == 0) {
      res = res.concat(found)
      found = []
    }
    if (i == toArr.length - 1) {
      res = res.concat(found)
      found = []
    }
  }
  let filt = res.filter(numb => numb != 0).join('')
  return Number(filt)
}

const hasil = divideAndSort(5956560159466056)
console.log(hasil)

/* == Revisi atau program baru == */

const divideAndSortRevisi = (numb) => {
  if (typeof numb !== 'number') return `Input numb harus berupa Number!`
  let res = []
  const toArr = numb.toString().split('0')
  toArr.forEach(item => {
    const arrNumb = item.split('')
    const sort = arrNumb.sort().join('')
    res.push(sort)
  })

  return Number(res.join(''))
}

const hasilRevisi = divideAndSortRevisi(5956560159466056)
console.log(hasilRevisi)
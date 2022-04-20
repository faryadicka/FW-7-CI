const divideAndSort = (numb) => {
  if (typeof numb !== 'number') return `Input numb harus berupa Number!`
  let found = []
  let res = []
  const toArr = numb.toString().split('')
  for (let i = 0; i <= toArr.length - 1; i++) {
    found = found.concat(toArr[i]).sort((a, b) => a - b)
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
  return parseInt(filt)
}

const hasil = divideAndSort(5956560159466056)
console.log(hasil)
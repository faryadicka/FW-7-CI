const cekPalindrom = (word) => {
  if (typeof word !== "string") return `Input word harus string`
  let result = ""
  for (let i = word.length - 1; i >= 0; i--) {
    result += word[i]
  }

  if (word.toLowerCase() !== result.toLowerCase()) return `Kata bukan palindrom`
  return `Palindrom`
}

const hasil = cekPalindrom("Malam")
console.log(hasil)
const reverseWord = (sentence) => {
  if (typeof sentence !== "string") return `Input sentence harus berupa string!`
  let found = ""
  let result = ""
  for (let i = 0; i <= sentence.length - 1; i++) {
    if (sentence[i] !== " ") {
      found = found + sentence[i]
    }
    if (sentence[i] === " ") {
      if (result !== "") {
        result = found + " " + result
        found = ""
      }
      result = found + result
      found = ""
    }
    if (i === sentence.length - 1) {
      result = found + " " + result
      found = ""
    }
  }
  return result
}

const hasil = reverseWord("Saya belajar Javascript")
console.log(hasil)
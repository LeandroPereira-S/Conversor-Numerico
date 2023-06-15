class RomanNumeralConverter {
  constructor() {
    this.romans = ["M", "CM", "D", "CD", "C", "XC", "L",
      "XL", "X", "IX", "V", "IV", "I"];

    this.values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  }

  toArabic(roman) {
    let resultRoman = 0;
    let i = 0;
    for (let idx = 0; idx < this.romans.length; idx++) {
      const numeral = this.romans[idx];
      while (roman.slice(i, i + numeral.length) === numeral) {
        resultRoman += this.values[idx];
        i += numeral.length; 
      }
    }
    return resultRoman;
  }

  toRoman(arabic) {
    let resultArabic = "";
    let i = 0;
    while (arabic > 0) {
      if (arabic >= this.values[i]) {
        resultArabic += this.romans[i];
        arabic -= this.values[i];
      } else {
        i++;
      }
    }
    return resultArabic;
  }
}


const converter = new RomanNumeralConverter();
let arabicTimeout;
let romanTimeout;

function convertToArabic() {
  event.preventDefault();
  clearTimeout(arabicTimeout); // Limpar o timeout anterior

  const input = document.getElementById("numberInput").value;
  const arabicResult = converter.toArabic(input);
  const resultElement = document.getElementById("resultArabic");

  resultElement.style.display = "block";
  resultElement.textContent = `Resultado em Arábico: ${arabicResult}`;

  arabicTimeout = setTimeout(function () {
    resultElement.style.display = "none";
  }, 5000);
}

function convertToRoman() {
  event.preventDefault();
  clearTimeout(romanTimeout); // Limpar o timeout anterior

  const input = document.getElementById("numberInput").value;
  const romanResult = converter.toRoman(Number(input));
  const resultElement = document.getElementById("resultRoman");

  resultElement.style.display = "block";
  resultElement.textContent = `Resultado em Romano: ${romanResult}`;

  romanTimeout = setTimeout(function () {
    resultElement.style.display = "none";
  }, 5000);
}


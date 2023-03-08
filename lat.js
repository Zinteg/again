function convertToLatin() {
    var russianText = document.getElementById("russian-text").value;
    var latinText = russianText.replace(/[а-яА-ЯёЁ]/g, function(match) {
      return transliterate[match];
    });    
    document.getElementById("latin-text").innerHTML = latinText;
  }
  
  var transliterate = {
    "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ё": "yo", "ж": "zh",
    "з": "z", "и": "i", "й": "y", "к": "k", "л": "l", "м": "m", "н": "n", "о": "o",
    "п": "p", "р": "r", "с": "s", "т": "t", "у": "u", "ф": "f", "х": "kh", "ц": "ts",
    "ч": "ch", "ш": "sh", "щ": "shch", "ъ": "", "ы": "y", "ь": "",
    "э": "e", "ю": "yu", "я": "ya",
    "А": "A", "Б": "B", "В": "V", "Г": "G", "Д": "D", "Е": "E", "Ё": "Yo", "Ж": "Zh",
    "З": "Z", "И": "I", "Й": "Y", "К": "K", "Л": "L", "М": "M", "Н": "N", "О": "O",
    "П": "P", "Р": "R", "С": "S", "Т": "T", "У": "U", "Ф": "F", "Х": "Kh", "Ц": "Ts",
    "Ч": "Ch", "Ш": "Sh", "Щ": "Shch", "Ъ": "", "Ы": "Y", "Ь": "",
    "Э": "E", "Ю": "Yu", "Я": "Ya"
};

document.getElementById("russian-text").addEventListener("input", function() {

    convertToLatin();
  });

const russianInput = document.getElementById("russian-text");
const latinOutput = document.getElementById("latin-text");


russianInput.addEventListener("input", function() {

  localStorage.setItem("russianText", russianInput.value);

  convertToLatin();
});


if (localStorage.getItem("russianText")) {

  russianInput.value = localStorage.getItem("russianText");

  convertToLatin();
}


latinOutput.addEventListener("input", function() {

  if (latinOutput.value === "") {
    localStorage.removeItem("russianText");
  }
});

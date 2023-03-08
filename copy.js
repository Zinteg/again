const copyMessage = document.getElementById("copy-message");
const copyButton = document.getElementById("copy-button");

copyButton.addEventListener("click", function() {
  const latinOutput = document.getElementById("latin-text");
  latinOutput.select();
  document.execCommand("copy");
  copyMessage.innerText = "Текст скопирован!";
  setTimeout(function() {
    copyMessage.innerText = "";
  }, 3000);
});

latinOutput.addEventListener("input", function() {

  copyMessage.innerText = "";
});

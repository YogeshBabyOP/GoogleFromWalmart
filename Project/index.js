// google Search.
function performGoogleSearch() {
  var searchInput = document.getElementById("search-input").value;
  if (searchInput.trim() === "") {
    return;
  } else {
    var encodedSearchQuery = encodeURIComponent(searchInput);
    var searchURL = "https://www.google.com/search?q=" + encodedSearchQuery;
    window.location.href = searchURL;
  }
}

// voice Search
function voiceSearch() {
  if ("webkitSpeechRecognition" in window) {
    window.alert("Speak, It will listen to your words !");
    var recognition = new webkitSpeechRecognition();
    recognition.onresult = function (event) {
      var Words = event.results[0][0].transcript;
      console.log("Spoken words:", Words);
      document.getElementById("search-input").value = Words;
      document.getElementById("search-form").submit();
    };
    recognition.start();
  } else {
    window.alert("oops !!, Voice Search is not supported in this browser.");
  }
}


document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("search-input");
  searchInput.focus();
});

const buttons = document.querySelectorAll(".btn-group a");
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    buttons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    window.location.href = this.getAttribute("href");
  });
});

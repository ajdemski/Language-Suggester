// Business Interface Logic

function suggestionGenerator(option1, option2, scale, time) {
  if (option1 === "saturn" && scale >= 5 && time >= 3) {
    return "You should learn C#!";
  } else if (option2 === "Mount Everest" && scale >= 7 && time >= 5) {
    return "You should learn JavaScript!";
  } else {
    return "You should learn Python!";
  }
}

// User Interface Logic

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("survey").addEventListener("submit", function (event) {
    event.preventDefault();

    const option1 = document.getElementById("options-1").value;
    const option2 = document.getElementById("options-2").value;
    const option3 = document.getElementById("options-3").value;
    const scale = parseInt(document.getElementById("scale").value);
    const time = parseInt(document.getElementById("time").value);

    const language = document.getElementById("language");
    const result = document.getElementById("result");

    result.textContent = suggestionGenerator(option1, option2, option3, scale, time);
  });
});

// Business Interface Logic

function suggestionGenerator (option1, option2, option3, scale, time) {
  if (option1 === "saturn" && scale >= 5 && time >= 3) {
    return "You should learn C#!";
  } else if (option2 === "Mount Everest" && scale >= 7 && time >= 5) {
    return "You should learn JavaScript!";
  } else {
    return "You should learn Python!";
  }
}


// User Interface Logic


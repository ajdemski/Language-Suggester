// Business Interface Logic

function suggestionGenerator(option1, option2, option3, scale, time) {
  const optionValues = {
    mars: 1,
    jupiter: 2,
    saturn: 3,
    theEiffelTower: 1,
    mountEverest: 2,
    theGrandCanyon: 3,
    chameleon: 1,
    panda: 2,
    platypus: 3,
  };

  const totalValue = optionValues[option1] + optionValues[option2] + optionValues[option3] + scale + time;

  if (totalValue >= 15) {
    return "You should learn C#!";
  } else if (totalValue >= 12) {
    return "You should learn JavaScript!";
  } else if (totalValue >= 9) {
    return "You should learn Ruby!";
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
    const result = document.getElementById("result");

    result.textContent = suggestionGenerator(option1, option2, option3, scale, time);
  });
});

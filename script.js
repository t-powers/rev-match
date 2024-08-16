import { vehicleData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");

//push unique emotions to new array, return that array
function getEmotionArray(cars) {
  const tagArray = [];
  for (let car of cars) {
    for (let tag of car.emotionTags) {
      if (!tagArray.includes(tag)) {
        tagArray.push(tag);
      }
    }
  }
  return tagArray;
}

function renderEmotionsArray(cars) {
  let arrayString = ``;
  const emotions = getEmotionArray(cars);
  for (let emotion of emotions) {
    arrayString += `<p>${emotion}</p>`;
  }
  emotionRadios.innerHTML = arrayString;
}
renderEmotionsArray(vehicleData);

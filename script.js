import { vehicleData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");

//push unique emotions to new array, return that array
function getEmotionArray(cars) {
  const tagArray = [];
  for (let car of cars) {
    for (let tag of car.emotionTags) {
      console.log(tag);
    }
  }
  return tagArray;
}

import { vehicleData } from "./data.js";

function getEmotionArray(cars) {
  for (let car of cars) {
    for (let tag of car.emotionTags) {
      console.log(tag);
    }
  }
}

import { vehicleData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const onlyHyper = document.getElementById("hyper-only-image");
const imageModal = document.getElementById("image-modal");
const imageModalInner = document.getElementById("image-modal-inner");
const modalCloseBtn = document.getElementById("image-modal-close-btn");

emotionRadios.addEventListener("change", highlightRadios);

//highlight radio buttons
function highlightRadios(e) {
  const radios = document.getElementsByClassName("radios");
  for (let radio of radios) {
    radio.classList.remove("highlight");
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

//push unique emotions to tagArray
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

//using getEmotionArray function, render emotions to DOM
function renderEmotionsArray(cars) {
  let arrayString = ``;
  const emotions = getEmotionArray(cars);
  for (let emotion of emotions) {
    arrayString += `
      <div class="radios">
      <label
        for="${emotion}">${emotion}
      </label>
      <input 
        type="radio" 
        id="${emotion}" 
        name="emotion-tag" 
        value="${emotion}">
      </div>
      `;
  }
  emotionRadios.innerHTML = arrayString;
}
renderEmotionsArray(vehicleData);

import { vehicleData } from "./data.js";

const emotionRadios = document.getElementById("emotion-radios");
const getImageBtn = document.getElementById("get-image-btn");
const onlyHyper = document.getElementById("hyper-only-image");
const imageModal = document.getElementById("image-modal");
const imageModalInner = document.getElementById("image-modal-inner");
const modalCloseBtn = document.getElementById("image-modal-close-btn");

// Attach event listeners
emotionRadios.addEventListener("change", highlightRadios);
modalCloseBtn.addEventListener("click", closeModal);
getImageBtn.addEventListener("click", renderVehicleToDOM);

// Close modal
function closeModal() {
  imageModal.style.display = "none";
}

// Highlight radio buttons
function highlightRadios(e) {
  const radios = document.getElementsByClassName("radios");
  for (let radio of radios) {
    radio.classList.remove("highlight");
  }
  document.getElementById(e.target.id).parentElement.classList.add("highlight");
}

// Render vehicle image to modal
function renderVehicleToDOM() {
  const randomObject = randomVehicle();
  if (randomObject) {
    imageModalInner.innerHTML = `
          <img 
          class="car-img" 
          src="images/${randomObject.image}" 
          alt="${randomObject.alt}"
          >`;
    imageModal.style.display = "flex"; // Show modal
  } else {
    console.error("No matching vehicle found.");
  }
}

// Get random vehicle from matching cars
function randomVehicle() {
  const matchingCars = getMatchingCarsArray();
  if (matchingCars.length === 0) {
    return null; // Return null if no matching cars
  }
  const randomNumber = Math.floor(Math.random() * matchingCars.length);
  return matchingCars[randomNumber];
}

// Get array of matching cars based on selected emotion
function getMatchingCarsArray() {
  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    const onlyHyperChecked = onlyHyper.checked;

    const matchingCarArray = vehicleData.filter(function (car) {
      // Use onlyHyperChecked instead of isGif
      return (
        car.emotionTags.includes(selectedEmotion) &&
        (!onlyHyperChecked || car.isGif)
      ); // Apply filter based on checkbox
    });
    return matchingCarArray;
  }
  return []; // Return an empty array if no radio is checked
}

// Push unique emotions to tagArray
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

// Render emotions to DOM
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

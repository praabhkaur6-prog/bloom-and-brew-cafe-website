const addParticipant = (person) => {

  let list = document.getElementById("participants-list");

  let newItem = document.createElement("p");
  newItem.textContent = "🌿 " + person.name + " from " + person.state + " has booked!";

  list.appendChild(newItem);

  let count = document.getElementById("rsvp-count");
  count.textContent = list.querySelectorAll("p").length;
};

const validateForm = () => {

  let containsErrors = false;

  var rsvpInputs = document.querySelectorAll("#rsvp-form input");

  for (let i = 0; i < rsvpInputs.length; i++) {

    let value = rsvpInputs[i].value.trim();

    if (value.length < 2) {
      containsErrors = true;
      rsvpInputs[i].classList.add("error");
    } else {
      rsvpInputs[i].classList.remove("error");
    }

  }

  let email = document.getElementById("email");

  if (!email.value.includes("@")) {
    containsErrors = true;
    email.classList.add("error");
  } else {
    email.classList.remove("error");
  }

  if (containsErrors == false) {

    let person = {
  name: document.getElementById("name").value,
  state: document.getElementById("state").value,
  email: document.getElementById("email").value
  };

  addParticipant(person);
  toggleModal(person.name);

    for (let i = 0; i < rsvpInputs.length; i++) {
      rsvpInputs[i].value = "";
    }

  }

};

let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
};

themeButton.addEventListener("click", toggleDarkMode);

document.getElementById("rsvp-button").addEventListener("click", validateForm);

// ===== MODAL FUNCTION =====
const toggleModal = (personName) => {

  let modal = document.getElementById("success-modal");
  let modalText = document.getElementById("modal-text");

  modal.style.display = "flex";

  modalText.textContent = `Thanks ${personName}! 🌸 Your RSVP is confirmed!`;

  let intervalId = setInterval(animateImage, 500);

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 5000);
};

// ===== ANIMATION =====
let rotateFactor = 0;

const animateImage = () => {
  let modalImage = document.getElementById("modal-image");

  rotateFactor = (rotateFactor === 0) ? -10 : 0;
  modalImage.style.transform = `rotate(${rotateFactor}deg)`;
};
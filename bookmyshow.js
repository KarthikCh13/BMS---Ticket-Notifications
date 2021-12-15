const dateToCheck = "17";
const reloadInterval = 5 * 60;
const theatres = {
  "Cinepolis: PVP Square Mall, Vijayawada": 1,
  "INOX: Urvasi Complex, Gandhi Nagar": 2,
  "INOX: LEPL Icon, Patamata": 3,
  "PVR: Ripples, Vijaywada": 4,
  "G3 Raj Yuvraj (4K Dolby Atmos): Vijayawada": 5,
  "Sailaja Theatre: Vijayawada": 6,
};

const foundAudio =
  "https://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3";

readHTML();

function readHTML() {
  const today = new Date();
  console.log(
    `checked for updates on: ${today.getHours()}:${today.getMinutes()}`
  );

  const dateWrapper = document.getElementsByClassName("dates-wrapper");
  const currentDate = today.getDate();
  if (currentDate > dateToCheck) {
    alert(
      "You can't check for past dates \n Check only on today's date or upcoming dates!"
    );
    return;
  } else {
    console.log(`Checking for ticket bookings on ${dateToCheck}`);
  }

  const datesAvailable = dateWrapper[0].getElementsByClassName("date-numeric");
  let dateFound;
  for (let date of datesAvailable) {
    if (date.innerText.trim() === dateToCheck) {
      dateFound = true;
      console.log(
        "Tickets are available on your selected date! - ",
        date.innerText.trim()
      );
    }
  }

  if (dateFound === true) {
    if (Object.keys(theatres).length === 0) {
      console.log("You are not searching for any theatres!");
      successAudio();
      return;
    } else {
      let availableTheatresHTML =
        document.getElementsByClassName("__venue-name");

      let openTheatres = [];
      for (let i = 0; i < availableTheatresHTML.length; i++) {
        openTheatres.push(availableTheatresHTML[i].text);
      }
      searchForTheatre(openTheatres);
    }
  }
}

function successAudio() {
  let audioSuccess = new Audio(foundAudio);
  audioSuccess.volume = 1;
  console.log(`playing audio at ${audioSuccess.volume} volume`);
  audioSuccess.play();
}

function searchForTheatre(openTheatres) {
  console.log(`Number of theatres available : ${openTheatres.length}`);
  console.log("Theatres you are looking for : ", theatres);

  for (let key in theatres) {
    if (openTheatres.includes(key)) {
      alert(`Ones of your theatres - ${key} is NOW OPEN for booking!`);
      successAudio();
    } else {
      console.log(`Bookings are NOT OPEN for ${key} yet!`);
    }
  }
}

setInterval(() => {
  location.reload(true);
}, 1000 * reloadInterval);

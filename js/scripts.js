function sectionNav(index) {
  var sechide = document.getElementsByClassName("sections");
  for (var i = 0; i < sechide.length; i++) {
    sechide[i].classList.add("hide");
  }
  sechide[index].classList.remove("hide");
  setTimeout(function () {
    AnimationSec(index);
  }, 1);
}
function AnimationSec(index) {
  var secanim = document.getElementsByClassName("Anim");
  for (var i = 0; i < secanim.length; i++) {
    secanim[i].style.transform = "translateX(100%)";
  }
  secanim[index].style.transform = "translateX(0)";
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Smooth scrolling animation
  });
}
function setActiveNav(index, istrue) {
  var navbar = document.getElementById("navbar");
  var items = navbar.getElementsByTagName("li");

  // Remove active class from all items
  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
  }
  // Add active class to the clicked item
  items[index].classList.add("active");
  sectionNav(index);
  if (istrue) {
    toggleanimation();
  }
}

function gotoWhatsapp() {
window.open(
  "https://wa.me/919205582846?text=Hello%2C%20I%20came%20across%20your%20portfolio%20and%20I%27m%20interested%20in%20discussing%20a%20potential%20project%20with%20you.%20Let%27s%20connect%20and%20explore%20how%20we%20can%20collaborate%21%20",
  "_blank",
  "noopener,noreferrer"
);
}

document.addEventListener("DOMContentLoaded", function () {
  const secanim = document.getElementsByClassName("Anim");

  secanim[0].style.transform = "translateX(0)";
});

//form
function submitForm(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var subject = document.getElementById("subject").value;
  var isValid = true;
  var body = `
    <strong>Name: ${name} </strong><br>
    <strong>Subject:</strong> ${subject}<br>
    <strong>E-mail:</strong> ${email}<br>
    <strong>Message:</strong> ${message}
  `;
  if (name === "" || email === "" || message === "" || subject === "") {
    isValid = false;
  }
  if (isValid) {
    Email.send({
      SecureToken: "edb12103-47b4-444c-8806-06f851732cff",
      To: "rahmanhusain899@gmail.com",
      From: "ritchiedennis793@gmail.com",
      Subject: subject,
      Body: body,
    }).then((message) => alert("Message send Successfully!"));
  }
  document.getElementById("contactForm").reset();
}
//togle button animation start
function toggleanimation() {
  var spans = document.querySelectorAll(".togglebtn div");
  spans.forEach(function (span) {
    span.classList.toggle("toganim");
  });
  document.querySelector(".togglebtn").classList.toggle("toganim");
  document.querySelector(".main-container .nav").classList.toggle("navanim");
}
//toggle button animation end

//styler animation start

function startAnimation() {
  interval = setInterval(showNextItem, 110);
  // Adjust delay here (in milliseconds)
}

function changesetting() {
  var spans = document.querySelectorAll(".colors");
  spans.forEach(function (span) {
    span.classList.toggle("add");
  });
  var rotate = document.querySelector(".icons:nth-child(2) i");
  rotate.classList.toggle("rotate");
}
function changemode() {
  var rotate = document.querySelector(".icons:nth-child(1) i");
  rotate.classList.toggle("rotate");
  const htmlElement = document.documentElement;
  htmlElement.classList.toggle("dark");
}

function toggleColors(
  index,
  colorVariable,
  stylercolorvariable,
  imgbackcolorVariable
) {
  var items = document.getElementsByClassName("colors");
  var root = document.documentElement;
  var colorValue = getComputedStyle(document.documentElement)
    .getPropertyValue(colorVariable)
    .trim();
  var stylercolorValue = getComputedStyle(document.documentElement)
    .getPropertyValue(stylercolorvariable)
    .trim();
  var imgbackcolorValue = getComputedStyle(document.documentElement)
    .getPropertyValue(imgbackcolorVariable)
    .trim();
  // Remove active class from all items
  for (var i = 0; i < items.length; i++) {
    items[i].classList.remove("selected");
  }
  // Add active class to the clicked item
  items[index].classList.add("selected");
  root.style.setProperty("--colored-text-color", colorValue);
  root.style.setProperty("--styler-back-color", stylercolorValue);
 console.log(imgbackcolorValue)
  root.style.setProperty("--imgbackcolor", imgbackcolorValue);
 
  var spanst = document.querySelectorAll(".colors");
  spanst.forEach(function (span) {
    span.classList.toggle("add");
  });

  var rotate = document.querySelector(".icons:nth-child(2) i");
  rotate.classList.toggle("rotate");

  var spans = document.querySelectorAll(".item-bars");
  spans.forEach(function (span) {
    span.style.backgroundColor = stylercolorValue;
  });
}
//styleranimation end
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  changemode();
}

var typed = new Typed("#intro", {
  strings: [
    "Computer Science Enthusiast",
    "Computer Science Student",
    "Programmer",
  ],
  typeSpeed: 100,
  backspeed: 60,
  loop: true,
  smartBackspace: false,
});

//preloader


let countdown = 5;
const countdownElement = document.getElementById('countdown');
const redirectUrl = 'https://rahmanfolio.vercel.app/'; // Replace with your desired URL

function updateCountdown() {
    countdownElement.textContent = countdown;
    if (countdown === 0) {
        window.location.href = redirectUrl;
    } else {
        countdown--;
        setTimeout(updateCountdown, 1000);
    }
}

document.getElementById('redirect-link').href = redirectUrl;

updateCountdown();
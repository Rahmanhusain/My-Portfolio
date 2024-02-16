function sectionNav(index) {
  var sechide = document.getElementsByClassName("sections");
  for (var i = 0; i < sechide.length; i++) {
    sechide[i].classList.add("hide");
  }
  sechide[index].classList.remove("hide");
  setTimeout(function() {
    AnimationSec(index);
}, 1);
}
function AnimationSec(index) {
  var secanim = document.getElementsByClassName("Anim"); 
  for (var i = 0; i < secanim.length; i++) {
    secanim[i].style.transform = 'translateX(100%)';
  }
  secanim[index].style.transform = 'translateX(0)';
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling animation
  });
}
function setActiveNav(index,istrue) {
    var navbar = document.getElementById("navbar");
    var items = navbar.getElementsByTagName("li");
    

    // Remove active class from all items
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove("active");
    }
    // Add active class to the clicked item
    items[index].classList.add("active");
    sectionNav(index);
    if(istrue){
    toggleanimation();
    }
  }

  
  document.addEventListener('DOMContentLoaded', function() {
    const secanim = document.getElementsByClassName("Anim"); 

    secanim[0].style.transform = 'translateX(0)';
  });

//form
function submitForm(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var subject= document.getElementById("subject").value;
    var isValid = true;
    var body=`
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
            SecureToken : "edb12103-47b4-444c-8806-06f851732cff",
            To : 'rahmanhusain899@gmail.com',
            From : "ritchiedennis793@gmail.com",
            Subject : subject,
            Body : body
        }).then(
          message => alert("Message send Successfully!")
        );
    }
    document.getElementById("contactForm").reset();
    
}
//togle button animation start
function toggleanimation(){
  var spans = document.querySelectorAll('.togglebtn div');
  spans.forEach(function(span) {
    span.classList.toggle('toganim');
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

function changesetting(){
  var spans = document.querySelectorAll('.colors');
  spans.forEach(function(span) {
    span.classList.toggle('add');
  });
  var rotate = document.querySelector(".icons:nth-child(2) i");
  rotate.classList.toggle('rotate');
}
function changemode(){
  var rotate = document.querySelector(".icons:nth-child(1) i");
  rotate.classList.toggle('rotate');
  const htmlElement = document.documentElement;
  htmlElement.classList.toggle('dark');
}

function toggleColors(index,colorVariable,stylercolorvariable) {
    var items = document.getElementsByClassName("colors");
    var root = document.documentElement;
    var colorValue = getComputedStyle(document.documentElement).getPropertyValue(colorVariable).trim();
    var stylercolorValue = getComputedStyle(document.documentElement).getPropertyValue(stylercolorvariable).trim();
    // Remove active class from all items
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove("selected");
    }
    // Add active class to the clicked item
    items[index].classList.add("selected");
    root.style.setProperty('--colored-text-color', colorValue);
    root.style.setProperty('--styler-back-color', stylercolorValue);
    var spanst = document.querySelectorAll('.colors');
  spanst.forEach(function(span) {
    span.classList.toggle('add');
  });
    var spans=document.querySelectorAll('.item-bars');
    spans.forEach(function(span) {
      span.style.backgroundColor = stylercolorValue;
    });
    
  }
//styleranimation end
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  changemode();
}


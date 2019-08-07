var contactme = document.getElementsByClassName("contact-me");
for (var i = 0; i < contactme.length; i++) {
  contactme[i].addEventListener("mouseover", function() {
    console.log("hovered");
  });
}

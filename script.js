// ================= NAVIGATION MENU =================

function toggleMenu() {

    var nav = document.getElementById("navLinks");

    nav.classList.toggle("active");

}


// ================= CONTACT FORM =================

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    var name = document.getElementById("name").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );

    document.getElementById("contactForm").reset();

});


// ================= SCROLL ANIMATION =================

var sections = document.querySelectorAll(".section");

window.addEventListener("scroll", function() {

    sections.forEach(function(section) {

        var position = section.getBoundingClientRect().top;

        var screenPosition = window.innerHeight * 0.85;

        if (position < screenPosition) {

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

});


// ================= INITIAL SECTION STYLE =================

sections.forEach(function(section) {

    section.style.opacity = "0";

    section.style.transform = "translateY(30px)";

    section.style.transition = "opacity 0.7s ease, transform 0.7s ease";

});
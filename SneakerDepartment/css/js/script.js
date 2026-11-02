// View Product button
function showMessage(productName) {
    alert(
        "Thank you for your interest in " + productName +
        "!\n\nPlease contact Sneaker Department for more information about availability and sizes."
    );
}


// Contact Form
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {

            alert("Please complete all the fields before sending your message.");

            return;
        }

        alert(
            "Message sent successfully! ✅\n\n" +
            "Thank you, " + name + ".\n" +
            "We have received your message and will contact you at " + email + "."
        );

        contactForm.reset();
    });
}
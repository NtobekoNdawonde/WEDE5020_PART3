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

        if (name.length < 2) {
    alert("Please enter a valid name (at least 2 characters).");
    return;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
}

if (message.length < 10) {
    alert("Your message must contain at least 10 characters.");
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
// Sneaker Search Feature
const productSearch = document.getElementById("productSearch");

if (productSearch) {

    productSearch.addEventListener("input", function() {

        const searchValue = productSearch.value.toLowerCase();
        const products = document.querySelectorAll(".product-card");
        const searchMessage = document.getElementById("searchMessage");

        let foundProducts = 0;

        products.forEach(function(product) {

            const heading = product.querySelector("h3");
const productName = heading ? heading.textContent.toLowerCase() : "";

            if (productName.includes(searchValue)) {
                product.style.display = "block";
                foundProducts++;
            } else {
                product.style.display = "none";
            }

        });

        if (foundProducts === 0) {
            searchMessage.textContent = "No sneakers found. Try another name.";
        } else {
            searchMessage.textContent = foundProducts + " sneaker(s) found.";
        }

    });

}
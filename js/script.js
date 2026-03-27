document
.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let message =
    document.getElementById("message").value;

    if (name === "") {

        alert("Please enter your name");

        return;

    }

    if (email === "") {

        alert("Please enter your email");

        return;

    }

    if (!email.includes("@")) {

        alert("Enter a valid email");

        return;

    }

    if (message === "") {

        alert("Please enter your message");

        return;

    }

    alert("Message sent successfully!");

});
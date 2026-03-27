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



document
.getElementById("bookingForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    let name =
    document.getElementById("bname").value;

    let email =
    document.getElementById("bemail").value;

    let destination =
    document.getElementById("destination").value;

    let date =
    document.getElementById("date").value;

    let people =
    document.getElementById("people").value;

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

    if (destination === "") {

        alert("Please select a destination");
        return;

    }

    if (date === "") {

        alert("Please select a travel date");
        return;

    }

    if (people === "" || people <= 0) {

        alert("Enter valid number of people");
        return;

    }

    alert("Booking successful!");

});
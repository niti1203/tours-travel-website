
const container = document.getElementById("packageContainer");

packages.forEach(pkg => {
  container.innerHTML += `
    <div class="card">
      <img src="${pkg.image}">
      <h3>${pkg.title}</h3>
      <p>${pkg.price} • ${pkg.duration}</p>
    </div>
  `;
});


const reviewDiv = document.getElementById("reviews");

reviews.forEach(r => {
  reviewDiv.innerHTML += `<p>"${r}"</p>`;
});

// NEWSLETTER VALIDATION
function subscribe() {
  const email = document.getElementById("email").value;

  if (!email.includes("@")) {
    alert("Enter valid email");
  } else {
    alert("Subscribed successfully!");
  }
}

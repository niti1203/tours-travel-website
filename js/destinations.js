const destinationContainer = document.getElementById("destinationsContainer");

destinations.forEach(dest => {

    const card = `
  <div class="card">
        <img src="${dest.image}">
        <div class="card-content">
            <h3>${dest.title}</h3>
            <p>${dest.description}</p>
        </div>
        <small>Explore now →</small>
    </div>
    `;

    destinationContainer.innerHTML += card;
});

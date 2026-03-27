const packageContainer = document.getElementById("allPackages");
packages.forEach(pkg =>{
    const  card=`
    <div class="card">
    <img src="${pkg.image}" alt="${pkg.title}">
    <h3>${pkg.title}</h3>
    <p>${pkg.price} • ${pkg.duration}</p>
    </div>
    `;
    packageContainer.innerHTML+=card;
})

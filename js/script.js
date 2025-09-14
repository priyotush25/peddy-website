// load category
const loadCategory = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategory(data.categories))
    .catch((err) => console.log(err));
};

loadCategory();

// display category
const displayCategory = (categories) => {
  const categoryContainer = document.getElementById("category-container");

  categories.forEach((category) => {
    categoryContainer.innerHTML += `
    
    
     <button onclick="loadPetData(${category.id})" class="flex items-center gap-3 border px-8 py-2 rounded-lg border-gray-200 text-xl font-semibold">
     <img src=${category.category_icon} class="h-full w-full"/>
     ${category.category} 
     </button>
    
    `;
  });
};

// load pet by category
const loadPetData = (id) => {
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then((res) => res.json())
    .then((data) => displayCategoryPets(data.petData))
    .catch((err) => console.log(err));
};

// display by category pets
const petsContainer = document.getElementById("petsContainer");

const displayCategoryPets = (pets) => {
  petsContainer.innerHTML += `  
    <!-- card -->
      <div class="card bg-base-100 w-full shadow-sm">
        <figure class="p-5">
          <img
            class="rounded-lg"
            src=${pets.image}
            alt="Shoes"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${pets.breed}</h2>
          <p>Breed: <span>${pets.category}</span> </p>
          <p>Birth: <span>${pets.date_of_birth}</span> </p>
          <p>Gender: <span>${pets.gender}</span> </p>
          <p>Price : <span>${pets.price}</span> $</p>
          <div class="card-actions justify-between">
            <button class="btn">Buy Now</button>
            <button class="btn">Adopt</button>
            <button class="btn">Details</button>
          </div>
        </div>
      </div>
  
  `;
};

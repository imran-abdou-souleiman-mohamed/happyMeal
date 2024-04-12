const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
const recipesPerPage = 6;
let currentPage = 1;

// Load JSON data from file
fetch('recette.json')
  .then(response => response.json())
  .then(data => {
    // Store the JSON data in a variable for easy access
    const recipes = data.recettes;

    // Event listeners
    searchBtn.addEventListener('click', getMealList);
    mealList.addEventListener('click', getMealRecipe);
    recipeCloseBtn.addEventListener('click', () => {
        mealDetailsContent.parentElement.classList.remove('showRecipe');
    });

    // Function to populate meal list
    function getMealList(){
        let searchInputTxt = document.getElementById('search-input').value.trim();
        let html = "";
        recipes.forEach(recipe => {
            // Check if the recipe name includes the search input
            if(recipe.nom.toLowerCase().includes(searchInputTxt.toLowerCase())) {
                html += `
                    <div class="meal-item">
                        <img src="${recipe.image}" alt="${recipe.nom}" class="recipe-image-preview">
                        <div class="meal-name">
                            <h3>${recipe.nom}</h3>
                            <a href="#" class="recipe-btn">Get Recipe</a>
                        </div>
                    </div>
                `;
            }
        });
        // Display the HTML
        mealList.innerHTML = html;
    }
    

    // Function to get recipe details
    function getMealRecipe(e){
        e.preventDefault();
        if(e.target.classList.contains('recipe-btn')){
            let mealName = e.target.parentElement.querySelector('h3').textContent;
            let recipe = recipes.find(recipe => recipe.nom === mealName);
            if(recipe) {
                mealRecipeModal(recipe);
            }
        }
        
    }
    
});

// Function to create a modal
function mealRecipeModal(recipe){
    let html = `
        <h2 class="recipe-title">${recipe.nom}</h2>
        <p class="recipe-category">${recipe.categorie}</p>
        <div class="recipe-ingredients">
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient.nom} - ${ingredient.quantite}</li>`).join('')}
            </ul>
        </div>
        <div class="recipe-instruct">
            <h3>Instructions:</h3>
            <ul>
                ${recipe.etapes.map(step => `<li>${step}</li>`).join('')}
            </ul>
        </div>
    `;
    mealDetailsContent.innerHTML = html;
    mealDetailsContent.parentElement.classList.add('showRecipe');
}

// function to redirect page

// Modify redirectToPage function to redirect to different pages based on the page number
function navigateToPage(pageNumber) {
    if (pageNumber === 1) {
        window.location.href = 'recette.html'; // Redirect to recette.html for page 1
    } else {
        window.location.href = `recette02.html?page=${pageNumber}`; // Redirect to recette02.html with the appropriate page number as a query parameter for other pages
    }
}




function displayPagination(totalRecipes){
    const totalPages = Math.ceil(totalRecipes/recipesPerPage);
    const paginationContainer = document.getElementById('pagination');

    let html = "";
    for (let i = 1; i <= totalPages; i++){
        html += `
            <li class="page-item ${currentPage === i ? 'active' : ''}">
                <a class="page-link" href="#" data-page="${i}" onclick="redirectToPage(${i})">${i}</a>
            </li>
        `;
    }

    paginationContainer.innerHTML = html;

    // Add event listener to each pagination link
    paginationContainer.querySelectorAll('.page-link').forEach(link =>  {
        link.addEventListener('click', () => {
            currentPage = parseInt(link.dataset.page);
            // You can add code here to load the recipes for the selected page
        });
    });
}   
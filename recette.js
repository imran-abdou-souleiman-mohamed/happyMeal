const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.meal-details-content');
const recipeCloseBtn = document.getElementById('recipe-close-btn');
const paginationContainer = document.getElementById('pagination');
const searchInput = document.getElementById('search-input'); // Get the search input element

const recipesPerPage = 6;
let currentPage = 1;
let currentRecipes = []; // Store the current recipes to be displayed

// Load JSON data from file
fetch('recette.json')
  .then(response => response.json())
  .then(data => {
    const recipes = data.recettes;
    currentRecipes = recipes; // Initially, set currentRecipes to all recipes

    // Event listeners
    searchBtn.addEventListener('click', getMealList);
    mealList.addEventListener('click', getMealRecipe);
    recipeCloseBtn.addEventListener('click', () => {
        mealDetailsContent.parentElement.classList.remove('showRecipe');
    });
    paginationContainer.addEventListener('click', handlePaginationClick);
    
    // Add event listener to search input to handle input event
    searchInput.addEventListener('input', () => {
        getMealList(); // Call getMealList function whenever input changes
    });

    // Function to populate meal list
    function getMealList(){
        let searchInputTxt = searchInput.value.trim().toLowerCase();
        let filteredRecipes = currentRecipes.filter(recipe => recipe.nom.toLowerCase().includes(searchInputTxt));
        
        // Display filtered recipes with pagination
        displayRecipes(filteredRecipes);
    }

    // Function to get recipe details
    function getMealRecipe(e){
        e.preventDefault();
        if(e.target.classList.contains('recipe-btn')){
            let mealName = e.target.dataset.recipe;
            let recipe = currentRecipes.find(recipe => recipe.nom === mealName);
            if(recipe) {
                mealRecipeModal(recipe);
            }
        }
    }

    // Function to handle pagination click
    function handlePaginationClick(e) {
        e.preventDefault();
        if (e.target.classList.contains('page-link')) {
            const pageNumber = parseInt(e.target.dataset.page);
            if (pageNumber === 1 || window.location.href.includes('recette02.html')) {
                window.location.href = 'recette.html'; // Redirect to page 1
            } else {
                window.location.href = 'recette02.html?page=' + pageNumber; // Redirect to other pages
            }
        }
    }

    // Function to navigate to a specific page
    function navigateToPage(pageNumber) {
        // Update currentPage variable
        currentPage = pageNumber;

        // Re-display recipes for the selected page
        getMealList();
    }

    // Function to display recipes with pagination
    function displayRecipes(recipes) {
        // Calculate start and end index for the current page
        const startIndex = (currentPage - 1) * recipesPerPage;
        const endIndex = startIndex + recipesPerPage;
        
        // Slice the recipes array to get recipes for the current page
        const recipesForPage = recipes.slice(startIndex, endIndex);
        
        let html = "";
        recipesForPage.forEach(recipe => {
            html += `
                <div class="meal-item">
                    <img src="${recipe.image}" alt="${recipe.nom}" class="recipe-image-preview">
                    <div class="meal-name">
                        <h3>${recipe.nom}</h3>
                        <a href="#" class="recipe-btn" data-recipe="${recipe.nom}">Get Recipe</a>
                    </div>
                </div>
            `;
        });
        mealList.innerHTML = html;
        
        // Display pagination
        displayPagination(recipes.length);
    }

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

    // Function to display pagination
    function displayPagination(totalRecipes){
        const totalPages = Math.ceil(totalRecipes / recipesPerPage);

        let html = "";
        for (let i = 1; i <= totalPages; i++){
            html += `
                <li class="page-item ${currentPage === i ? 'active' : ''}">
                    <a class="page-link" href="#" data-page="${i}">${i}</a>
                </li>
            `;
        }

        paginationContainer.innerHTML = html;
    }
});

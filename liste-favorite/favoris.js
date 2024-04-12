// Simuler des données de panier et de favoris
let panierItems = ["Produit 1", "Produit 2", "Produit 3"];
let favorisItems = ["Produit A", "Produit B", "Produit C"];

// Fonction pour afficher le contenu du panier
function afficherPanier() {
    let panierContent = document.getElementById("panierContent");
    panierContent.innerHTML = ""; // Effacer le contenu actuel du panier
    
    panierItems.forEach(item => {
        let newItem = document.createElement("div");
        newItem.textContent = item;
        panierContent.appendChild(newItem);
    });
}

// Fonction pour afficher le contenu des favoris
function afficherFavoris() {
    let favorisContent = document.getElementById("favorisContent");
    favorisContent.innerHTML = ""; // Effacer le contenu actuel des favoris
    
    favorisItems.forEach(item => {
        let newItem = document.createElement("div");
        newItem.textContent = item;
        favorisContent.appendChild(newItem);
    });
}

// Écouteurs d'événements pour les liens du panier et des favoris
document.getElementById("panierLink").addEventListener("click", function(event) {
    event.preventDefault(); // Empêcher le comportement de lien par défaut
    document.getElementById("panierSection").style.display = "block";
    document.getElementById("favorisSection").style.display = "none";
    afficherPanier();
});

document.getElementById("favorisLink").addEventListener("click", function(event) {
    event.preventDefault(); // Empêcher le comportement de lien par défaut
    document.getElementById("panierSection").style.display = "none";
    document.getElementById("favorisSection").style.display = "block";
    afficherFavoris();
});

// Par défaut, afficher le panier lors du chargement de la page
document.getElementById("panierLink").click();








// Fonction pour ajouter un élément à la liste de favoris
function ajouterAuxFavoris(element) {
    // Récupérer les éléments de la liste de favoris existante depuis localStorage
    let favoris = JSON.parse(localStorage.getItem('favoris')) || [];
    
    // Ajouter l'élément à la liste de favoris s'il n'est pas déjà présent
    if (!favoris.includes(element)) {
        favoris.push(element);
        
        // Mettre à jour les données dans localStorage
        localStorage.setItem('favoris', JSON.stringify(favoris));
    }
}

// Événement de clic sur un élément à ajouter aux favoris (par exemple, un bouton)
document.getElementById('boutonAjouterAuxFavoris').addEventListener('click', function() {
    // Élément à ajouter aux favoris (vous pouvez récupérer cela dynamiquement)
    let element = 'Nom de l\'élément';
    
    // Appeler la fonction pour ajouter l'élément aux favoris
    ajouterAuxFavoris(element);
    alert('Ajouté aux favoris!');
});
